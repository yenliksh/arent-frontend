import { GuestField } from 'components/BookingComponent/FormBooking/components/GuestField';
import useAuthAction from 'hooks/useAuthAction';
import { useTranslation } from 'next-i18next';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Button } from 'ui';
import { ButtonSize } from 'ui/Button/Button';

import { ApartmentAdRulesModel } from '../../../__generated__/types';

type FormRequestProps = {
  isPaused: boolean;
  sendContractHandler: (data: FormDataFormRequest) => void;
  loading: boolean;
  rules: ApartmentAdRulesModel;
};

const FormRequest: FC<FormRequestProps> = ({ isPaused, sendContractHandler, loading, rules }) => {
  const { t } = useTranslation('ui');

  const { handleSubmit, control, getValues } = useForm<FormDataFormRequest>({
    defaultValues: {
      numberOfGuests: 1,
      numberOfChilds: 0,
      numberOfPets: 0,
    },
    mode: 'onBlur',
  });

  const { action } = useAuthAction(sendContractHandler);

  const onSubmit = async (data: FormDataFormRequest) => {
    await action(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledGuestField rules={rules} control={control} getValues={getValues} />
      <Button
        text={t('buttons.btnSendRequest')}
        disabled={isPaused}
        size={ButtonSize.NORMAL}
        isFullWight
        isLoading={loading}
      />
    </StyledForm>
  );
};

export default FormRequest;

export type FormDataFormRequest = {
  numberOfGuests: number;
  numberOfChilds: number;
  numberOfPets: number;
};

const StyledGuestField = styled(GuestField)`
  max-width: 400px !important;
  width: 100% !important;
  margin-bottom: 24px !important;
  div {
    max-width: 400px !important;
    width: 100%;
    p {
      width: 100%;
    }
    &div {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  }
`;

const StyledForm = styled.form`
  width: 100%;
`;
