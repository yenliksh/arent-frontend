import { useTranslation } from 'next-i18next';
import { FC, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { dayjs, notify } from 'services';
import styled from 'styled-components';
import { BreakpointsEnum } from 'types';
import { Button, DatePicker } from 'ui';
import { ButtonSize, ButtonVariant } from 'ui/Button/Button';

import { useCancelContractTenant } from '../../../../../../graphql/mutations/Contract/__generated__/cancelRent.mutation';
import { CancelRentRulesEnum } from '../../RentDetails';
import useCancelRent from './hooks/useCancelRent/useCancelRent';

type CancelLongRentModalProps = {
  hasActiveRent: boolean;
  onClose: () => void;
  rule: CancelRentRulesEnum;
  id: string;
};

type FormProps = {
  departureDate: string;
};

export const CancelLongRentModal: FC<CancelLongRentModalProps> = ({ rule, onClose, id, hasActiveRent }) => {
  const { t } = useTranslation('activeRentPage', { keyPrefix: 'cancelRentModal' });

  const { getCancelInfo, showNotify, rules, loading } = useCancelRent();

  const [cancelRentAsync, { loading: loadingForCancel }] = useCancelContractTenant();

  const {
    control,
    handleSubmit,
    watch,
    formState: { isDirty },
  } = useForm<FormProps>({
    defaultValues: {
      departureDate: '',
    },
    mode: 'onChange',
  });

  useEffect(() => {
    const subscription = watch(async (value) => {
      const checkoutDate = dayjs(value.departureDate).format('YYYY-MM-DD');
      await getCancelInfo({
        variables: {
          input: {
            id,
            checkoutDate,
          },
        },
      });
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    if (!hasActiveRent) {
      getCancelInfo({
        variables: {
          input: {
            id,
          },
        },
      });
    }
  }, [hasActiveRent]);

  const handleCancel = () => {
    onClose();
  };

  const onSubmit = async (formData: FormProps) => {
    const checkoutDate = dayjs(formData?.departureDate).isValid()
      ? dayjs(formData.departureDate).format('YYYY-MM-DD')
      : null;
    await cancelRentAsync({
      variables: {
        input: {
          contractId: id,
          departureDate: checkoutDate,
        },
      },
      onCompleted: () => {
        showNotify();
      },
      onError: () => {
        notify('При отмене аренды произошла ошибка');
      },
    });
    onClose();
  };

  const isRulesVisible = isDirty && rule !== CancelRentRulesEnum.after30DaysNoChargebackNoRechargeAfterRent;

  return (
    <Root>
      <Inner>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          {hasActiveRent ? (
            <>
              <Controller
                name="departureDate"
                control={control}
                render={({ field: { onChange } }) => (
                  <InputContainer>
                    <StyledDatePicker
                      label={t('selectDepartureDateLabel')}
                      placeholderText={t('selectDepartureDate')}
                      onChange={onChange}
                    />
                  </InputContainer>
                )}
              />
              {isRulesVisible && <>{rules}</>}
            </>
          ) : (
            <> {rules}</>
          )}

          <Footer>
            <StyledButton
              isFullWight
              text={t('goBack')}
              size={ButtonSize.CARDS}
              variant={ButtonVariant.SECONDARY}
              onClick={handleCancel}
            />
            <StyledButton
              type="submit"
              isFullWight
              disabled={loading}
              text={t('cancelRent')}
              size={ButtonSize.CARDS}
              variant={ButtonVariant.PRIMARY}
              isLoading={loadingForCancel}
            />
          </Footer>
        </StyledForm>
      </Inner>
    </Root>
  );
};

const Root = styled.div`
  padding: 8px;
`;

const Inner = styled.div``;

const Footer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 16px;
`;

const StyledButton = styled(Button)`
  max-width: 100%;
  height: 48px;
  @media (min-width: ${BreakpointsEnum.sm}px) {
  }
`;

const StyledForm = styled.form``;

const InputContainer = styled.div`
  margin-bottom: 24px;
`;

const StyledDatePicker = styled(DatePicker)`
  max-width: 100%;
`;
