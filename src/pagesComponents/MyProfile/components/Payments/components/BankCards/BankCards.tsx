import { InnopayAppointmentCardType } from '__generated__/types';
import { useClientSize, useToggle } from 'hooks';
import { useTranslation } from 'next-i18next';
import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { BreakpointsEnum } from 'types';
import { BaseModal, Button } from 'ui';
import { ButtonSize, ButtonVariant } from 'ui/Button/Button';

import { ModalInnopay } from '../../../../../../components';
import { useGetCardsLazyQuery } from '../../../../../../graphql/queries/User/__generated__/getCards.query';
import { Card } from './components/Card';

type BankCardsProps = {
  activeAppointmentType: InnopayAppointmentCardType;
};

const BankCards: FC<BankCardsProps> = ({ activeAppointmentType }) => {
  const { t } = useTranslation('profilePage', { keyPrefix: 'payments' });

  const { getIsBreakpoint } = useClientSize();
  const isWidthSm = getIsBreakpoint('sm');
  const { t: tPayments } = useTranslation('profilePage', { keyPrefix: 'payments' });

  const [fetchCards, { data: cardsData }] = useGetCardsLazyQuery({ fetchPolicy: 'cache-and-network' });

  const isChargeOffCards = activeAppointmentType === InnopayAppointmentCardType.ChargeOff;

  const cards = isChargeOffCards
    ? cardsData?.innopay__my_cards.filter((card) => card.appointmentType === InnopayAppointmentCardType.ChargeOff)
    : cardsData?.innopay__my_cards.filter((card) => card.appointmentType === InnopayAppointmentCardType.Crediting);

  const {
    isOpened: isOpenAddBankCardModal,
    close: closeAddBankCardModal,
    toggle: toggleAddBankCardModal,
  } = useToggle(false);

  const handleAddNewCardClick = () => {
    toggleAddBankCardModal();
  };

  const closeInnopayModal = async () => {
    await fetchCards();
    closeAddBankCardModal();
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <Root>
      <CardsContainer>
        {cards?.map((card) => (
          // TODO спроосить у Леши почему нет енамки на тип карты уаааа
          <Card key={card.id} cardLastFourDigits={card.panMasked} cardType={card.cardType} cardId={card.id} />
        ))}
      </CardsContainer>
      {!isChargeOffCards && (
        <StyledButton
          isFullWight={isWidthSm}
          text={t('buttonAddNewCard')}
          size={ButtonSize.SMALL}
          variant={ButtonVariant.SECONDARY}
          onClick={handleAddNewCardClick}
        />
      )}

      <StyledVerifyModal
        onClose={closeInnopayModal}
        title={tPayments('modalTitleAddNewCard')}
        isVisible={isOpenAddBankCardModal}
        isBottomMobile>
        <ModalInnopay
          onComplete={async () => {
            await fetchCards();
          }}
        />
      </StyledVerifyModal>
    </Root>
  );
};

export default BankCards;

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 36px;
  row-gap: 16px;
  margin-bottom: 32px;
  @media (min-width: ${BreakpointsEnum.sm}px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 16px;
    margin-bottom: 32px;
  }
`;

const StyledButton = styled(Button)`
  margin-bottom: 32px;
  ${({ theme: { typography } }) => typography.caption_16_12_medium}
`;

const StyledVerifyModal = styled(BaseModal)`
  width: 100%;
  max-width: 672px;
`;
