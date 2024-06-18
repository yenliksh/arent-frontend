import { Routes } from 'constains';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import styled from 'styled-components';
import { BreakpointsEnum, TextVariants } from 'types';
import { AppText, Avatar, Button } from 'ui';
import { ButtonSize, ButtonVariant } from 'ui/Button/Button';

import { ApartmentRentPeriodType } from '../../../../__generated__/types';
import { usegetActiveContractById } from '../../../../graphql/queries/Contracts/__generated__/getActiveContractById.query';
import { RentDetails, Slider } from '../index';

type RentInfoProps = {
  onOpenMapModal: () => void;
};

const RentInfo: FC<RentInfoProps> = ({ onOpenMapModal }) => {
  const { t } = useTranslation('activeRentPage', { keyPrefix: 'rentInfo' });

  const { query, push } = useRouter();
  const { id } = query;

  const contractId = String(id);

  const { data } = usegetActiveContractById({
    variables: {
      input: {
        id: contractId,
      },
    },
  });

  const contract = data?.contract__tenant_find;

  const baseApartmentAdData = contract?.baseApartmentAdData;
  const advert = contract?.apartmentAd;
  const type = contract?.apartmentRentPeriodType;

  const photos = advert ? advert?.photos.map((photo) => photo.fileKey) : [];

  const isShortRent = contract?.apartmentRentPeriodType === ApartmentRentPeriodType.ShortTerm;

  const idForFetchAdvert = isShortRent
    ? contract?.apartmentAd?.shortTermRent?.id
    : contract?.apartmentAd?.longTermRent?.id;

  const landlord = contract?.landlord;

  const city = baseApartmentAdData?.address?.city ? `${baseApartmentAdData.address.city}, ` : '';
  const street = baseApartmentAdData?.address?.street ? `${baseApartmentAdData.address.street}, ` : '';
  const houseNumber = baseApartmentAdData?.address?.houseNumber ? `${baseApartmentAdData.address.houseNumber}` : '';
  const address = `${city}${street}${houseNumber}`;

  return (
    <MainContainer>
      <TitleText variant={TextVariants.SECONDARY}>{t('title')}</TitleText>
      {photos.length ? <Slider images={photos} /> : null}
      <HouseInfo>
        <Owner>
          <Avatar avatar={landlord?.avatarKey || ''} />
          <Info>
            <OwnerName variant={TextVariants.SECONDARY}>
              {`${landlord?.firstName || ''} ${landlord?.lastName || ''}`}
            </OwnerName>
          </Info>
        </Owner>
        <AddressInfo>
          <AddressTitle variant={TextVariants.SECONDARY}>{t('address')}</AddressTitle>
          <Address variant={TextVariants.SECONDARY}>{address}</Address>
          <ShowMap onClick={onOpenMapModal}>
            <ToMapText variant={TextVariants.SECONDARY}>{t('onMap')}</ToMapText>
          </ShowMap>
        </AddressInfo>
      </HouseInfo>
      <ButtonsContainer>
        <StyledButton
          onClick={() => push({ pathname: Routes.apartment, query: { id: idForFetchAdvert, type } })}
          variant={ButtonVariant.SECONDARY}
          size={ButtonSize.LONG_TEXT}
          text={t('btnOpenAd')}
        />
      </ButtonsContainer>
      <RentDetails contractId={contractId} />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 624px;
  width: 100%;
`;

const TitleText = styled(AppText)`
  ${({ theme: { typography } }) => typography.title_22_18_bold};
`;

const HouseInfo = styled.div`
  display: flex;
  gap: 48px;

  @media (max-width: ${BreakpointsEnum.sm}px) {
    flex-direction: column;
    gap: 18px;
  }
`;

const Owner = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;

  @media (max-width: ${BreakpointsEnum.sm}px) {
    gap: 6px;
  }
`;

const AddressInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;

  @media (max-width: ${BreakpointsEnum.sm}px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const OwnerName = styled(AppText)`
  ${({ theme: { typography } }) => typography.title_22_18_bold};

  @media (max-width: ${BreakpointsEnum.s}px) {
    ${({ theme: { typography } }) => typography.body_20_14_medium};
  }
`;

const AddressTitle = styled(AppText)`
  ${({ theme: { typography } }) => typography.title_22_18_bold};

  @media (max-width: ${BreakpointsEnum.s}px) {
    display: none;
  }
`;

const Address = styled(AppText)`
  ${({ theme: { typography } }) => typography.body_20_14_regular};
  max-width: 270px;
`;

const ToMapText = styled(AppText)`
  display: none;
  text-decoration: underline;
  ${({ theme: { typography } }) => typography.body_24_14_medium};

  @media (max-width: ${BreakpointsEnum.s}px) {
    display: block;
  }
`;
const ButtonsContainer = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: ${BreakpointsEnum.s}px) {
    gap: 8px;
  }
`;

const StyledButton = styled(Button)`
  @media (max-width: ${BreakpointsEnum.s}px) {
    padding: 16px 0;
    width: 100%;
  }
`;

const ShowMap = styled.button`
  border: none;
  outline: none;
  background: transparent;
`;

export default RentInfo;
