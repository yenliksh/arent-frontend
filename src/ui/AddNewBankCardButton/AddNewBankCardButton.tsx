import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import styled from 'styled-components';
import { TextVariants } from 'types';
import { AppText } from 'ui/AppText';
import { IconButton } from 'ui/IconButton';
import { IconButtonSize } from 'ui/IconButton/IconButton';

import { Add } from '../../../public/svg/components';

type AddNewBankCardButtonProps = {
  onClick: () => void;
};

const AddNewBankCardButton: FC<AddNewBankCardButtonProps> = ({ onClick, ...props }) => {
  const { t } = useTranslation('ui');

  return (
    <Root {...props}>
      <Inner onClick={onClick}>
        <AppText variant={TextVariants.SECONDARY}>{t('addNewBankCard')}</AppText>
        <IconButton IconComponent={Add} size={IconButtonSize.SMALL} />
      </Inner>
    </Root>
  );
};

export default AddNewBankCardButton;

const Root = styled.div`
  display: flex;
  padding: 15px;
  border: 1px solid ${({ theme: { colors } }) => colors.greyScale[30]};
  border-radius: 12px;
  z-index: 9992;
`;

const Inner = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;
