import { IdentityStatusType } from '__generated__/types';
import { ModalVerifyDocs } from 'components/ModalVerifyDocs';
import { FileCategory } from 'components/ModalVerifyDocs/types';
import { TWENTY_MB } from 'constains';
import { useGetFullMe } from 'graphql/queries/User/__generated__/getFullMe.query';
import { useToggle } from 'hooks';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import styled from 'styled-components';
import { BreakpointsEnum, TextVariants } from 'types';
import { AppText, BaseModal, Button, LightButton } from 'ui';
import { ButtonSize, ButtonVariant } from 'ui/Button/Button';
import { LightButtonSize } from 'ui/LightButton/LightButton';

import { ModalEmail, VerifyMessage } from './components';
import { DataEnum, StatusVerifyEnum } from './components/VerifyMessage/VerifyMessage';
import { useEmailApprove } from './hooks';

const Security: FC = () => {
  const { t } = useTranslation('profilePage', { keyPrefix: 'security' });
  const { isOpened: isEmailOpened, open: openEmail, close: closeEmail } = useToggle(false);
  const { isOpened: isIdentifyOpened, open: openIdentify, close: closeIdentify } = useToggle(false);
  const { data } = useGetFullMe({ fetchPolicy: 'cache-and-network' });

  const user = data?.user__me;
  const hasEmail = !!user?.email;
  const identityStatus = user?.identityStatus || IdentityStatusType.NotConfirmed;

  useEmailApprove();

  const IdentityStatusMessages = {
    [IdentityStatusType.Approved]: {
      status: t('personApproved'),
    },
    [IdentityStatusType.NotConfirmed]: {
      status: t('notConfirmed'),
    },
    [IdentityStatusType.Rejected]: {
      status: t('personReject'),
    },
    [IdentityStatusType.Processing]: {
      status: t('personProcessing'),
    },
  };

  const actions = {
    [IdentityStatusType.NotConfirmed]: (
      <StyledLightButton text={t('edit')} isUnderline size={LightButtonSize.NORMAL} onClick={openIdentify} />
    ),
    [IdentityStatusType.Rejected]: (
      <StyledLightButton text={t('edit')} isUnderline size={LightButtonSize.NORMAL} onClick={openIdentify} />
    ),
    [IdentityStatusType.Approved]: null,
    [IdentityStatusType.Processing]: null,
  };

  return (
    <>
      <Root>
        <Section>
          <Title>{t('emailTitle')}</Title>
          <Row>
            <Info>
              {hasEmail ? (
                <>
                  <Data variant={TextVariants.SECONDARY}>{user?.email}</Data>
                  <VerifyMessage
                    typeData={DataEnum.EMAIL}
                    status={user?.isEmailVerified ? StatusVerifyEnum.CONFIRM : StatusVerifyEnum.NOT_CONFIRM}
                  />
                </>
              ) : (
                <Data variant={TextVariants.SECONDARY}>{t('emailNoData')}</Data>
              )}
            </Info>
            <Button text={t('edit')} size={ButtonSize.CARDS} onClick={openEmail} variant={ButtonVariant.SECONDARY} />
          </Row>
        </Section>

        <Section>
          <Title>{t('phoneTitle')}</Title>
          <Info>
            <Data variant={TextVariants.SECONDARY}>{user?.phone}</Data>
            <VerifyMessage
              typeData={DataEnum.PHONE}
              status={user?.isPhoneApproved ? StatusVerifyEnum.CONFIRM : StatusVerifyEnum.NOT_CONFIRM}
            />
          </Info>
        </Section>
        <Section $hasBottomBorder={false}>
          <Title>{t('personTitle')}</Title>
          <NoConfirmRow>
            <IdentityText variant={TextVariants.SECONDARY} $identityStatus={identityStatus}>
              {IdentityStatusMessages[identityStatus].status}
            </IdentityText>
            {actions[identityStatus]}
          </NoConfirmRow>
        </Section>
      </Root>
      <ModalEmail isVisible={isEmailOpened} onClose={closeEmail} />
      <StyledVerifyIdentityModal
        onClose={closeIdentify}
        title={t('personTitle')}
        isVisible={isIdentifyOpened}
        isBottomMobile>
        <ModalVerifyDocsContainer>
          <ModalVerifyDocs
            maxSize={TWENTY_MB}
            maxFiles={3}
            onSaveClick={closeIdentify}
            content={t('identifyContent')}
            typeDocs={FileCategory.IDENTITY_DOCUMENTS}
          />
        </ModalVerifyDocsContainer>
      </StyledVerifyIdentityModal>
    </>
  );
};

