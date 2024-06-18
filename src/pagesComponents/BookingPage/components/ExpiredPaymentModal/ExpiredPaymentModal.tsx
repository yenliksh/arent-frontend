import { useTranslation } from 'next-i18next';
import React, { FC } from 'react';
import styled from 'styled-components';
import { BreakpointsEnum } from 'types';
import { AppText, BaseModal, Button } from 'ui';

import { CloseCircle } from '../../../../../public/svg/components';

type ExpiredPaymentModalProps = {
  onClose: () => void;
  isVisible: boolean;
};

const ExpiredPaymentModal: FC<ExpiredPaymentModalProps> = ({ onClose, isVisible }) => {
  const { t } = useTranslation('ui');

  return (
    <StyledExpiredPaymentModal onClose={onClose} isVisible={isVisible} isBottomMobile whithoutHeader>
      <InnerContainer>
        <IconContainer>
          <CloseCircle />
        </IconContainer>
        <Content>
          <StyledTitle font="title_22_18_bold">{t('timeExpired')}</StyledTitle>
          <StyledText font="body_24_16_regular">{t('reservedBookingCanceled')}</StyledText>
        </Content>
        <Button text={t('returnToBookingPage')} isFullWight onClick={onClose} />
      </InnerContainer>
    </StyledExpiredPaymentModal>
  );
};

export default ExpiredPaymentModal;

const StyledExpiredPaymentModal = styled(BaseModal)`
  width: 100%;
  max-width: 448px;
  .modal-header {
    border-bottom: none;
  }
`;

const InnerContainer = styled.div`
  padding: 0 8px 8px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -10px;

  @media (max-width: ${BreakpointsEnum.sm}px) {
    padding: 0;
  }
`;

const IconContainer = styled.div`
  width: 40px;
  height: 40px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 263px;
  justify-content: center;
  margin: 32px auto 44px auto;
`;

const StyledTitle = styled(AppText)`
  margin-bottom: 8px;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.greyScale[100]};
`;

const StyledText = styled(AppText)`
  text-align: center;
`;
