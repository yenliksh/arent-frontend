import { ApartmentAdCharacteristicsModel, ApartmentCategory, ApartmentType } from '__generated__/types';
import { roomsPlural } from 'constains';
import { useTranslation } from 'next-i18next';
import { GasSupplyEnum, ObjectPlacementEnum, WaterSupplyEnum } from 'pagesComponents/ListApartmentsShortPage/options';
import { FC } from 'react';
import styled from 'styled-components';
import { BreakpointsEnum, TextVariants } from 'types';
import { AppText } from 'ui';
import { handleWordsDeclination } from 'utils';

type ShortInfoType = {
  typeofHousing?: string;
  countRooms?: number;
  apartmentCategory?: string;
  characteristics?: ApartmentAdCharacteristicsModel;
};

const ShortInfo: FC<ShortInfoType> = ({ typeofHousing, countRooms, apartmentCategory, characteristics }) => {
  const { t } = useTranslation('apartmentPage', { keyPrefix: 'shortInfo' });
  const editCountRoms = countRooms === 8 ? '8+' : countRooms;

  const createTypeHousing = (apartmentCategory?: string, data: string = t('noData')) => {
    if (apartmentCategory === ApartmentCategory.Countryhouse) return t('countryhouse');
    if (data === ApartmentType.Flat) return t('flat');
    if (data === ApartmentType.Room) return t('room');
    if (data === ApartmentType.Cottage) return t('house');
    if (data === ApartmentType.Hostel) return t('hostel');
    if (data === ApartmentType.MiniHotel) return t('miniHotel');
    if (data === ApartmentType.Guesthouse) return t('guestHome');
    if (data === ApartmentType.Aparthotel) return t('apart');
    if (data === ApartmentType.Ihc) return t('ihc');
    if (data === ApartmentType.Pc) return t('pc');
    if (data === ApartmentType.Lgx) return t('lgx');
    if (data === ApartmentType.Landforgarden) return t('landForGarden');
    if (data === ApartmentType.Commercial) return t('commercial');
    if (data === ApartmentType.Countryconstruction) return t('countryconstruction');
    if (data === ApartmentType.Other) return t('other');
    if (data === ApartmentType.Freeappointment) return t('freeAppointment');
    if (data === ApartmentType.Office) return t('office');
    if (data === ApartmentType.Storage) return t('storage');
    if (data === ApartmentType.Publiccatering) return t('publiccatering');
    if (data === ApartmentType.Shop) return t('shop');
    if (data === ApartmentType.Beautysaloon) return t('beautySaloon');
    if (data === ApartmentType.Carservice) return t('carservice');
    if (data === ApartmentType.Industrialbase) return t('industrialbase');
    if (data === ApartmentType.Factory) return t('factory');
  };

  const generateValue = (string: string, value?: number | string) => (value ? string : t('noData'));

  const informationArr = [
    {
      label: t('typeofHousing'),
      value: generateValue(
        `${createTypeHousing(apartmentCategory, typeofHousing)}`,
        createTypeHousing(apartmentCategory, typeofHousing),
      ),
    },
    // {
    //   label: t('countRoms'),
    //   value:
    //     countRooms !== 0
    //       ? generateValue(`${editCountRoms} ${handleWordsDeclination(Number(countRooms), roomsPlural)}`, countRooms)
    //       : 'Студия',
    // },
    // Todo: it'll be later
    // {
    //   label: t('numberOfBeds'),
    //   value: generateValue(`${numberOfBeds} ${handleWordsDeclination(Number(numberOfBeds), placesPlural)}`, countRooms),
    // },
    // {
    //   label: t('totalArea'),
    //   value: generateValue(`${totalArea} ${t('m2')}`, totalArea),
    // },
    // {
    //   label: t('kitchenArea'),
    //   value: generateValue(`${kitchenArea} ${t('m2')}`, kitchenArea),
    // },
    // {
    //   label: t('apartmentFloor'),
    //   value: generateValue(`${apartmentFloor} ${t('floor')}`, apartmentFloor),
    // },
  ];

  const createCharacteristics = (data: string) => {
    if (data === GasSupplyEnum.NOT) return t('not');
    if (data === GasSupplyEnum.POSSIBLETOCONNECT) return t('possibleToConnect');
    if (data === GasSupplyEnum.TRUNKAUTONOMOUS) return t('trunkAutonomous');
    if (data === WaterSupplyEnum.CENTRALWATERSUPPLY) return t('centralWaterSupply');
    if (data === WaterSupplyEnum.NOT) return t('not');
    if (data === WaterSupplyEnum.WELL) return t('well');
    if (data === ObjectPlacementEnum.BUSINESSCENTER) return t('businessCenter');
    if (data === ObjectPlacementEnum.DETACHEDBUILDING) return t('detachedBuilding');
    if (data === ObjectPlacementEnum.MALL) return t('mall');
    if (data === ObjectPlacementEnum.RESIDENTIONALCOMPLEX) return t('residentionalComplex');
    if (data === ObjectPlacementEnum.UNIVERSALMARKET) return t('universalMarket');
  };

  return (
    <Root>
      <StyledAppText variant={TextVariants.SECONDARY} font="body_24_16_medium">
        {t('general')}
      </StyledAppText>
      <InformationWrapper>
        {informationArr?.map(
          (info, index) =>
            info.value && (
              <Item key={index}>
                <InforamtionAppText font="body_20_14_regular">{info.label}</InforamtionAppText>
                <AppText font="body_20_14_medium" variant={TextVariants.SECONDARY}>
                  {info.value}
                </AppText>
              </Item>
            ),
        )}
        {countRooms ? (
          <Item>
            <InforamtionAppText font="body_20_14_regular">{t('countRoms')}</InforamtionAppText>
            <AppText font="body_20_14_medium" variant={TextVariants.SECONDARY}>
              {generateValue(`${editCountRoms} ${handleWordsDeclination(Number(countRooms), roomsPlural)}`, countRooms)}
            </AppText>
          </Item>
        ) : null}
        {characteristics?.ceilingHeight && (
          <Item>
            <InforamtionAppText font="body_20_14_regular">{t('ceilingHeight')}</InforamtionAppText>
            <AppText font="body_20_14_medium" variant={TextVariants.SECONDARY}>
              {characteristics.ceilingHeight}м
            </AppText>
          </Item>
        )}
        {characteristics?.floor && (
          <Item>
            <InforamtionAppText font="body_20_14_regular">{t('floor')}</InforamtionAppText>
            <AppText font="body_20_14_medium" variant={TextVariants.SECONDARY}>
              {characteristics.floor}
            </AppText>
          </Item>
        )}
        {characteristics?.gasSupply && (
          <Item>
            <InforamtionAppText font="body_20_14_regular">{t('gas')}</InforamtionAppText>
            <AppText font="body_20_14_medium" variant={TextVariants.SECONDARY}>
              {createCharacteristics(characteristics.gasSupply)}
            </AppText>
          </Item>
        )}
        {characteristics?.waterSupply && (
          <Item>
            <InforamtionAppText font="body_20_14_regular">{t('water')}</InforamtionAppText>
            <AppText font="body_20_14_medium" variant={TextVariants.SECONDARY}>
              {createCharacteristics(characteristics.waterSupply)}
            </AppText>
          </Item>
        )}
        {characteristics?.electricitySupply && (
          <Item>
            <InforamtionAppText font="body_20_14_regular">{t('electricitySupply')}</InforamtionAppText>
            <AppText font="body_20_14_medium" variant={TextVariants.SECONDARY}>
              {createCharacteristics(characteristics.electricitySupply)}
            </AppText>
          </Item>
        )}
        {characteristics?.heating && (
          <Item>
            <InforamtionAppText font="body_20_14_regular">{t('heating')}</InforamtionAppText>
            <AppText font="body_20_14_medium" variant={TextVariants.SECONDARY}>
              {characteristics.heating}
            </AppText>
          </Item>
        )}
        {characteristics?.landArea && (
          <Item>
            <InforamtionAppText font="body_20_14_regular">{t('landArea')}</InforamtionAppText>
            <AppText font="body_20_14_medium" variant={TextVariants.SECONDARY}>
              {characteristics.landArea}м²
            </AppText>
          </Item>
        )}
        {characteristics?.light && (
          <Item>
            <InforamtionAppText font="body_20_14_regular">{t('light')}</InforamtionAppText>
            <AppText font="body_20_14_medium" variant={TextVariants.SECONDARY}>
              {characteristics.light}
            </AppText>
          </Item>
        )}
        {characteristics?.gas && (
          <Item>
            <InforamtionAppText font="body_20_14_regular">{t('gas')}</InforamtionAppText>
            <AppText font="body_20_14_medium" variant={TextVariants.SECONDARY}>
              {characteristics.gas}
            </AppText>
          </Item>
        )}
        {characteristics?.sewerage && (
          <Item>
            <InforamtionAppText font="body_20_14_regular">{t('sewerage')}</InforamtionAppText>
            <AppText font="body_20_14_medium" variant={TextVariants.SECONDARY}>
              {characteristics.sewerage}
            </AppText>
          </Item>
        )}
        {characteristics?.objectArea && (
          <Item>
            <InforamtionAppText font="body_20_14_regular">{t('objectArea')}</InforamtionAppText>
            <AppText font="body_20_14_medium" variant={TextVariants.SECONDARY}>
              {characteristics.objectArea}м²
            </AppText>
          </Item>
        )}
        {characteristics?.objectPlacement && (
          <Item>
            <InforamtionAppText font="body_20_14_regular">{t('objectPlacement')}</InforamtionAppText>
            <AppText font="body_20_14_medium" variant={TextVariants.SECONDARY}>
              {createCharacteristics(characteristics.objectPlacement)}
            </AppText>
          </Item>
        )}
        {characteristics?.territoryArea && (
          <Item>
            <InforamtionAppText font="body_20_14_regular">{t('territoryArea')}</InforamtionAppText>
            <AppText font="body_20_14_medium" variant={TextVariants.SECONDARY}>
              {characteristics.territoryArea}м²
            </AppText>
          </Item>
        )}
        {characteristics?.totalArea && (
          <Item>
            <InforamtionAppText font="body_20_14_regular">{t('totalArea')}</InforamtionAppText>
            <AppText font="body_20_14_medium" variant={TextVariants.SECONDARY}>
              {characteristics.totalArea}м²
            </AppText>
          </Item>
        )}
        {characteristics?.ventilation && (
          <Item>
            <InforamtionAppText font="body_20_14_regular">{t('ventilation')}</InforamtionAppText>
            <AppText font="body_20_14_medium" variant={TextVariants.SECONDARY}>
              {characteristics.ventilation}
            </AppText>
          </Item>
        )}
        {characteristics?.water && (
          <Item>
            <InforamtionAppText font="body_20_14_regular">{t('water')}</InforamtionAppText>
            <AppText font="body_20_14_medium" variant={TextVariants.SECONDARY}>
              {characteristics.water}
            </AppText>
          </Item>
        )}
        {characteristics?.yearOfConstruction && (
          <Item>
            <InforamtionAppText font="body_20_14_regular">{t('yearOfConstruction')}</InforamtionAppText>
            <AppText font="body_20_14_medium" variant={TextVariants.SECONDARY}>
              {characteristics.yearOfConstruction}
            </AppText>
          </Item>
        )}
      </InformationWrapper>
    </Root>
  );
};

export default ShortInfo;

const InforamtionAppText = styled(AppText)`
  color: ${({ theme: { colors } }) => colors.greyScale[60]};
`;
const Item = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  width: 400px;

  @media (max-width: ${BreakpointsEnum.s}px) {
    width: 100%;
  }
`;
const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 24px;
  width: 100%;
`;
const StyledAppText = styled(AppText)`
  margin-top: 32px;
`;
const Root = styled.div`
  width: 100%;
  margin-top: 32px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.greyScale[30]};
`;
