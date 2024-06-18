import { useTranslation } from 'next-i18next';
import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { Button } from 'ui';
import { ButtonSize, ButtonVariant } from 'ui/Button/Button';

type SliderProps = {
  images: string[];
  open: () => void;
};

const SliderApartment: FC<SliderProps> = ({ images, open }) => {
  const { t } = useTranslation('apartmentPage', { keyPrefix: 'slider' });

  return (
    <Root>
      <MainImage $src={images[0]} />

      <ImagesContainer>
        {images.map((im, index) => {
          if (index === 0 || index > 4) return;
          return <ImageWrapper key={index} $src={im} />;
        })}
      </ImagesContainer>

      <StyledButton
        onClick={open}
        variant={ButtonVariant.SECONDARY}
        size={ButtonSize.SMALL}
        text={t('showAllPhotos')}
      />
    </Root>
  );
};

export default SliderApartment;

const StyledButton = styled(Button)`
  position: absolute;

  bottom: 24px;
  right: 24px;
  padding: 0 23px;
  z-index: 1000;

  ${({ theme: { typography } }) => typography.caption_16_12_medium}
  background: ${({ theme: { colors } }) => colors.greyScale[0]};
`;
const Root = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
  gap: 16px;
  position: relative;
`;

const ImageWrapper = styled.div<{ $src: string }>`
  height: 209px;
  position: relative;
  wisth: 100%;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;

  ${({ $src }) =>
    css`
      background: url(${$src});
      background-size: cover;
      background-position: center;
    `}
`;

const MainImage = styled.div<{ $src: string }>`
  height: 434px;
  position: relative;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;

  ${({ $src }) =>
    css`
      background: url(${$src});
      background-size: cover;
      background-position: center;
    `}
`;

const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;
