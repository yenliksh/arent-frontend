import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import styled from 'styled-components';
import { TextVariants } from 'types';
import { AppText } from 'ui';

export enum StatusVerifyEnum {
  CONFIRM,
  NOT_CONFIRM,
}

export enum DataEnum {
  EMAIL,
  PHONE,
}

type VerifyMessageProps = {
  typeData: DataEnum;
  status: StatusVerifyEnum;
};

export const VerifyMessage: FC<VerifyMessageProps> = ({ typeData, status }) => {
  const { t } = useTranslation('profilePage', { keyPrefix: 'security' });

  return (
    <Root>
      {status === StatusVerifyEnum.CONFIRM && (
        <Inner>
          <Message variant={TextVariants.SECONDARY} $isConfirmed>
            {typeData === DataEnum.EMAIL ? t('emailConfirm') : t('phoneConfirm')}
          </Message>
        </Inner>
      )}
      {status === StatusVerifyEnum.NOT_CONFIRM && (
        <Inner>
          <Message variant={TextVariants.SECONDARY}>
            {typeData === DataEnum.EMAIL ? t('emailNotConfirm') : t('phoneNotConfirm')}
          </Message>
        </Inner>
      )}
    </Root>
  );
};

const Root = styled.div``;

const Inner = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  column-gap: 8px;
  align-items: center;
`;

const Message = styled(AppText)<{ $isConfirmed?: boolean }>`
  ${({ theme: { typography } }) => typography.body_20_14_medium}
  color: ${({ theme: { colors }, $isConfirmed }) => ($isConfirmed ? colors.additional.green : colors.additional.red)};
  border: 1px solid
    ${({ theme: { colors }, $isConfirmed }) => ($isConfirmed ? colors.additional.green : colors.additional.red)};
  padding: 4px 12px;
  border-radius: 5px;
`;
