import { useTranslation } from 'next-i18next';
import React, { FC } from 'react';
import styled from 'styled-components';
import { BreakpointsEnum } from 'types';
import { AppText, BaseModal, Button } from 'ui';
import { ButtonSize, ButtonVariant } from 'ui/Button/Button';

type DeleteModalProps = {
  onSubmit: () => void;
  onClose: () => void;
  isLoading: boolean;
  isVisible: boolean;
  canDeleteCard: boolean;
};

export const DeleteModal: FC<DeleteModalProps> = ({ onSubmit, onClose, isVisible, canDeleteCard, isLoading }) => {
  const { t } = useTranslation('profilePage', { keyPrefix: 'payments' });
  const title: string = canDeleteCard ? t('modalTitle') : t('modalCantDeleteTitle');
  const content: string = canDeleteCard ? t('modalContent') : t('modalCantDeleteContent');

  return (
    <StyledModal onClose={onClose} title={title} isVisible={isVisible} isBottomMobile>
      <ModalContainer>
        <ModalContent>{content}</ModalContent>
        {canDeleteCard ? (
          <ModalButtons>
            <Button
              isFullWight
              text={t('modalCancel')}
              size={ButtonSize.NORMAL}
              variant={ButtonVariant.SECONDARY}
              onClick={onClose}
            />
            <Button
              isFullWight
              text={t('modalConfirm')}
              isLoading={isLoading}
              size={ButtonSize.NORMAL}
              variant={ButtonVariant.PRIMARY}
              onClick={onSubmit}
            />
          </ModalButtons>
        ) : (
          <Button
            isFullWight
            isLoading={isLoading}
            text={t('modalCantDeleteConfirm')}
            size={ButtonSize.NORMAL}
            variant={ButtonVariant.PRIMARY}
            onClick={onClose}
          />
        )}
      </ModalContainer>
    </StyledModal>
  );
};

const StyledModal = styled(BaseModal)`
  @media (min-width: ${BreakpointsEnum.sm}px) {
    max-width: 448px;
  }
`;

const ModalContainer = styled.div`
  @media (min-width: ${BreakpointsEnum.sm}px) {
    padding: 8px;
  }
`;

const ModalContent = styled(AppText)`
  margin-bottom: 24px;
  @media (min-width: ${BreakpointsEnum.sm}px) {
    ${({ theme: { typography } }) => typography.body_24_16_regular}
  }
`;

const ModalButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 16px;
`;
