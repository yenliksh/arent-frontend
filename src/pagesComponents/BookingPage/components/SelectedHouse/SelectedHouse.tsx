import { useClientSize } from 'hooks';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import styled, { css } from 'styled-components';
import { BreakpointsEnum, TextVariants } from 'types';
import { AppText } from 'ui';

type PriceDetailProps = {
  address: string;
  pictureSrc: string;
  title: string;
};

const SelectedHouse: FC<PriceDetailProps> = ({ address, pictureSrc, title }) => {
  const { t } = useTranslation('bookingPage', { keyPrefix: 'selectedHousing' });

  const { getIsBreakpoint } = useClientSize();

  const isWidthSm = getIsBreakpoint('sm');

  return (
    <>
      {isWidthSm && (
        <Title variant={TextVariants.SECONDARY} font={isWidthSm ? 'title_22_18_medium' : 'title_22_18_bold'}>
          {t('title')}
        </Title>
      )}
      <SelectedHouseWrapper>
        <ImageContainer $src={pictureSrc} />
        <DescriptionContainer>
          <TitleText variant={TextVariants.SECONDARY} font="title_22_18_medium">
            {title}
          </TitleText>
          <Address>{address}</Address>
        </DescriptionContainer>
      </SelectedHouseWrapper>
    </>
  );
};

export default SelectedHouse;

const SelectedHouseWrapper = styled.div`
  display: flex;
  width: 100%;
  ${({ theme }) => css`
    background-color: ${theme.colors.greyScale[0]};
  `}
  border-radius: 12px;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    ${({ theme }) => css`
      background-color: ${theme.colors.greyScale[10]};
    `}
  }
`;

const ImageContainer = styled.div<{ $src: string }>`
  min-width: 115px;
  min-height: 115px;
  ${({ $src }) => css`
    background: url(${$src});
    background-size: cover;
    background-position: center;
  `}
  border-radius: 12px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  margin-left: 16px;

  @media (min-width: ${BreakpointsEnum.sm}px) {
    justify-content: flex-start;
    gap: 0;
  }
`;
const TitleText = styled(AppText)`
  @media (min-width: ${BreakpointsEnum.sm}px) {
    white-space: break-spaces;
  }
`;

const Address = styled(AppText)`
  margin-top: 10px;
  ${({ theme }) => css`
    color: ${theme.colors.greyScale[60]};
    ${theme.typography.body_20_14_regular}
  `}
`;

const Title = styled(AppText)`
  margin-bottom: 24px;
`;
