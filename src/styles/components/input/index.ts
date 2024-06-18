import styled from 'styled-components';
import { AppText } from 'ui/AppText';

export const ErrorText = styled(AppText)`
  color: ${({ theme: { colors } }) => colors.additional.red};
  margin-top: 2px;
`;

export const Label = styled(AppText)<{ isDisabled: boolean }>`
  color: ${({ theme: { colors }, isDisabled }) => (isDisabled ? colors.greyScale[40] : colors.greyScale[70])};
  margin-bottom: 2px;
`;

export const BaseInput = styled.input`
  border-radius: 12px;
  width: 100%;
  padding: 12px 16px;
  outline: none;
  background-color: ${({ theme: { colors } }) => colors.greyScale[10]};

  &:disabled {
    color: ${({ theme: { colors } }) => colors.greyScale[40]};
    cursor: not-allowed;
  }

  &:-internal-autofill-selected {
    background-color: ${({ theme: { colors } }) => colors.greyScale[10]} !important;
    color: ${({ theme: { colors } }) => colors.greyScale[100]} !important;
    background-image: none !important;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
  &::placeholder {
    color: ${({ theme: { colors } }) => colors.greyScale[60]};
  }

  ${({ theme: { typography } }) => typography.caption_16_12_regular}
`;
