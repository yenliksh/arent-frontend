import { ApartmentRentPeriodType } from '__generated__/types';
import {
  FEE_PERCENTS_LONG_TERM,
  FEE_PERCENTS_SHORT_TERM,
  guestPlural,
  rentPeriodMapping,
  roomsPlural,
  Routes,
} from 'constains';
import { useClientSize } from 'hooks';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { BreakpointsEnum, TextVariants } from 'types';
import { AppText, LightButton, LinkTo } from 'ui';
import { LightButtonSize } from 'ui/LightButton/LightButton';
import { getPercentOnRent, handleWordsDeclination, locationToString } from 'utils';
import { handleDivisionOnCategories } from 'utils/divisionOnCategories';

import { Map } from '../../../../pagesComponents/ApartmentPage/components/Map';

type HeaderCardProps = {
  price?: string | null;
  numberOfGuests?: number;
  numberOfRooms?: number;
  image?: string;
  name?: string;
  rentPeriodType?: ApartmentRentPeriodType;
  city?: string;
  street?: string;
  houseNumber?: string;
  id: string;
  type: ApartmentRentPeriodType;
  slug?: string;
  coords: {
    lat: number;
    lng: number;
  };
};

const HeaderCard: FC<HeaderCardProps> = ({
  name = '',
  price,
  image,
  rentPeriodType,
  numberOfGuests = 0,
  numberOfRooms,
  city,
  houseNumber,
  street,
  id,
  slug,
  coords,
}) => {
  const { t } = useTranslation('ui', { keyPrefix: 'chat.headerCard' });
  const router = useRouter();

  const isPrice = !!price;
  const isShortRent = rentPeriodType === ApartmentRentPeriodType.ShortTerm;
  const isPeriodType = !!rentPeriodType;
  const numberOfGuestsString = handleWordsDeclination(numberOfGuests, guestPlural);
  const numberOfRoomsString = handleWordsDeclination(numberOfRooms || 0, roomsPlural);
  const numberOfRoomsFormatted = numberOfRooms === 8 ? '8+' : numberOfRooms;
  const location = locationToString({ city, street, houseNumber });

  const serviceComission = isShortRent
    ? isPrice && Math.round(getPercentOnRent(+price, FEE_PERCENTS_SHORT_TERM))
    : isPrice && Math.round(getPercentOnRent(+price, FEE_PERCENTS_LONG_TERM));

  const finalyPrice = Number(price) + Number(serviceComission);

  const dividedPrice = isPrice && handleDivisionOnCategories(String(finalyPrice));

  const isStudio = numberOfRooms === 0;
  const isShowNumberOfRooms = numberOfRooms && !isStudio;

  const { getIsBreakpoint } = useClientSize();
  const isMobile = getIsBreakpoint('sm');

  return (
    <>
      {!isMobile && (
        <Header>
          <AppText variant={TextVariants.SECONDARY} font="body_24_16_medium">
            {t('details')}
          </AppText>
          <LightButton
            isUnderline
            size={LightButtonSize.SMALL}
            text={t('showMore')}
            onClick={() => router.push({ pathname: `${Routes.apartment}/${slug}` })}
            isPrimary
          />
        </Header>
      )}
      <Root>
        <ImageContainer>{image && <PreviewImage $src={image} />}</ImageContainer>

        <InfoContainer>
          <InfoWrapper>
            {id ? (
              <StyledLinkTo text={name} href={{ pathname: `${Routes.apartment}/${slug}` }} />
            ) : (
              <AppText variant={TextVariants.SECONDARY} font="body_24_16_medium">
                {name}
              </AppText>
            )}

            {!isMobile && (
              <PriceContainer>
                {isPrice && (
                  <AppText variant={TextVariants.VIOLET} font="body_18_16_bold">{`${dividedPrice} ₸`}</AppText>
                )}
                {isPeriodType && <StyledCaption>{`${t('per')} ${rentPeriodMapping[rentPeriodType]}`}</StyledCaption>}
              </PriceContainer>
            )}
          </InfoWrapper>
          <Description>
            {`${numberOfGuests} ${numberOfGuestsString}`}
            {isShowNumberOfRooms ? (
              <>
                <Dot />
                {`${numberOfRoomsFormatted} ${numberOfRoomsString}`}
              </>
            ) : (
              t('studio')
            )}
          </Description>
          {isMobile && (
            <PriceContainer>
              {isPrice && (
                <AppText variant={TextVariants.PRIMARY} font="body_18_16_bold">{`${dividedPrice} ₸`}</AppText>
              )}
              {isPeriodType && <StyledCaption>{`${t('per')} ${rentPeriodMapping[rentPeriodType]}`}</StyledCaption>}
            </PriceContainer>
          )}
        </InfoContainer>
        {!isMobile && (
          <MapContainer>
            <AppText variant={TextVariants.SECONDARY} font="body_24_16_medium">
              {t('location')}
            </AppText>
            <Location>{location}</Location>
            <MapWrapper>
              <StyledMap currentMarker={coords} center={coords} withResizeButton isFullWidth />
            </MapWrapper>
          </MapContainer>
        )}
      </Root>
    </>
  );
};

