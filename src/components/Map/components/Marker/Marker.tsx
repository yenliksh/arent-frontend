import { ApartmentRentPeriodType, ApartmentType } from '__generated__/types';
import { useClickOutside, useToggle } from 'hooks';
import { useTranslation } from 'next-i18next';
import { FC, useCallback, useRef } from 'react';
import styled from 'styled-components';

import { CardOnMap } from '../../../CardOnMap';

type MarkerProps = {
  price: string;
  imageUrl: string;
  isFocus: boolean;
  title: string;
  id: string;
  apartmentType: ApartmentType;
  type?: ApartmentRentPeriodType;
  slug?: string;
  isMobile: boolean;
  onClickPrice: (id: string | undefined) => void;
};

const Marker: FC<MarkerProps> = ({
  price,
  title,
  imageUrl,
  isFocus,
  id,
  isMobile,
  type,
  apartmentType,
  slug,
  onClickPrice,
}) => {
  const { t } = useTranslation('ui', { keyPrefix: 'cards' });
  const { toggle, isOpened, close } = useToggle(false);
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, close);

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

  const priceClick = useCallback(() => {
    toggle();
    onClickPrice(id);
  }, [id]);

  return (
    <Root ref={ref}>
      <Price onClick={priceClick} $isCardOpen={isOpened || isFocus}>{`${price} ₸`}</Price>
      {isOpened && !isMobile && (
        <CardOnMap
          rentType={typeHousingMapping[apartmentType]}
          pictureSrc={imageUrl}
          title={title}
          price={price}
          id={id}
          type={type}
          slug={slug}
        />
      )}
    </Root>
  );
};

export default Marker;

const Root = styled.div`
  position: relative;
`;

const Price = styled.button<{ $isCardOpen?: boolean }>`
  outline: none;
  z-index: 999;
  width: fit-content;
  overflow: hidden;
  padding: 8px;
  height: 35px;
  background-color: ${({ theme: { colors }, $isCardOpen }) =>
    $isCardOpen ? colors.greyScale[100] : colors.greyScale[0]};
  box-shadow: 0 10px 15px rgba(175, 181, 192, 0.18);
  border-radius: 8px;
  color: ${({ theme: { colors }, $isCardOpen }) => ($isCardOpen ? colors.greyScale[0] : colors.greyScale[100])};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 7px !important;
  ${({ theme: { typography } }) => typography.body_20_14_medium};
`;
