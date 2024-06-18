import { InnopayAppointmentCardType } from '__generated__/types';
import { useTranslation } from 'next-i18next';
import { FC, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { TextVariants } from 'types';
import { AppText, Button, RadioButton } from 'ui';
import { ButtonSize, ButtonVariant } from 'ui/Button/Button';

import { Add } from '../../../../../public/svg/components';
import { useGetCards } from '../../../../graphql/queries/User/__generated__/getCards.query';
import { notify } from '../../../../services';
import { setCookie } from '../../../../utils';
import { Card } from '../index';

type CardsSelectModalProps = {
  isLoading?: boolean;
  advertId: string;
  payMethod?: string;
  onOpenInnopeyModal: () => void;
  onClose: () => void;
  submit: (cardId: string) => void | Promise<void>;
};

const CardSelectModal: FC<CardsSelectModalProps> = ({
  onOpenInnopeyModal,
  advertId,
  onClose,
  payMethod,
  submit,
  isLoading = false,
}) => {
  const { t } = useTranslation('activeRentPage', { keyPrefix: 'cardSelectModal' });
  const { control, getValues, setValue } = useForm();

  const { data } = useGetCards({ fetchPolicy: 'cache-and-network' });

  setCookie('advertId', advertId);

  const cards = data?.innopay__my_cards.filter((card) => card.appointmentType === InnopayAppointmentCardType.Crediting);

  const onSubmit = async () => {
    const cardId = getValues('payment');

    await submit(cardId);
    if (advertId) {
      notify('Способ получения оплаты добавлен');
    }
    onClose();
  };

  const setDefaultPaymentMethod = () => {
    const defaultPaymentMethod = cards?.find((card) => card.id === payMethod);
    if (defaultPaymentMethod) {
      setValue('payment', payMethod);
    }
  };

  useEffect(() => {
    setDefaultPaymentMethod();
  }, [payMethod, cards]);

  return (
    <MainContainer>
      <StyledAppText font="body_24_16_regular">{t('modalContent')}</StyledAppText>
      <StyledAppText font="body_24_16_medium"> {t('availableCards')}</StyledAppText>
      <StyledForm>
        {cards?.map((card, index) => (
          <Controller
            key={index}
            control={control}
            name="payment"
            render={({ field: { value, onChange } }) => {
              const handleChangeCardId = () => onChange(card.id);

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
            {t('addCard')}
          </AppText>
          <AddIcon>
            <Add />
          </AddIcon>
        </AddBorder>
      </WithBorder>
      <StyledButton
        isLoading={isLoading}
        onClick={onSubmit}
        variant={ButtonVariant.VIOLET}
        size={ButtonSize.LONG_TEXT}
        text={t('choose')}
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