export default Security;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  padding: 24px 16px 80px 16px;
  background: ${({ theme: { colors } }) => colors.greyScale[0]};

  @media (min-width: ${BreakpointsEnum.sm}px) {
    max-width: 848px;
    margin-top: 32px;
    margin-bottom: 80px;
    padding: 40px;
    border-radius: 21px;
  }
`;

const Section = styled.div<{ $hasBottomBorder?: boolean; $hasHover?: boolean }>`
  border-bottom: ${({ theme: { colors } }) => `1px solid ${colors.greyScale[30]}`};

  @media (min-width: ${BreakpointsEnum.sm}px) {
    border-bottom: ${({ $hasBottomBorder = true, theme: { colors } }) =>
      $hasBottomBorder ? `1px solid ${colors.greyScale[30]}` : 'none'};
    cursor: ${({ $hasHover = false }) => ($hasHover ? 'pointer' : 'default')};

    &:hover {
      border-bottom: ${({ $hasBottomBorder = true, theme: { colors }, $hasHover = false }) =>
        $hasBottomBorder && $hasHover && `1px solid ${colors.greyScale[100]}`};
    }
  }
`;

const Title = styled.div`
  margin-bottom: 16px;
  color: ${({ theme: { colors } }) => colors.greyScale[100]};
  ${({ theme: { typography } }) => typography.body_24_16_regular}
`;

const Data = styled(AppText)`
  ${({ theme: { typography } }) => typography.body_24_16_medium};

  @media (min-width: ${BreakpointsEnum.sm}px) {
    ${({ theme: { typography } }) => typography.title_22_18_bold}
  }
`;

const IdentityText = styled(AppText)<{ $identityStatus: IdentityStatusType }>`
  ${({ theme: { typography } }) => typography.body_20_14_medium}

  color: ${({ theme: { colors }, $identityStatus }) =>
    $identityStatus === IdentityStatusType.Approved
      ? colors.additional.green
      : $identityStatus === IdentityStatusType.Processing
      ? colors.additional.orange
      : colors.additional.red};

  border: 1px solid
    ${({ theme: { colors }, $identityStatus }) =>
      $identityStatus === IdentityStatusType.Approved
        ? colors.additional.green
        : $identityStatus === IdentityStatusType.Processing
        ? colors.additional.orange
        : colors.additional.red};
  border-radius: 5px;
  padding: 4px 12px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    flex-direction: column;
    margin-bottom: 16px;
  }
`;

const NoConfirmRow = styled.div`
  max-height: 22px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    margin-bottom: 16px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    margin-bottom: 8px;
  }
`;

const StyledLightButton = styled(LightButton)`
  margin-right: -10px;
  margin-top: -12px;
`;

const StyledVerifyIdentityModal = styled(BaseModal)`
  width: 100%;
  @media (min-width: ${BreakpointsEnum.sm}px) {
    max-width: 672px;
  }
  @media (max-width: ${BreakpointsEnum.sm}px) {
    .modal-header {
      border-bottom: unset;
    }
  }
`;

const ModalVerifyDocsContainer = styled.div`
  @media (min-width: ${BreakpointsEnum.sm}px) {
    padding: 8px;
  }
`;
