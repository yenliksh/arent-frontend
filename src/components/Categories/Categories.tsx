import { apartmentCategoriesList } from 'constains';
import { useRouter } from 'next/router';
import { FC, useEffect, useMemo, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { colors } from 'styles/themes/default/colors';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BreakpointsEnum } from 'types';

import {
  Apartments,
  Areas,
  ArrowLeft,
  ArrowRight,
  Commercial,
  CountryHouses,
  Foreign,
  Houses,
  Industrial,
  OtherRealEstate,
} from '../../../public/svg/components';

const Header: FC = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [reachedStart, setReachedStart] = useState(true);
  const [reachedEnd, setReachedEnd] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  const handleInit = (swiper: SwiperCore) => {
    if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
    }

    swiper.navigation.init();
    swiper.navigation.update();
  };

  const onSlideChange = (swiper: SwiperCore) => {
    setReachedStart(swiper.activeIndex === 0);
    setReachedEnd(swiper.activeIndex === 2);
  };

  const onClick = (swiper: SwiperCore) => {
    if (swiper.clickedIndex === undefined) return;
    const category = apartmentCategoriesList[swiper.clickedIndex];
    const { pathname } = router;
    const parts = pathname.split('/');
    parts.pop();
    router
      .push({
        pathname: `${parts.join('/')}/${router.query.slug![0]}/${category.slug}`,
        query: {
          max: router.query.max,
          min: router.query.min,
          category: category.value,
          slug: router.query.slug,
        },
      })
      .then(() => router.reload());
  };

  useEffect(() => {
    const { category } = router.query;
    if (!category) return;
    const index = apartmentCategoriesList.findIndex((el) => el.value === category);

    setActiveIndex(index);
  }, [router.query.category]);

  const categoryImagesArray = useMemo(() => {
    return [
      <Apartments key="apartments" color={activeIndex === 0 ? colors.greyScale[100] : colors.greyScale[60]} />,
      <Houses key="houses" color={activeIndex === 1 ? colors.greyScale[100] : colors.greyScale[60]} />,
      <CountryHouses key="CountryHouses" color={activeIndex === 2 ? colors.greyScale[100] : colors.greyScale[60]} />,
      <Areas key="Areas" color={activeIndex === 3 ? colors.greyScale[100] : colors.greyScale[60]} />,
      <Commercial key="Commercial" color={activeIndex === 4 ? colors.greyScale[100] : colors.greyScale[60]} />,
      <Industrial key="Industrial" color={activeIndex === 5 ? colors.greyScale[100] : colors.greyScale[60]} />,
      <OtherRealEstate
        key="OtherRealEstate"
        color={activeIndex === 6 ? colors.greyScale[100] : colors.greyScale[60]}
      />,
      <Foreign key="Foreign" color={activeIndex === 7 ? colors.greyScale[100] : colors.greyScale[60]} />,
    ];
  }, [activeIndex]);

  return (
    <Root>
      <Wrapper>
        <ButtonPrev active={!reachedStart} ref={prevRef}>
          <ArrowLeft />
        </ButtonPrev>
        <ButtonNext active={!reachedEnd} ref={nextRef}>
          <ArrowRight />
        </ButtonNext>
        <SwiperContainer>
          <MainSwiper
            onInit={(swiper) => handleInit(swiper)}
            spaceBetween={45}
            slidesPerView="auto"
            breakpoints={{
              576: { slidesPerView: 6 },
            }}
            modules={[Navigation]}
            onSlideChange={(swiper) => onSlideChange(swiper)}
            onClick={(swiper) => onClick(swiper)}>
            {apartmentCategoriesList?.map((category, index) => {
              const isActive = index === activeIndex;

              return (
                <SwiperSlide key={index}>
                  <StyledButton active={isActive}>
                    {categoryImagesArray[index]}
                    <StyledText active={isActive}>{category.label}</StyledText>
                  </StyledButton>
                </SwiperSlide>
              );
            })}
          </MainSwiper>
        </SwiperContainer>
      </Wrapper>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  width: 100%;
  border: none;
  border-radius: 32px;
  margin-top: 23px;
  z-index: 0;
  @media (max-width: ${BreakpointsEnum.s}px) {
    margin-top: 0;
  }
`;

const Wrapper = styled.div`
  position: relative;
  max-width: 1300px;
  width: 100%;
`;

const ButtonPrev = styled.div<{ active: boolean }>`
  display: ${(props) => (props.active ? 'flex' : 'none')};
  position: absolute;

  top: calc(50% - 25px);
  left: -20px;
  width: 40px;
  height: 40px;
  z-index: 1000;
  align-items: center;
  justify-content: center;

  background: ${({ theme: { colors } }) => colors.greyScale[0]};
  border: 1px solid ${({ theme: { colors } }) => colors.greyScale[30]};
  border-radius: 50px;
  box-shadow: 0 10px 20px rgba(175, 181, 192, 0.18);
  cursor: pointer;
  @media (max-width: ${BreakpointsEnum.s}px) {
    display: none;
  }
`;

const ButtonNext = styled.div<{ active: boolean }>`
  display: ${(props) => (props.active ? 'flex' : 'none')};
  position: absolute;

  top: calc(50% - 25px);
  right: -20px;
  width: 40px;
  height: 40px;
  z-index: 1000;
  align-items: center;
  justify-content: center;

  background: ${({ theme: { colors } }) => colors.greyScale[0]};
  border: 1px solid ${({ theme: { colors } }) => colors.greyScale[30]};
  border-radius: 50px;
  box-shadow: 0 10px 20px rgba(175, 181, 192, 0.18);
  cursor: pointer;
  @media (max-width: ${BreakpointsEnum.s}px) {
    display: none;
  }
`;

const SwiperContainer = styled.div`
  position: relative;
`;

const MainSwiper = styled(Swiper)`
  position: relative;
  color: transparent;
  z-index: auto;
  overflow: hidden;
  @media (max-width: ${BreakpointsEnum.s}px) {
    ${({ theme: { typography, colors } }) => css`
      .swiper-pagination-fraction {
        ${typography.caption_14_10_medium}
        color: ${colors.greyScale[100]};
        background: ${colors.greyScale[0]};
        padding-top: 4px;
        width: 47px;
        height: 22px;
        left: 50%;
        bottom: 16px;
        transform: translateX(-50%);
      }
    `}
  }
  .swiper-wrapper {
    align-items: end;
  }
  .swiper-slide {
    width: max-content !important;
  }
`;

const StyledButton = styled.button<{ active: boolean }>`
  position: relative;
  display: flex;
  align-items: end;
  padding-bottom: 16px;
  cursor: pointer;
  border-bottom: ${(props) => (props.active ? 'solid #1C212D' : 'none')};
`;

const StyledText = styled.p<{ active: boolean }>`
  ${({ theme: { typography } }) => css`
    ${typography.body_18_16_medium}
  `}
  color: ${(props) => (props.active ? '#1C212D' : '#8991A1')};
  margin-left: 8px;
`;

export default Header;
