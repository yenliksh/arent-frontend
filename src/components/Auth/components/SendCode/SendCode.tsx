import { useReactiveVar } from '@apollo/client';
import { useGoogleLogin } from '@react-oauth/google';
import { Routes } from 'constains';
import { SignIn, useSignIn } from 'graphql/mutations/User/__generated__/sendCode.mutation';
import parsePhoneNumber from 'libphonenumber-js';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { BreakpointsEnum, TextVariants } from 'types';
import { AppText, Button, LightButton, PhoneInput } from 'ui';
import { LightButtonSize } from 'ui/LightButton/LightButton';

import { LogoGoogle as GoogleIcon } from '../../../../../public/svg/components';
import { SignInByGoogle, useSignInByGoogle } from '../../../../graphql/mutations/User/__generated__/SignInByGoogle';
import { authRoute, loginModalVar, tokenVar } from '../../../../libs';
import { CookieKeys, setCookie } from '../../../../utils';
import { SendCodeStepsEnum } from '../../Auth';

interface FormValues {
  phone: string;
}

type SendCodeTypes = {
  isLogin?: boolean;
  onToggle: () => void;
  onSetPhone: (phone: string) => void;
  onCloseModal: () => void;
  onChangeStep: (step: SendCodeStepsEnum) => void;
};

const SendCode: FC<SendCodeTypes> = ({ isLogin, onToggle, onChangeStep, onSetPhone, onCloseModal }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    getFieldState,
  } = useForm<FormValues>();
  const { t } = useTranslation('authPage');
  const redirectPath = useReactiveVar(authRoute);
  const router = useRouter();
  const { query } = router;
  const handleValidateForm = (data: SignIn) => {
    if (data.user__signInByPhone_sendCode.problem?.message) {
      setError('phone', { message: data.user__signInByPhone_sendCode.problem?.message });
    } else {
      onChangeStep(SendCodeStepsEnum.SECOND);
    }
  };

  const [fetchSignIn, { loading }] = useSignIn({ onCompleted: handleValidateForm });
  const [fetchGoogleSignIn] = useSignInByGoogle({});

  const onSubmit = async (data: FormValues) => {
    const isError = getFieldState('phone').error;
    if (!isError) {
      await fetchSignIn({ variables: { input: { phone: `+${data.phone}` } } });
      onSetPhone(data.phone);
    }
  };

  const validatePhone = (phone: string) => {
    const phoneNumber = parsePhoneNumber(`+${phone}`);
    const isValid = phoneNumber?.isValid();
    const isRussia = phoneNumber?.country === 'RU';

    if (!isValid || isRussia) {
      return `${t('login.error')}`;
    }
  };

  const settingFormErrors = (data: SignInByGoogle) => {
    if (data.user__signInByGoogle_verifyToken.problem?.message) {
      setError('phone', { message: data.user__signInByGoogle_verifyToken.problem?.message });
    } else if (data.user__signInByGoogle_verifyToken.user?.id) {
      const token = data.user__signInByGoogle_verifyToken.token || '';
      const refreshToken = data.user__signInByGoogle_verifyToken.refreshToken || '';

      onCloseModal();
      loginModalVar({ isAuthModalOpen: false });

      setCookie(CookieKeys.TOKEN, token);
      setCookie(CookieKeys.REFRESH_TOKEN, refreshToken);
      tokenVar(token);

      router.push({
        pathname: redirectPath,
        query: { ...query },
      });
      authRoute('');
    } else {
      setCookie(CookieKeys.REGISTRATION_TOKEN, data.user__signInByGoogle_verifyToken.token!);
      onChangeStep(SendCodeStepsEnum.THIRD);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      await fetchGoogleSignIn({
        variables: { input: { accessToken: tokenResponse.access_token } },
        onCompleted: settingFormErrors,
      });
      await router.push(Routes.home);
    },
  });

  return (
    <ModalContainer>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="phone"
          rules={{
            required: `${t('error')}`,
            validate: validatePhone,
          }}
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <StyledPhoneInput
                country="kz"
                autoFormat
                error={errors.phone?.message}
                onChange={onChange}
                value={value}
              />
            );
          }}
        />
        <StyledButton
          type="submit"
          text={isLogin ? `${t('login.buttons.primaryButton')}` : `${t('registration.buttons.third')}`}
          isFullWight
          isLoading={loading}
        />
      </StyledForm>

      <OrDivider>или</OrDivider>

      <StyledGoogleBtn
        type="button"
        title="Google login button"
        isFullWight
        text="Войти с помощью Google"
        LeftIconComponent={<StyledGoogleIcon />}
        onClick={() => googleLogin()}
      />

      <GuestContainer>
        <GuestText font="body_20_14_regular" variant={TextVariants.SECONDARY}>
          {isLogin ? t('login.prompt') : t('registration.prompt')}
        </GuestText>
        <LightButton
          text={isLogin ? `${t('login.buttons.secondaryButton')}` : `${t('login.buttons.primaryButton')}`}
          isUnderline
          size={LightButtonSize.SMALL}
          onClick={onToggle}
        />
      </GuestContainer>
    </ModalContainer>
  );
};

export default SendCode;

const ModalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${BreakpointsEnum.s}px) {
    justify-content: space-between;
  }
`;

const StyledPhoneInput = styled(PhoneInput)`
  width: 100%;
`;

const StyledButton = styled(Button)`
  margin-top: 24px;
  background: #8d75f1;

  &:hover {
    background: #9580ed;
  }
`;

const StyledGoogleBtn = styled(Button)`
  background: #fff;
  border: solid 1px #cdd1db;
  box-shadow: unset !important;
  color: #1c212d;
  font-weight: 500;
  line-height: 16px;

  &:hover {
    background: #efefef;
  }
`;

const StyledGoogleIcon = styled(GoogleIcon)`
  //width: 20px;
  //height: 20px;

  // path {
  //   fill: ${({ theme: { colors } }) => colors.greyScale[0]};
  // }
`;

const GuestContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  margin-top: 32px;
  align-items: center;
  height: 40px;
`;

const OrDivider = styled.div`
  margin: 20px 0;
  width: 100%;
  position: relative;

  font-family: Euclid Circular B, sans-serif;
  font-size: 14px;
  color: #737b8a;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  text-align: center;

  &::before,
  &::after {
    content: ' ';
    display: block;
    border-top: solid 1px #cdd1db;
    position: absolute;
    width: 44%;
    top: 50%;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`;

const GuestText = styled(AppText)``;

const StyledForm = styled.form`
  width: 100%;
`;
