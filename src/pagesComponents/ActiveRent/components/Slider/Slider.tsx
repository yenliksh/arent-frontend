import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import React, { FC, useRef } from 'react';
import styled, { css } from 'styled-components';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BreakpointsEnum } from 'types';

import { ArrowLeft, ArrowRight } from '../../../../../public/svg/components';

type SliderProps = {
  images: string[];
};

const Slider: FC<SliderProps> = ({ images }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const containerRef = useRef(null);

  const handleInit = (swiper: SwiperCore) => {
    if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
    }

    swiper.navigation.init();
    swiper.navigation.update();
  };

  return (
    <Root>
      <Wrapper>
        <ButtonPrev ref={prevRef}>
          <ArrowLeft />
        </ButtonPrev>
        <ButtonNext ref={nextRef}>
          <ArrowRight />
        </ButtonNext>
        <SwiperContainer>
          <MainSwiper
            onInit={(swiper) => handleInit(swiper)}
            spaceBetween={8}
            pagination={{
              type: 'fraction',
            }}
            slidesPerView="auto"
            breakpoints={{
              576: { slidesPerView: 1 },
            }}
            modules={[Pagination, Navigation]}>
            {images?.map((image, index) => (
              <SwiperSlide key={index}>
                <StyledImage $src={image} />
              </SwiperSlide>
            ))}
          </MainSwiper>
        </SwiperContainer>
      </Wrapper>
      <Container ref={containerRef} />
    </Root>
  );
};

const ButtonPrev = styled.div`
  display: flex;
  position: absolute;

  top: calc(50% - 20px);
  left: -20px;
  width: 40px;
  height: 40px;
  z-index: 1000;
  align-items: center;
  justify-content: center;

  background: ${({ theme: { colors } }) => colors.greyScale[0]};
  border: 1px solid ${({ theme: { colors } }) => colors.greyScale[30]};
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(175, 181, 192, 0.18);
  cursor: pointer;
  @media (max-width: ${BreakpointsEnum.s}px) {
    display: none;
  }
`;
const ButtonNext = styled.div`
  display: flex;
  position: absolute;

  top: calc(50% - 20px);
  right: -20px;
  width: 40px;
  height: 40px;
  z-index: 1000;
  align-items: center;
  justify-content: center;

  background: ${({ theme: { colors } }) => colors.greyScale[0]};
  border: 1px solid ${({ theme: { colors } }) => colors.greyScale[30]};
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(175, 181, 192, 0.18);
  cursor: pointer;
  @media (max-width: ${BreakpointsEnum.s}px) {
    display: none;
  }
`;

const MainSwiper = styled(Swiper)`
  position: relative;
  height: 239px;
  border-radius: 8px;
  color: transparent;
  z-index: auto;
  @media (max-width: ${BreakpointsEnum.s}px) {
    height: 225px;
    overflow: unset;
    ${({ theme: { typography, colors } }) => css`
      .swiper-pagination-fraction {
        ${typography.caption_14_10_medium}
        color: ${colors.greyScale[100]};
        background: ${colors.greyScale[0]};
        padding-top: 4px;
        width: 47px;
        height: 22px;
        border-radius: 30px;
        left: 50%;
        bottom: 16px;
        transform: translateX(-50%);
      }
    `}
  }
`;
const Container = styled.div`
  background: black;
`;
const Wrapper = styled.div`
  position: relative;
  max-width: 615px;
  width: 100%;
`;
const Root = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: ${BreakpointsEnum.s}px) {
    justify-content: flex-start;
  }
`;

const SwiperContainer = styled.div`
  position: relative;
`;

const StyledImage = styled.div<{ $src: string }>`
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: flex-end;

  ${({ $src }) =>
    css`
      background: url(${$src});
      background-size: cover;
      background-position: center;
    `}
`;

export default Slider;
