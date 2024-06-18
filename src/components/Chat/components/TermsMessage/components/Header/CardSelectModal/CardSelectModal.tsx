import { InnopayAppointmentCardType } from '__generated__/types';
import { useGetCards } from 'graphql/queries/User/__generated__/getCards.query';
import { useTranslation } from 'next-i18next';
import { Card } from 'pagesComponents/ActiveRent/components';
import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { notify } from 'services';
import styled from 'styled-components';
import { TextVariants } from 'types';
import { AppText, Button, RadioButton } from 'ui';
import { ButtonSize, ButtonVariant } from 'ui/Button/Button';
import { setCookie } from 'utils';

import { Add } from '../../../../../../../../public/svg/components';

type CardsSelectModalProps = {
  isLoading?: boolean;
  advertId: string;
  payMethod?: string;
  onOpenInnopeyModal: () => void;
  onClose: () => void;
  submit: (cardId: string) => void | Promise<void>;
  hasContinuePayment?: boolean;
};

const CardSelectModal: FC<CardsSelectModalProps> = ({
  onOpenInnopeyModal,
  advertId,
  onClose,
  submit,
  isLoading = false,
  hasContinuePayment = false,
}) => {
  const { t } = useTranslation('ui', { keyPrefix: 'chat.cardSelectModal' });
  const { control, getValues, setValue, watch } = useForm();

  const { data } = useGetCards({ fetchPolicy: 'cache-and-network' });

  setCookie('advertId', advertId);

  watch('payment');

  const cards = data?.innopay__my_cards.filter((card) => card.appointmentType === InnopayAppointmentCardType.ChargeOff);

  const isDisabledContractAccept = !getValues('payment');

  const onSubmit = async () => {
    const cardId = getValues('payment');
    await submit(cardId);
    if (advertId) {
      notify('Сделка успешно совершена');
    }
    onClose();
  };

  return (
    <MainContainer>
      {hasContinuePayment && (
        <StyledAppText variant={TextVariants.PRIMARY} font="body_24_16_regular">
          {t('continuePayment')}
        </StyledAppText>
      )}
      <StyledAppText variant={TextVariants.PRIMARY} font="body_24_16_regular">
        {t('monthlyRentPayment')}
      </StyledAppText>
      <StyledAppText variant={TextVariants.PRIMARY} font="body_24_16_regular">
        {t('availableCards')}
      </StyledAppText>
      <StyledForm>
        {cards?.map((card, index) => (
          <Controller
            key={index}
            control={control}
            name="payment"
            render={({ field: { value, onChange } }) => {
              const handleChangeCardId = () => {
                onChange(card.id);
                setValue('payment', card.id);
              };

              return (
                <WithBorder onClick={handleChangeCardId}>
                  <InnerBorder>
                    <RadioButton name={String(index)} checked={value === card.id} onChange={handleChangeCardId} />
                    <Card cardType={card.cardType} cardLastFourDigits={card.panMasked} />
                  </InnerBorder>
                </WithBorder>
              );
            }}
          />
        ))}
      </StyledForm>
      <WithBorder onClick={onOpenInnopeyModal}>
        <AddBorder>
          <AppText variant={TextVariants.PRIMARY} font="body_24_16_regular">
            {t('addNewBankCard')}
          </AppText>
          <AddIcon>
            <Add />
          </AddIcon>
        </AddBorder>
      </WithBorder>
      <StyledButton
        isLoading={isLoading}
        onClick={onSubmit}
        disabled={isDisabledContractAccept}
        variant={ButtonVariant.PRIMARY}
        size={ButtonSize.LONG_TEXT}
        text={t('selectAndAccept')}
      />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: 400px;
  overflow: hidden;
  overflow-y: auto;
`;

const WithBorder = styled.button`
  outline: none;
  background: transparent;
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid ${({ theme: { colors } }) => colors.greyScale[30]};
  border-radius: 12px;
`;

const InnerBorder = styled.div`
  display: flex;
  padding: 15px 18px;
  align-items: center;
  gap: 18px;
`;

const AddBorder = styled.div`
  display: flex;
  padding: 15px 18px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const AddIcon = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid ${({ theme: { colors } }) => colors.greyScale[30]};
`;

const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 8px;
`;

const StyledAppText = styled(AppText)`
  color: ${({ theme: { colors } }) => colors.greyScale[100]};
`;

export default CardSelectModal;