export default HeaderCard;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;

  width: 100%;
  justify-content: space-between;

  @media (max-width: ${BreakpointsEnum.sm}px) {
    flex-direction: row;
    padding: 16px;
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.greyScale[30]};
    justify-content: flex-start;
  }
`;

const InfoContainer = styled.div`
  padding: 16px 24px;
  padding-bottom: 0;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    padding: 0;
    margin-left: 16px;
  }
`;

const MapContainer = styled.div`
  padding: 16px 24px;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    padding: 0;
  }
`;

const PreviewImage = styled.div<{ $src: string }>`
  height: 250px;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  ${({ $src }) =>
    css`
      background: url(${$src});
      background-size: cover;
      background-position: center;
    `}
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  grid-gap: 4px;

  @media (max-width: ${BreakpointsEnum.sm}px) {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
`;

const Caption = styled.p`
  ${({ theme: { colors, typography } }) => css`
    color: ${colors.greyScale[60]};
    ${typography.caption_16_12_regular}
  `}
`;

const Location = styled(AppText)``;

const StyledCaption = styled(Caption)`
  margin-bottom: 4px;
`;

const Description = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  padding-bottom: 24px;

  ${({ theme: { colors, typography } }) => css`
    color: ${colors.greyScale[60]};
    ${typography.body_20_14_regular}
  `};

  border-bottom: 1px solid ${({ theme: { colors } }) => colors.greyScale[30]};

  @media (max-width: ${BreakpointsEnum.sm}px) {
    margin-bottom: 0;
    border: none;
  }
`;

const Dot = styled.span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: ${({ theme: { colors } }) => colors.greyScale[60]};
`;

const StyledLinkTo = styled(LinkTo)`
  ${({ theme: { colors, typography } }) => css`
    color: ${colors.greyScale[100]};
    ${typography.body_24_16_medium}
  `};

  @media (max-width: ${BreakpointsEnum.sm}px) {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

const ImageContainer = styled.div`
  height: 250px;
  width: 100%;
  overflow: hidden;
  position: relative;

  @media (max-width: ${BreakpointsEnum.sm}px) {
    width: 100px;
    height: 100px;
    border-radius: 16px;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  height: fit-content;
  align-items: flex-end;
  flex-direction: column;
  gap: 8px;
  p {
    white-space: nowrap;
  }
  @media (max-width: ${BreakpointsEnum.sm}px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 72px;

  padding: 24px 16px 24px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  top: 0;
  position: sticky;
  z-index: 10;
  background: ${({ theme: { colors } }) => colors.greyScale[0]};

  border-bottom: 1px solid ${({ theme: { colors } }) => colors.greyScale[30]};

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 500px;
  }

  @media (max-width: ${BreakpointsEnum.sm}px) {
    padding: 24px 16px 24px 16px;
  }
`;

const StyledMap = styled(Map)`
  width: 100% !important;
  height: 227px !important;
`;

const MapWrapper = styled.div`
  width: 100%;
  height: 227px;
  border-radius: 16px;
  overflow: hidden;
`;
