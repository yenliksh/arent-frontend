import { ApartmentRentPeriodType, RentPeriodType } from '__generated__/types';
import { Routes } from 'constains';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FC, useMemo } from 'react';
import styled, { css } from 'styled-components';
import { TextVariants } from 'types';
import { BaseCardProps } from 'types/card';
import { AppText } from 'ui';

interface CardOnMapProps extends BaseCardProps {
  rentType?: string;
  id: string;
  type?: ApartmentRentPeriodType;
  slug?: string;
}

const CardOnMap: FC<CardOnMapProps> = ({ rentType, pictureSrc, title, price, slug }) => {
  const { t } = useTranslation('ui', { keyPrefix: 'cards' });

  const router = useRouter();
  const { pathname, query } = router;
  const { typeApartment } = query;

  const isShortRent = pathname === Routes.listApartmentsShort || typeApartment === RentPeriodType.ShortTerm;
  const currentPricePeriod = isShortRent ? t('pricePeriod') : t('pricePeriodMonth');

  const trimmedTitle = useMemo(() => {
    let trimmedString;
    const CUT_TITLE_LENGTH = 50;

    if (title.length >= CUT_TITLE_LENGTH) {
      trimmedString = title.substring(0, CUT_TITLE_LENGTH);
      trimmedString = trimmedString.substring(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' ')));
      trimmedString += '...';
    } else {
      trimmedString = title;
    }

    return trimmedString;
  }, []);

  const routeToApartmentPage = () => {
    router.push({
      pathname: `${Routes.apartment}/${slug}`,
      query: {
        ...query,
        dateStartInitial: query.start,
        dateEndInitial: query.end,
        guests: query.guests,
        kids: query.kids,
        pets: query.pets,
      },
    });
  };

  return (
    <CardContainer onClick={routeToApartmentPage}>
      <ImageContainer $src={pictureSrc} />
      <DescriptionContainer>
        <RentTypeContainer>
          <RentTypeText>{rentType}</RentTypeText>
        </RentTypeContainer>
        <TitleContainer>
          <AppText variant={TextVariants.SECONDARY} font="body_24_16_medium">
            {trimmedTitle}
          </AppText>
        </TitleContainer>
        <PriceContainer>
          <AppText variant={TextVariants.SECONDARY} font="title_22_18_bold">
            {price} ₸{' '}
          </AppText>
          <PricePeriod>{currentPricePeriod}</PricePeriod>
        </PriceContainer>
      </DescriptionContainer>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  position: absolute;
  z-index: 999;
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.greyScale[0]};
    border: 1px solid ${theme.colors.greyScale[30]};
    border-radius: 16px;
    overflow: hidden;
    width: 288px;
    max-height: 275px;
  `}
`;

const ImageContainer = styled.div<{ $src: string }>`
  width: 300px;
  height: 200px;
  max-height: 131px;

  display: flex;
  justify-content: flex-end;

  ${({ $src }) =>
    css`
      background: url(${$src});
      background-size: cover;
      background-position: center;
    `}
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
`;

const RentTypeContainer = styled.div`
  display: flex;
`;

const RentTypeText = styled(AppText)`
  ${({ theme }) => css`
    color: ${theme.colors.greyScale[60]};
    ${theme.typography.body_20_14_regular}
  `}
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4px;
  letter-spacing: -1px;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 18px;
`;

const PricePeriod = styled(AppText)`
  ${({ theme }) => css`
    color: ${theme.colors.greyScale[60]};
    ${theme.typography.caption_16_12_regular}
  `}
  margin-left: 5px;
`;

export default CardOnMap;
