import { useReactiveVar } from '@apollo/client';
import { useClientSize, useToggle } from 'hooks';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import styled from 'styled-components';
import { BreakpointsEnum } from 'types';
import { AppText, BaseModal, Button } from 'ui';
import { ButtonSize, ButtonVariant } from 'ui/Button/Button';

import { InfoCircleFilled } from '../../../../../../../public/svg/components';
import { SelfPaymentModal } from '../../../../../../components';
import { Routes } from '../../../../../../constains';
import { client, manualyPayError } from '../../../../../../libs';

type AlertProps = {
  price: string;
  paymentDate: string;
  advertId: string;
  isOverdue?: boolean;
  hasButton?: boolean;
  id: string;
};

const Alert: FC<AlertProps> = ({ hasButton = true, price, paymentDate, id, advertId, isOverdue = false }) => {
  const { t } = useTranslation('profilePage', { keyPrefix: 'payments' });
  const { t: PaymentPage } = useTranslation('paymentPage');
  const { getIsBreakpoint } = useClientSize();
  const router = useRouter();

  const isPaymentError = useReactiveVar(manualyPayError);

  const handleAlertClick = () => {
    open();
  };

  const onModalClose = () => {
    if (!isPaymentError) {
      client.cache.evict({ id: client.cache.identify({ __typename: 'PaymentTransactionModel', id: id! }) });
      client.cache.gc();
    }
    close();
  };

  const redirectToAdvertPage = () => {
    router.push({
      pathname: Routes.activeRent,
      query: {
        id: advertId,
      },
    });
  };

  const isWidthSm = getIsBreakpoint('sm');

  const { isOpened, open, close } = useToggle();

  return (
    <Root $isOverdue={isOverdue}>
      <InfoContainer>
        <StyledInfoCircle $isOverdue={isOverdue} />
        <Info $isOverdue={isOverdue}>{t('alertNextPayment')}</Info>
        <Price $isOverdue={isOverdue}>{price}</Price>
        <Housing onClick={redirectToAdvertPage} $isOverdue={isOverdue}>
          {t('alertHousing')}
        </Housing>
        <Info $isOverdue={isOverdue}>{t('alertLoss')}</Info>
        <Date $isOverdue={isOverdue}>{paymentDate}</Date>
      </InfoContainer>
      {hasButton && (
        <StyledButton
          isFullWight={isWidthSm}
          size={ButtonSize.SMALL}
          type="button"
          text={t('alertButtonPayNow')}
          variant={ButtonVariant.PRIMARY}
          onClick={handleAlertClick}
        />
      )}
      <StyledBaseModal isVisible={isOpened} onClose={onModalClose} title={PaymentPage('title')}>
        <SelfPaymentModal id={id} />
      </StyledBaseModal>
    </Root>
  );
};

export default Alert;

type OverdueType = {
  $isOverdue?: boolean;
};

const Root = styled.div<OverdueType>`
  display: flex;
  flex-direction: row;
  padding: 8px 16px;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme: { colors } }) => colors.additional.orange};
  border-radius: 8px;
  background: ${({ theme: { colors }, $isOverdue }) =>
    $isOverdue ? colors.additional.redLight : colors.additional.orangeLight};
  @media (max-width: ${BreakpointsEnum.sm}px) {
    flex-direction: column;
    row-gap: 8px;
  }
`;

const StyledInfoCircle = styled(InfoCircleFilled)<OverdueType>`
  margin-right: 8px;
  path {
    fill: ${({ theme: { colors }, $isOverdue }) => ($isOverdue ? colors.additional.red : colors.additional.orange)};
  }
`;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  align-items: center;
  min-height: 32px;
`;

const Info = styled(AppText)<OverdueType>`
  margin-right: 4px;
  ${({ theme: { typography } }) => typography.body_20_14_regular}
  color: ${({ theme: { colors }, $isOverdue }) => ($isOverdue ? colors.additional.red : colors.additional.orange)}; ;
`;

const Price = styled(AppText)<OverdueType>`
  margin-right: 4px;
  ${({ theme: { typography } }) => typography.body_20_14_medium}
  color: ${({ theme: { colors }, $isOverdue }) => ($isOverdue ? colors.additional.red : colors.additional.orange)};
`;

const Housing = styled.button<OverdueType>`
  margin-right: 4px;
  border: none;
  outline: none;
  background: transparent;
  text-decoration: underline;
  color: ${({ theme: { colors }, $isOverdue }) => ($isOverdue ? colors.additional.red : colors.additional.orange)};
  text-underline-offset: 5px;

  ${({ theme: { typography } }) => typography.body_20_14_medium};

  &:hover {
    cursor: pointer;
  }
`;

const Date = styled(AppText)<OverdueType>`
  margin-right: 4px;
  ${({ theme: { typography } }) => typography.body_20_14_medium}
  color:${({ theme: { colors }, $isOverdue }) => ($isOverdue ? colors.additional.red : colors.additional.orange)}; ;
`;

const StyledButton = styled(Button)`
  white-space: nowrap;
  padding: 8px 17.5px;
`;

const StyledBaseModal = styled(BaseModal)`
  max-width: 672px;
  max-height: 619px;
  height: 100%;

  .modal-container {
    height: 100%;
  }
`;
