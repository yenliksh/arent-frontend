import { SendCodeStepsEnum } from 'components/Auth/Auth';
import { Registration, SendCode, VerifyCode } from 'components/Auth/components';
import { useClientSize, useToggle } from 'hooks';
import { MainLayout } from 'layouts';
import { BottomNavbar } from 'layouts/MainLayout/components/BottomNavbar';
import { useTranslation } from 'next-i18next';
import { FC, useState } from 'react';
import styled from 'styled-components';
import { BreakpointsEnum, TextVariants } from 'types';
import { AppText } from 'ui';

import { ArrowLeft } from '../../../public/svg/components';

const MobileAuth: FC = () => {
  const { t } = useTranslation('authPage');
  const [actualCodeStep, setActualCodeStep] = useState<SendCodeStepsEnum>(SendCodeStepsEnum.FIRST);
  const [phone, setPhone] = useState('');
  const { close } = useToggle(true);
  const { isOpened: isLogin, toggle: toggleIsLogin } = useToggle(true);
  const { getIsBreakpoint } = useClientSize();

  const handleChangeStep = (step: SendCodeStepsEnum) => {
    setActualCodeStep(step);
  };

  const SendCodeStepsMapping = {
    [SendCodeStepsEnum.FIRST]: (
      <SendCode
        onToggle={toggleIsLogin}
        isLogin={isLogin}
        onSetPhone={setPhone}
        onChangeStep={handleChangeStep}
        onCloseModal={close}
      />
    ),
    [SendCodeStepsEnum.SECOND]: <VerifyCode phone={phone} onCloseModal={close} onChangeStep={handleChangeStep} />,
    [SendCodeStepsEnum.THIRD]: <Registration onCloseModal={close} />,
  };

  const ModalTitleMapping = {
    [SendCodeStepsEnum.FIRST]: isLogin ? `${t('login.title')}` : `${t('registration.headTitle')}`,
    [SendCodeStepsEnum.SECOND]: `${t('confirm.title')}`,
    [SendCodeStepsEnum.THIRD]: `${t('registration.title')}`,
  };

  const renderCodeStep = (step: SendCodeStepsEnum) => {
    return SendCodeStepsMapping[step];
  };

  const goToFirstStep = () => {
    setActualCodeStep(SendCodeStepsEnum.FIRST);
  };

  const renderModalTitle = (step: SendCodeStepsEnum) => {
    return ModalTitleMapping[step];
  };

  const isMobileTitle = getIsBreakpoint('s') && actualCodeStep === SendCodeStepsEnum.FIRST;

  const withBackHeader = actualCodeStep !== SendCodeStepsEnum.FIRST;

  return (
    <StyledMainLayout headTitle={t('login.title')} customHeader={<BottomNavbar isAuthorized={false} />} hideFooter>
      <Root>
        {withBackHeader && (
          <Header>
            <BackButton onClick={goToFirstStep}>
              <ArrowLeft />
            </BackButton>
            <Title font="title_22_18_bold" forwardedAs="h2" variant={TextVariants.SECONDARY}>
              {renderModalTitle(actualCodeStep)}
            </Title>
          </Header>
        )}
        <InnerWrapper>
          {isMobileTitle && (
            <TitleText font="title_33_26_bold" variant={TextVariants.SECONDARY}>
              {renderModalTitle(actualCodeStep)}
            </TitleText>
          )}
          {renderCodeStep(actualCodeStep)}
        </InnerWrapper>
      </Root>
    </StyledMainLayout>
  );
};

const StyledMainLayout = styled(MainLayout)`
  max-width: 100%;
  padding-left: 0;
  padding-right: 0;
`;

const Root = styled.div`
  padding: 16px;
`;

const InnerWrapper = styled.div`
  @media (max-width: ${BreakpointsEnum.s}px) {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`;

const TitleText = styled(AppText)`
  margin-top: 8px;
  max-width: 255px;
`;

const Header = styled.div`
  text-align: center;
  position: relative;
  margin-bottom: 16px;
`;

const BackButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  height: 20px;
  margin-right: 16px;
  cursor: pointer;
  position: absolute;
  left: 0;
  top: 0;
`;

const Title = styled(AppText)``;

export default MobileAuth;
