import { useToggle } from 'hooks';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import styled from 'styled-components';
import { TextVariants } from 'types';
import { AppText, IconButton } from 'ui';
import { IconButtonSize } from 'ui/IconButton/IconButton';

import { Add, Mastercard, Trash, Visa } from '../../../../../../../../../public/svg/components';
import { InnopayCardType } from '../../../../../../../../__generated__/types';
import { usedeleteCard } from '../../../../../../../../graphql/mutations/User/__generated__/deleteCard.mutation';
import { client } from '../../../../../../../../libs';
import { notify } from '../../../../../../../../services';
import { DeleteModal } from '../DeleteModal';

export enum cardTypeEnum {
  VISA,
  MASTERCARD,
}

type CardProps = {
  hasCard?: boolean;
  cardLastFourDigits: string;
  cardType: InnopayCardType;
  cardId: string;
};

export const Card: FC<CardProps> = ({ hasCard = true, cardLastFourDigits, cardType, cardId }) => {
  const { t } = useTranslation('profilePage', { keyPrefix: 'payments' });
  const { t: tCardLinkingPage } = useTranslation('cardLinkingPage', {});
  const { isOpened, open, close } = useToggle(false);

  const [deleteCard, { loading }] = usedeleteCard({
    variables: {
      input: {
        cardId,
      },
    },
    onCompleted: (data) => {
      const problemType = data.innopay_card__delete.problem?.__typename;
      const problemsTypes = ['DeletingCardIsActiveProblem', 'InnopayServiceBadRequestProblem'];
      if (problemType && problemsTypes.includes(problemType)) {
        notify(data.innopay_card__delete.problem?.message!);
      }
      if (data.innopay_card__delete.ok) {
        notify(tCardLinkingPage('states.paymentMade'));
        client.cache.evict({ id: client.cache.identify({ __typename: 'InnopayCardModel', id: cardId }) });
        client.cache.gc();
      }
    },
  });

  const handleAddCardClick = () => {};

  const handleOnSubmitDelete = async () => {
    await deleteCard();
    close();
  };

  const renderCartTypeIcon = (cardType: InnopayCardType) => {
    // TODO mapping
    switch (cardType) {
      case InnopayCardType.Mastercard: {
        return <Mastercard />;
      }
      case InnopayCardType.Visa: {
        return <Visa />;
      }
      default: {
        // need default
      }
    }
  };

  return (
    <CardContainer>
      {hasCard ? (
        <>
          <CardInfo>
            <CardTypeIcon>{renderCartTypeIcon(cardType)}</CardTypeIcon>
            <CardNumber>•••• {cardLastFourDigits}</CardNumber>
          </CardInfo>
          <StyledIconButton IconComponent={Trash} onClick={open} size={IconButtonSize.SMALL} />
        </>
      ) : (
        <>
          <AddNewCardText variant={TextVariants.SECONDARY}>{t('buttonAddNewCard')}</AddNewCardText>
          <StyledIconButton IconComponent={Add} onClick={handleAddCardClick} size={IconButtonSize.SMALL} />
        </>
      )}
      <DeleteModal
        isLoading={loading}
        onSubmit={handleOnSubmitDelete}
        onClose={close}
        isVisible={isOpened}
        canDeleteCard
      />
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 16px;
  border-radius: 12px;
  border: 1px solid ${({ theme: { colors } }) => colors.greyScale[30]};
`;

const CardNumber = styled(AppText)`
  color: ${({ theme: { colors } }) => colors.greyScale[100]};
  ${({ theme: { typography } }) => typography.body_24_16_regular}
`;

const CardInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 8px;
`;

const StyledIconButton = styled(IconButton)``;

const CardTypeIcon = styled.div`
  display: flex;
  width: 64px;
  height: 32px;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  border: 1px solid ${({ theme: { colors } }) => colors.greyScale[30]};
`;

const AddNewCardText = styled(AppText)`
  ${({ theme: { typography } }) => typography.body_24_16_regular}
`;
