import { MainLayout } from 'layouts';
import { useRouter } from 'next/router';
import { FC } from 'react';
import styled from 'styled-components';
import { BreakpointsEnum, TextVariants } from 'types';

import { ArrowLeft } from '../../../public/svg/components';
import { BASE_COORDINATE } from '../../components/Map/Map';
import { usegetActiveContractById } from '../../graphql/queries/Contracts/__generated__/getActiveContractById.query';
import { useClientSize, useToggle } from '../../hooks';
import { AppText, BaseModal } from '../../ui';
import ActiveRentSkeleton from './ActiveRentSkeleton';
import { Header, RentInfo } from './components';
import { Map } from './components/Map';

const ActiveRent: FC = () => {
  const { query } = useRouter();
  const { id } = query;

  const contractId = String(id);

  const { getIsBreakpoint } = useClientSize();
  const isWidthMd = getIsBreakpoint('md');

  const { data: contract, loading } = usegetActiveContractById({
    variables: {
      input: {
        id: contractId,
      },
    },
  });
  const coords = {
    lat: contract?.contract__tenant_find?.apartmentAd?.address?.lat || BASE_COORDINATE.lat,
    lng: contract?.contract__tenant_find?.apartmentAd?.address?.lng || BASE_COORDINATE.lng,
  };

  const { isOpened: isOpenFullMapModal, open: openFullMapModal, close: closeFullMapModal } = useToggle();

  const baseApartmentAdData = contract?.contract__tenant_find?.baseApartmentAdData;

  const title = baseApartmentAdData?.title;

  return (
    <StyledMainLayout headTitle={title || ''} childrenForHeader={<Header title={title || ''} />}>
      {loading ? (
        <ActiveRentSkeleton />
      ) : (
        <Content>
          <RentInfo onOpenMapModal={openFullMapModal} />
          {!isWidthMd && <Map currentMarker={coords} center={coords} onOpenFullScreenMap={openFullMapModal} />}
          <FullScreenMapModal
            withBackOption
            title="Расположение"
            isVisible={isOpenFullMapModal}
            onClose={closeFullMapModal}
            onGoBack={closeFullMapModal}
            isBottomMobile={false}>
            <div>
              <FullScreenMapModalHeader>
                <BackButton onClick={closeFullMapModal}>
                  <ArrowLeft />
                </BackButton>
                <AppText variant={TextVariants.SECONDARY} font="body_24_16_medium">
                  Расположение
                </AppText>
              </FullScreenMapModalHeader>
            </div>
            <Map onOpenFullScreenMap={openFullMapModal} isFullWidth currentMarker={coords} center={coords} />
          </FullScreenMapModal>
        </Content>
      )}
    </StyledMainLayout>
  );
};

const StyledMainLayout = styled(MainLayout)`
  overflow: hidden;

  @media (min-width: ${BreakpointsEnum.md + 1}px) {
    && {
      padding-right: 0;
    }
  }

  @media (max-width: ${BreakpointsEnum.s}px) {
    padding-bottom: 80px;
  }
`;

const Content = styled.div`
  display: flex;
  gap: 47px;
  justify-content: center;
  width: 100%;
`;

const FullScreenMapModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 16px;
  position: relative;
`;

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

export default ActiveRent;
