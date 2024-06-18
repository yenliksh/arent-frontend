import { FC, InputHTMLAttributes, useRef } from 'react';
import styled, { css } from 'styled-components';

import { AppText } from '../AppText';

type StyledInputProps = {
  $isError?: boolean;
  $isDisabled?: boolean;
};

type SignedInputProps = {
  title: string;
  placeholder: string;
  error?: string;
  isInputsBlockedOnly?: boolean;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: FC<SignedInputProps> = ({
  disabled,
  error,
  isInputsBlockedOnly,
  title,
  className,
  placeholder,
  ...inputProps
}) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <Root className={className}>
      <Title font="caption_14_10_regular" $isDisabled={disabled} $isInputsBlockedOnly={isInputsBlockedOnly!}>
        {title}
      </Title>
      <InputContainer
        $isError={!!error}
        $isDisabled={disabled}
        disabled={disabled}
        onClick={(e) => {
          ref?.current?.focus();
          e.preventDefault();
        }}>
        <StyledInput
          placeholder={placeholder}
          disabled={disabled}
          $isInputsBlockedOnly={isInputsBlockedOnly!}
          {...inputProps}
          ref={ref}
        />
      </InputContainer>
      {error && <Error font="caption_14_10_regular">{error}</Error>}
    </Root>
  );
};

export default Input;

const Root = styled.div`
  width: 100%;
`;

const StyledInput = styled.input<{ $isInputsBlockedOnly?: boolean }>`
  width: 100%;
  border: none;
  outline: none;
  padding: 0;
  text-decoration: none;

  ${({ theme: { typography, colors }, $isInputsBlockedOnly }) => css`
    &::placeholder {
      color: ${colors.greyScale[50]};
    }

    &:disabled {
      ${!$isInputsBlockedOnly
        ? `
      &::placeholder {
      color: ${colors.greyScale[30]};
    }
    cursor: not-allowed;
    background-color: transparent;
    color: ${colors.greyScale[30]};
    `
        : `color: ${colors.greyScale[100]};`}
    }

    ${typography.caption_16_12_regular}
  `}
`;

const InputContainer = styled.button<StyledInputProps>`
  display: flex;
  width: 100%;
  outline: none;
  background-color: ${({ theme: { colors } }) => colors.greyScale[10]};
  flex-direction: column;
  gap: 4px;
  border-radius: 12px;
  cursor: ${({ $isDisabled }) => ($isDisabled ? 'not-allowed' : 'auto')};
  padding: 12px 16px;
  margin-top: 5px;
  border: 1px solid ${({ theme: { colors }, $isError }) => ($isError ? colors.additional.red : colors.greyScale[10])};

  :focus-within {
    border: 1px solid ${({ theme: { colors } }) => colors.greyScale[60]};
  }
`;

const Title = styled(AppText)<{ $isDisabled?: boolean; $isInputsBlockedOnly?: boolean }>`
  color: ${({ theme: { colors } }) => colors.greyScale[70]};
  text-align: left;
`;

const Error = styled(AppText)`
  margin-top: 2px;
  color: ${({ theme: { colors } }) => colors.additional.red};
`;
