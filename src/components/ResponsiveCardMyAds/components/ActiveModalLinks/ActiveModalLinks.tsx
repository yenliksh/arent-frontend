import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import styled, { css } from 'styled-components';
import { BaseModalProps, TextVariants } from 'types';
import { AppText } from 'ui';

interface ActiveModalProps extends BaseModalProps {
  openNext: () => void;
  openAvailableModal: () => void;
  openPaymentMethod: () => void;
}

const ActiveModalLinks: FC<ActiveModalProps> = ({ openPaymentMethod }) => {
  const { t } = useTranslation('ui', { keyPrefix: 'myAdsCard' });
  return (
    <>
      <MainContainer>
        <TextContainerWithBorder onClick={openPaymentMethod}>
          <ModalText variant={TextVariants.SECONDARY} font="body_20_14_regular">
            {t('dropDownLinks.paymentWay')}
          </ModalText>
        </TextContainerWithBorder>
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextContainerWithBorder = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    border-bottom: 1px solid ${theme.colors.greyScale[30]};
    &:hover {
      cursor: pointer;
    }
  `}
`;

const ModalText = styled(AppText)`
  padding: 12px 0;
`;

export default ActiveModalLinks;
