import { ApartmentAdViewModel, ApartmentType } from '__generated__/types';
import { guestPlural, Routes } from 'constains';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import styled, { css } from 'styled-components';
import { TextVariants } from 'types';
import { AppText } from 'ui';
import { handleWordsDeclination, stringCircumcision } from 'utils/textHelpers';

import LinkTo from '../../ui/LinkTo/LinkTo';
import { handleDivisionOnCategories } from '../../utils';
import { InSearchContainer } from './styled';

interface ResponsiveCardInSearchProps extends Partial<Omit<ApartmentAdViewModel, 'address'>> {
  rentType?: string;
  guestsNum?: string;
  id: string;
  pictureSrc: string;
  address: string;
  title: string;
  price: string;
  apartmentType?: ApartmentType;
  onSetFocusOnCard: (id: string) => void;
  onDeleteFocusOnCard: (id: string) => void;
  slug?: string;
}

const ResponsiveCardInSearch: FC<ResponsiveCardInSearchProps> = ({
  pictureSrc,
  title,
  address,
  onSetFocusOnCard,
  onDeleteFocusOnCard,

  price,
  guestsNum,
  apartmentType,
  id,
  slug,
}) => {
  const { t } = useTranslation('ui', { keyPrefix: 'cards' });
  const router = useRouter();
  const { pathname, query } = router;

  const guestSubtitle = `${guestsNum} ${handleWordsDeclination(Number(guestsNum), guestPlural)}`;
  const priceSubtitle = `${handleDivisionOnCategories(String(price || ''))} ₸ `;
  const addressString = address ? stringCircumcision(address, 17) : '';

  const isShortRent = pathname === Routes.listApartmentsShort;

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

  const currentPricePeriod = isShortRent ? t('pricePeriod') : t('pricePeriodMonth');

  return (
    <StyledLinkTo
      text=""
      target="_blank"
      href={{
        pathname: `${Routes.apartment}/${slug}`,
        query: {
          numberOfGuests: query.guests,
          numberOfChild: query.kids,
          numberOfPets: query.pets,
          dateStartInitial: query.start,
          dateEndInitial: query.end,
          ...query,
        },
      }}>
      <StyledInSearchContainer onMouseEnter={() => onSetFocusOnCard(id)} onMouseLeave={() => onDeleteFocusOnCard(id)}>
        <ImageContainer $src={pictureSrc} />
        <DescriptionContainer>
          <RentTypeContainer>
            <RentTypeText>{typeHousingMapping[apartmentType!]}</RentTypeText>
          </RentTypeContainer>
          <TitleContainer>
            <TitleText variant={TextVariants.SECONDARY} font="body_24_16_medium">
              {stringCircumcision(title, 70)}
            </TitleText>

            <FeatureContainer>
              <Features>{guestSubtitle}</Features>
            </FeatureContainer>
          </TitleContainer>
          <FooterContainer>
            <AddressContainer>
              <Address>{addressString}</Address>
            </AddressContainer>

            <PriceContainer>
              <AppText variant={TextVariants.SECONDARY} font="title_22_18_bold">
                {priceSubtitle}
              </AppText>
              <PricePeriod>{currentPricePeriod}</PricePeriod>
            </PriceContainer>
          </FooterContainer>
        </DescriptionContainer>
      </StyledInSearchContainer>
    </StyledLinkTo>
  );
};

const StyledLinkTo = styled(LinkTo)``;

const StyledInSearchContainer = styled(InSearchContainer)`
  flex-direction: column;
  width: 100%;
  max-width: 343px;
  margin: auto;
`;

const ImageContainer = styled.div<{ $src: string }>`
  display: flex;
  justify-content: flex-end;
  width: 343px;
  height: 171px;
  ${({ $src }) => css`
    background: url(${$src});
    background-size: cover;
    background-position: center;
  `}
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
  max-width: 373px;
`;

const RentTypeContainer = styled.div`
  display: flex;
`;

const RentTypeText = styled(AppText)`
  ${({ theme }) => css`
    color: ${theme.colors.greyScale[60]};
    ${theme.typography.body_20_14_regular};
  `}
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  height: 72px;
  gap: 8px;
  margin-top: 4px;
`;

const TitleText = styled(AppText)`
  overflow-x: hidden;
  text-overflow: ellipsis;
`;

const FeatureContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Features = styled(AppText)`
  ${({ theme }) => css`
    color: ${theme.colors.greyScale[60]};
    ${theme.typography.caption_16_12_regular}
  `}
  margin-left: 4px;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 24px;
`;

const AddressContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex: 1;
  margin-right: 5px;
`;

const Address = styled(AppText)`
  ${({ theme }) => css`
    color: ${theme.colors.greyScale[60]};
    ${theme.typography.caption_16_12_regular}
  `}
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: flex-end;
  width: 57%;
`;

const PricePeriod = styled(AppText)`
  ${({ theme }) => css`
    color: ${theme.colors.greyScale[60]};
    ${theme.typography.caption_16_12_regular};
  `}
  margin-left: 5px;
`;

export default ResponsiveCardInSearch;
