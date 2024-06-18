import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { useTranslation } from 'next-i18next';
import React, { FC, useCallback, useRef } from 'react';
import styled from 'styled-components';
import SwiperCore, { Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ArrowLeft, ArrowRight } from '../../../../../public/svg/components';
import { ApartmentAdViewModel, ApartmentRentPeriodType, ApartmentType } from '../../../../__generated__/types';
import { CardOnMap } from '../../../CardOnMap';

interface ResponsiveCardInSearchProps extends Partial<Omit<ApartmentAdViewModel, 'address'>> {
  rentType?: string;
  guestsNum?: string;
  id: string;
  pictureSrc: string;
  address: string;
  title: string;
  photo?: string;
  price: string;
  cost?: string;
  lat?: number;
  lng?: number;
  isFocus?: boolean;
  type?: ApartmentRentPeriodType;
  slug?: string;
}

type SliderProps = {
  markers: Array<ResponsiveCardInSearchProps>;
  selectedMarker: string | undefined;
  handleDivisionOnCategories?: (price: string) => string;
};

const SliderMapApartments: FC<SliderProps> = ({ markers, selectedMarker, handleDivisionOnCategories }) => {
  const { t } = useTranslation('ui', { keyPrefix: 'cards' });

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const typeHousingMapping = {
    [ApartmentType.Flat]: t('flat'),
    [ApartmentType.Room]: t('room'),
    [ApartmentType.Cottage]: t('house'),
    [ApartmentType.Hostel]: t('hostel'),
    [ApartmentType.MiniHotel]: t('miniHotel'),
    [ApartmentType.Guesthouse]: t('guestHome'),
    [ApartmentType.Aparthotel]: t('apart'),
    [ApartmentType.Beautysaloon]: t('beautySaloon'),
    [ApartmentType.Carservice]: t('carservice'),
    [ApartmentType.Commercial]: t('commercial'),
    [ApartmentType.Countryconstruction]: t('countryconstruction'),
    [ApartmentType.Freeappointment]: t('freeAppointment'),
    [ApartmentType.Ihc]: t('ihc'),
    [ApartmentType.Industrialbase]: t('industrialbase'),
    [ApartmentType.Landforgarden]: t('landForGarden'),
    [ApartmentType.Lgx]: t('lgx'),
    [ApartmentType.Office]: t('office'),
    [ApartmentType.Other]: t('other'),
    [ApartmentType.Pc]: t('pc'),
    [ApartmentType.Publiccatering]: t('publiccatering'),
    [ApartmentType.Shop]: t('shop'),
    [ApartmentType.Storage]: t('storage'),
    [ApartmentType.Factory]: t('factory'),
  };

  const handleInitSlider = useCallback((swiper: SwiperCore) => {
    if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
    }
    swiper.navigation.init();
    swiper.navigation.update();
    if (selectedMarker) {
      const indexOfAd = markers.findIndex((mar) => mar.id === selectedMarker);
      swiper.slideTo(indexOfAd);
    }
  }, []);

  return (
    <Root>
      <Wrapper>
        <ButtonPrev ref={prevRef}>
          <ArrowLeft />
        </ButtonPrev>
        <ButtonNext ref={nextRef}>
          <ArrowRight />
        </ButtonNext>
        <MainSwiper
          onInit={(swiper) => handleInitSlider(swiper)}
          spaceBetween={10}
          modules={[Navigation, Thumbs]}
          className="mySwiper2">
          {markers?.map((mark, index) => (
            <SwiperSlide key={index}>
              <CardOnMap
                rentType={typeHousingMapping[mark?.apartmentType!]}
                pictureSrc={mark?.photo || ''}
                title={mark?.title}
                price={handleDivisionOnCategories ? handleDivisionOnCategories(String(mark?.cost || '')) : ''}
                id={mark.id}
                type={mark.type}
                slug={mark.slug}
              />
            </SwiperSlide>
          ))}
        </MainSwiper>
      </Wrapper>
    </Root>
  );
};

export default SliderMapApartments;

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

  border: 1px solid ${({ theme: { colors } }) => colors.greyScale[30]};
  background: ${({ theme: { colors } }) => colors.greyScale[0]};
  border-radius: 12px;
  box-shadow: 0px 10px 20px rgba(175, 181, 192, 0.18);
  cursor: pointer;
`;
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
`;
const MainSwiper = styled(Swiper)`
  position: relative;
  border-radius: 18px;
  min-height: 275px;
  overflow: unset !important;
`;
const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 10;
  width: 288px;
`;
const Root = styled.div`
  position: absolute;
  bottom: 60px;
  left: 0;
  width: 100%;
  height: 275px;
  overflow: hidden;
`;
