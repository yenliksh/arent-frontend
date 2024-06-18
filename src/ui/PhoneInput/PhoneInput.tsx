import 'react-phone-input-2/lib/style.css';

import { FC } from 'react';
import DefaultPhoneInput, { PhoneInputProps } from 'react-phone-input-2';
import styled from 'styled-components';

import { AppText } from '../AppText';

export type BaseInputProps = {
  label?: string;
  error?: string;
} & PhoneInputProps;

const PhoneInput: FC<BaseInputProps> = ({ disabled, error, ...inputProps }) => {
  const countries = ['kz', 'ua', 'de', 'uz', 'kg', 'az', 'tj', 'ge'];
  return (
    <Root>
      <StylePhoneInput
        country="kz"
        isDisabled={disabled!}
        countryCodeEditable
        onlyCountries={countries}
        preserveOrder={['onlyCountries', 'preferredCountries']}
        placeholder="+7"
        isValid={!error}
        {...inputProps}
      />
      {error && <Error>{error}</Error>}
    </Root>
  );
};

export default PhoneInput;

const Root = styled.div`
  position: relative;
  width: 100%;
`;

const Error = styled(AppText)`
  ${({ theme: { typography } }) => typography.caption_14_10_regular};
  color: ${({ theme: { colors } }) => colors.additional.red};
  margin-top: 2px;
`;

const StylePhoneInput = styled(DefaultPhoneInput)<{ isDisabled: boolean }>`
  && {
    border: none;
    cursor: not-allowed;

    .form-control {
      border: none;
      border-radius: 12px;
      width: 100% !important;
      height: 40px !important;
      padding-left: 102px !important;
      border: none !important;
      border-radius: 12px !important;
      ${({ theme: { typography } }) => typography.caption_16_12_regular} !important;
      background-color: ${({ theme: { colors } }) => colors.greyScale[10]};
      font-family: Euclid Circular B, sans-serif !important;
    }

    &::after {
      content: '';
      left: -1px;
      top: 0;
      border-radius: 5px;
      width: 401px;
      background: #f6f7f9;
      display: ${({ isDisabled }) => (isDisabled ? 'block' : 'none')};
      position: absolute;
      opacity: 0.6;
      height: 40px;
    }

    .flag {
      position: relative !important;
      vertical-align: sub;
      width: 28px;
      height: 20px;
      top: -1px !important;
      margin: 0px 0px -2px 0px !important;
      border-radius: 2px !important;
      background-position-y: bottom !important;
      background-position: center !important;
    }

    .selected-flag {
      position: absolute;
      top: 0;
      left: 0;
      width: 85px;
      display: flex;
      justify-content: flex-start;
      border-bottom-left-radius: 12px;
      border-top-left-radius: 12px;
      padding: 0 0 0 16px;
      align-items: center;
      background-color: ${({ theme: { colors } }) => colors.greyScale[10]} !important;
      cursor: auto;
    }

    .selected-flag.open {
      border-bottom-left-radius: 12px;
      border-top-left-radius: 12px;
    }

    .flag-dropdown {
      width: 87px;
      border: none;
      border-radius: 12px 0 0 12px;
      border-right: solid 1px ${({ theme: { colors } }) => colors.greyScale[30]} !important;
      background-color: ${({ theme: { colors } }) => colors.greyScale[10]} !important;
      cursor: initial !important;
    }

    .flag-dropdown.open {
      background: ${({ theme: { colors } }) => colors.greyScale[10]} !important;
      border: solid 1px ${({ theme: { colors } }) => colors.greyScale[30]} !important;
    }

    .flag-dropdown.invalid-number {
      border: solid 1px ${({ theme: { colors } }) => colors.additional.red} !important;
    }

    .invalid-number {
      background-color: ${({ theme: { colors } }) => colors.greyScale[10]} !important;
      border: 1px solid ${({ theme: { colors } }) => colors.additional.red} !important;
    }

    .country {
      display: flex;
      padding: 7px 5px;
      border-bottom: 1px solid;
      border-color: ${({ theme: { colors } }) => colors.greyScale[30]} !important;
      font-family: Euclid Circular B, sans-serif !important;
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
    }

    .country-name {
      display: none;
    }

    .country-list {
      position: absolute;
      top: 34px;
      left: 15px;
      max-height: 212px;
      width: 81px;
      padding: 6px 0 6px 0;
      margin: 20px 0 10px -16px;
      border-radius: 16px;
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    .country-list li:last-child {
      border-bottom: none;
    }

    .country-list::-webkit-scrollbar {
      display: none;
    }

    .arrow {
      left: 44px;
    }

    .react-tel-input {
      background-position: none;
      max-height: 212px;
    }

    .divider {
      display: none;
    }

    .dial-code {
      margin: auto;
    }

    .kz {
      background-image: url('/svg/origin/kz.svg') !important;
    }
    .uz {
      background-image: url('/svg/origin/uz.svg') !important;
    }
    .kg {
      background-image: url('/svg/origin/kg.svg') !important;
    }
    .az {
      background-image: url('/svg/origin/az.svg') !important;
    }
    .tj {
      background-image: url('/svg/origin/tj.svg') !important;
    }
    .de {
      background-image: url('/svg/origin/de.svg') !important;
    }
    .tr {
      background-image: url('/svg/origin/tr.svg') !important;
    }
    .by {
      background-image: url('/svg/origin/by.svg') !important;
    }
    .ge {
      background-image: url('/svg/origin/ge.svg') !important;
    }
    .ua {
      background-image: url('/svg/origin/ua.svg') !important;
    }
  }
`;
