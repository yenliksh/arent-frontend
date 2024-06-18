import {
  ApartmentAdStatusType,
  ApartmentRentPeriodType,
  ContractRequestStatus,
  ContractStatus,
  ShortTermRentBookingType,
} from '__generated__/types';
import { daysPlural, hoursPlural, minutesPlural } from 'constains';
import { useGetLongTermRentByApId } from 'graphql/queries/Apartments/__generated__/getLongTermApartmentByApId.query';
import { useGetShortTermRentByApId } from 'graphql/queries/Apartments/__generated__/getShortTermApartmentByApId.query';
import { useGetLightMeLazyQuery } from 'graphql/queries/User/__generated__/getLightMe.query';
import { useClientSize, useToggle } from 'hooks';
import { MainLayout } from 'layouts';
import { Filters } from 'layouts/MainLayout/components/Filters';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { Slider } from 'pagesComponents/ActiveRent/components';
import {
  Description,
  FullViewSlider,
  HeaderApartment,
  Owner,
  SliderApartment,
  Title,
} from 'pagesComponents/ApartmentPage/components';
import { FC, useEffect, useMemo, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styled, { css } from 'styled-components';
import { BreakpointsEnum, TextVariants } from 'types';
import { RequestStatusEnum } from 'types/card';
import { AppText, BaseModal, InstantBooking, OwnershipConfirmed } from 'ui';
import { CookieKeys, getCookie, handleWordsDeclination } from 'utils';

import { ArrowLeft } from '../../../public/svg/components';
import ApartmentPageSkeleton from './ApartmentPageSkeleton';

const CardRequest = dynamic(() => import('components/CardRequest/CardRequest'), { ssr: false });
const BookingComponent = dynamic(() => import('components/BookingComponent/BookingComponent'), { ssr: false });
const Map = dynamic(() => import('pagesComponents/ApartmentPage/components/Map/Map'), { ssr: false });
const ImportantInformation = dynamic(
  () => import('pagesComponents/ApartmentPage/components/ImportantInformation/ImportantInformation'),
  { ssr: false },
);
const ShortInfo = dynamic(() => import('pagesComponents/ApartmentPage/components/ShortInfo/ShortInfo'), {
  ssr: false,
});
const ResponsiveCardRequest = dynamic(
  () => import('pagesComponents/ApartmentPage/components/ResponsiveCardRequest/ResponsiveCardRequest'),
  {
    ssr: false,
  },
);
// TODO нужно декомпозировать это

type ApartmentPageProps = {
  apartmentId: string;
  keywordsSeo: string;
  titleSeo: string;
  descriptionSeo: string;
  apartmentAdSearchId: string;
};

const ApartmentPage: FC<ApartmentPageProps> = ({ apartmentId, titleSeo, descriptionSeo, apartmentAdSearchId }) => {
  const [isPaused, setIsPaused] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const [typeRent, setTypeRent] = useState(ApartmentRentPeriodType.ShortTerm);
  const [currentContractRequest, setCurrentContractRequest] = useState(RequestStatusEnum.INIT);

  const { close, isOpened, open } = useToggle();
  const { t } = useTranslation('apartmentPage', { keyPrefix: 'page' });
  const router = useRouter();
  const { getIsBreakpoint } = useClientSize();
  const { isOpened: isOpenFullMapModal, open: openFullMapModal, close: closeFullMapModal } = useToggle();
  const token = getCookie(CookieKeys.TOKEN);

  const [getLightMe, { data: meData }] = useGetLightMeLazyQuery();

  const { data: dataShort, loading } = useGetShortTermRentByApId({
    variables: {
      id: { id: apartmentId },
    },
    fetchPolicy: 'cache-and-network',
  });

  const scrollToMap = () => {
    mapRef?.current?.scrollIntoView({ block: 'center', inline: 'center', behavior: 'smooth' });
  };

  const { data: dataLong } = useGetLongTermRentByApId({
    variables: {
      id: { id: apartmentId },
    },
    fetchPolicy: 'cache-and-network',
  });
  const checkApartmentStatus = (status: ApartmentAdStatusType[] | undefined) => {
    const isApartmentStatusOnPaused = status && status?.[0] === ApartmentAdStatusType.Paused;
    if (isApartmentStatusOnPaused) {
      setIsPaused(true);
    }
  };

  const showRequestStatus = (contractRequests?: ContractRequestStatus) => {
    const isCompleted = contractStatus === ContractStatus.Completed || contractStatus === ContractStatus.Concluded;
    const isCreated = contractRequests === ContractRequestStatus.Created;
    const isAcceptedAndNotCompleted = contractRequests === ContractRequestStatus.Accepted && !isCompleted;

    switch (true) {
      case isPaused: {
        return setCurrentContractRequest(RequestStatusEnum.PAUSED);
      }
      case isCreated: {
        return setCurrentContractRequest(RequestStatusEnum.SENDED);
      }
      case isAcceptedAndNotCompleted: {
        return setCurrentContractRequest(RequestStatusEnum.APPROVED);
      }
      default: {
        return setCurrentContractRequest(RequestStatusEnum.INIT);
      }
    }
  };

  const type = dataShort?.rentAd__find_shortTermAdByApartmentId?.data
    ? ApartmentRentPeriodType.ShortTerm
    : ApartmentRentPeriodType.LongTerm;
  const typeRentApartment =
    dataShort?.rentAd__find_shortTermAdByApartmentId?.data ||
    dataLong?.rentAd__find_longTermAdByApId?.data ||
    undefined;
  const typeRentPeriod = typeRentApartment?.apartmentAd.rentPeriodType;
  const averageResponseOnRequest =
    dataShort?.rentAd__find_shortTermAdByApartmentId?.averageResponseOnRequest ||
    dataLong?.rentAd__find_longTermAdByApId?.averageResponseOnRequest ||
    undefined;

  const lockedDates = dataShort?.rentAd__find_shortTermAdByApartmentId?.data?.lockedDates || [];

  const apartment = typeRentApartment?.apartmentAd;
  const apartmentAdId = typeRentApartment?.apartmentAdId;
  const landlord = typeRentApartment?.apartmentAd.landlord;
  const landlordId = typeRentApartment?.apartmentAd.landlord.id;
  const arrivalTime = dataShort ? dataShort?.rentAd__find_shortTermAdByApartmentId?.data.arrivalTime : '';
  const departureTime = dataShort ? dataShort?.rentAd__find_shortTermAdByApartmentId?.data.departureTime : '';
  const cancellationPolicy = dataShort
    ? dataShort?.rentAd__find_shortTermAdByApartmentId?.data?.cancellationPolicy
    : undefined;
  const isApproved = typeRentApartment?.isApproved;
  const status = typeRentApartment?.status;
  const cost = typeRentApartment?.cost || '';
  const isInstantBooking =
    dataShort?.rentAd__find_shortTermAdByApartmentId?.data?.rentBookingType === ShortTermRentBookingType.Instant;

  const region = apartment?.address?.region ? `${apartment?.address?.region}, ` : '';
  const city = apartment?.address?.city ? `${apartment?.address?.city}, ` : '';
  const street = apartment?.address?.street ? `${apartment?.address?.street}, ` : '';
  const houseNumber = apartment?.address?.houseNumber ? `${apartment?.address?.houseNumber}` : '';
  const address = `${region}${city}${street}${houseNumber}`;

  const title = apartment?.description?.name || '';
  const photos = apartment ? apartment?.photos.map((photo) => photo.fileKey) : [];
  const rules = apartment?.rules;

  const name = landlord?.firstName || '';
  const avatar = landlord?.avatarKey || undefined;
  const isIdentityApproved = landlord?.isIdentityApproved;
  const landlordCreateAd = landlord?.createdAt;
  const isPhoneApproved = landlord?.isPhoneApproved;
  const coords = {
    lat: apartment?.address?.lat!,
    lng: apartment?.address?.lng!,
  };

  const numberOfRooms = apartment?.details?.numberOfRooms;
  const description = apartment?.description || undefined;
  const characteristics = apartment?.characteristics || undefined;
  const apartmentType = apartment?.apartmentType;
  const apartmentCategory = apartment?.apartmentCategory;
  const apartmentRentPeriodTypeFromQuery = type;
  const contractRequestsStatus = apartment?.contractRequests?.find(
    ({ apartmentRentPeriodType }) => apartmentRentPeriodType === apartmentRentPeriodTypeFromQuery,
  )?.status;
  const contractStatus = apartment?.contractRequests?.[0].contract?.status;

  const isShortTermType = typeRent === ApartmentRentPeriodType.ShortTerm;
  const isWidthMd = getIsBreakpoint('md');
  const isWidthS = getIsBreakpoint('s');

  const { days, hours, minutes, seconds, milliseconds } = averageResponseOnRequest || {};

  const createMiddleRequest = useMemo(
    () => () => {
      const isResponseMissing = !days && !hours && !minutes && !seconds && !milliseconds;
      const isResponseLessThanAMinute = !days && !hours && !minutes && (seconds || milliseconds);
      if (isResponseMissing) return;
      if (isResponseLessThanAMinute) return t('averageResponseOnRequest');
      if (days) return `${t('middleRequest')} ${days} ${handleWordsDeclination(days, daysPlural)}`;
      if (hours) return `${t('middleRequest')} ${hours} ${handleWordsDeclination(hours, hoursPlural)}`;
      if (minutes) return `${t('middleRequest')} ${minutes} ${handleWordsDeclination(minutes, minutesPlural)}`;
    },
    [t, averageResponseOnRequest],
  );

  useEffect(() => {
    setTypeRent(type as ApartmentRentPeriodType);
    checkApartmentStatus(status);
  }, [status, router]);

  useEffect(() => {
    showRequestStatus(contractRequestsStatus);
  }, [dataShort, dataLong]);

  useEffect(() => {
    if (token) {
      getLightMe();
    }
  }, [token]);

  const currentUserId = meData?.user__me.id;

  const landlordIsCurrentUser = landlordId === currentUserId;

  return (
    <>
      {loading || !apartmentId ? (
        <ApartmentPageSkeleton />
      ) : (
        <StyledMainLayout
          headTitle={titleSeo || t('headTitle')}
          childrenForHeader={
            <HeaderApartment
              title={title}
              address={address}
              onScroll={scrollToMap}
              isPaused={isPaused}
              apartmentAdId={typeRentApartment?.apartmentAd.id || ''}
              rentType={typeRentPeriod}
            />
          }
          filters={<Filters />}>
          <Helmet>
            <title>{titleSeo || `Аренда - ${apartmentAdSearchId} - ${title}`}</title>
            <meta
              name="title"
              content={titleSeo || `Аренда - ${apartmentAdSearchId} - ${title}`}
              data-react-helmet="true"
            />
            <meta
              name="description"
              content={descriptionSeo || `Arent - обьявление ${apartmentAdSearchId} => ${description?.description}`}
              data-react-helmet="true"
            />
          </Helmet>
          <Content>
            {isWidthS ? (
              <>
                <Title onScroll={scrollToMap} title={title} address={address} isPaused={isPaused} />
                <SliderContainer onClick={open}>
                  <Slider images={photos} />
                </SliderContainer>
              </>
            ) : (
              <SliderApartment images={photos} open={open} />
            )}
            <Container>
              <MainColumn>
                <Owner
                  name={name}
                  date={landlordCreateAd}
                  isPhoneApproved={isPhoneApproved}
                  isIdentityApproved={isIdentityApproved}
                  avatar={avatar!}
                />
                {isWidthMd && (
                  <ResponsiveContainer>
                    {isApproved && <OwnershipConfirmed />}
                    {isInstantBooking && <InstantBooking />}
                  </ResponsiveContainer>
                )}
                <Description description={description} />
                <ShortInfo
                  typeofHousing={apartmentType}
                  countRooms={numberOfRooms}
                  apartmentCategory={apartmentCategory}
                  characteristics={characteristics}
                />
                <ImportantInformation
                  rules={rules}
                  arrivalTime={arrivalTime}
                  cancellationPolicy={cancellationPolicy}
                  departureTime={departureTime}
                />
                <MapContainer ref={mapRef}>
                  <AppText font="title_22_18_bold" variant={TextVariants.SECONDARY}>
                    {t('location')}
                  </AppText>
                  {coords.lat && coords.lng && (
                    <Map
                      onOpenFullScreenMap={openFullMapModal}
                      currentMarker={coords}
                      center={coords}
                      withResizeButton
                    />
                  )}
                </MapContainer>
              </MainColumn>
              {!isWidthMd && (
                <AsideColumn>
                  {isShortTermType ? (
                    <StickyContainer $isPaused={isPaused} $isShortRent={isShortTermType}>
                      <BookingComponent
                        middleRequest={createMiddleRequest()}
                        cost={Number(cost)}
                        lockedDates={lockedDates}
                        period="perDay"
                        isPaused={isPaused}
                        landlordIsCurrentUser={landlordIsCurrentUser}
                      />
                      <InstantWrapper>
                        {isInstantBooking && <InstantBooking />}
                        {isApproved && (
                          <Wrapper>
                            <OwnershipConfirmed />
                          </Wrapper>
                        )}
                      </InstantWrapper>
                    </StickyContainer>
                  ) : (
                    <StickyContainer $isPaused={isPaused} $isShortRent={isShortTermType}>
                      <CardRequest
                        middleRequest={createMiddleRequest()}
                        cost={Number(cost)}
                        rules={rules!}
                        isMonthPeriod
                        cardStatus={currentContractRequest}
                        id={apartmentAdId}
                      />
                      {isApproved && (
                        <Wrapper>
                          <OwnershipConfirmed />
                        </Wrapper>
                      )}
                    </StickyContainer>
                  )}
                </AsideColumn>
              )}
            </Container>
          </Content>
          {isOpened && <FullViewSlider images={photos} close={close} />}
          {isWidthMd && (
            <ResponsiveCardRequestContainer>
              <ResponsiveCardRequest
                cost={Number(cost)}
                cardStatus={currentContractRequest}
                id={apartmentAdId}
                isShortTermType={isShortTermType}
                isPaused={isPaused}
                landlordIsCurrentUser={landlordIsCurrentUser}
              />
            </ResponsiveCardRequestContainer>
          )}
        </StyledMainLayout>
      )}
      <FullScreenMapModal
        withBackOption
        title="Расположение"
        isVisible={isOpenFullMapModal}
        onClose={closeFullMapModal}
        onGoBack={closeFullMapModal}
        isBottomMobile={false}>
        <FullScreenMapModalContainer>
          <FullScreenMapModalHeader>
            <BackButton onClick={closeFullMapModal}>
              <ArrowLeft />
            </BackButton>
            <AppText variant={TextVariants.SECONDARY} font="body_24_16_medium">
              Расположение
            </AppText>
          </FullScreenMapModalHeader>
        </FullScreenMapModalContainer>
        <Map onOpenFullScreenMap={openFullMapModal} isFullWidth currentMarker={coords} center={coords} />
      </FullScreenMapModal>
    </>
  );
};

export default ApartmentPage;

const FullScreenMapModal = styled(BaseModal)`
  max-width: 100%;
  height: 100%;
  border-radius: 0;
  overflow: unset;
  padding: 0 !important;

  .modal-container {
    padding: 0;
  }

  .modal-header {
    display: none;
  }
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-top: 18px;
`;

const ResponsiveCardRequestContainer = styled.div`
  position: sticky;
  bottom: 0;
`;

const ResponsiveContainer = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 16px;

  @media (max-width: ${BreakpointsEnum.sm}px) {
    flex-direction: column;
  }
`;
const StyledMainLayout = styled(MainLayout)`
  @media (max-width: ${BreakpointsEnum.lgm}px) {
    padding: 16px 24px;
  }
  @media (max-width: ${BreakpointsEnum.md}px) {
    padding: 16px 72px;
  }
  @media (max-width: ${BreakpointsEnum.sm}px) {
    padding: 0 48px;
  }
  @media (max-width: ${BreakpointsEnum.s}px) {
    padding: 0 16px;
  }
`;

type StickyContainerProps = {
  $isPaused: boolean;
  $isShortRent: boolean;
};

const StickyContainer = styled.div<StickyContainerProps>`
  position: sticky;
  top: 192px;

  ${({ $isPaused, $isShortRent }) =>
    $isPaused &&
    $isShortRent &&
    css`
      top: 248px;
    `}
`;
const InstantWrapper = styled.div`
  margin-top: 32px;
`;
const Wrapper = styled.div`
  margin-top: 16px;
  max-width: 400px;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;
const AsideColumn = styled.div`
  margin-left: 48px;

  @media (max-width: ${BreakpointsEnum.lg}px) {
    margin-left: 24px;
  }
`;
const MainColumn = styled.div`
  width: 848px;
  flex: 1;

  @media (max-width: ${BreakpointsEnum.lg}px) {
    width: 630px;
  }
  @media (max-width: ${BreakpointsEnum.lgm}px) {
    width: 500px;
  }
`;

const FullScreenMapModalContainer = styled.div``;

const FullScreenMapModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 16px;
  position: relative;
`;

const BackButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  height: 20px;
  left: 16px;
  top: 20px;
  margin-right: 16px;
  cursor: pointer;
  position: absolute;
`;

const Content = styled.div``;

const MapContainer = styled.div`
  border-top: 1px solid ${({ theme: { colors } }) => colors.greyScale[30]};
  padding-top: 32px;
`;
