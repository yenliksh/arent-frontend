import { useSkeletonLoading } from 'hooks';
import { MainLayout } from 'layouts';
import { useTranslation } from 'next-i18next';
import styled from 'styled-components';
import { Skeleton } from 'ui';

const ApartmentPageSkeleton = () => {
  const { t } = useTranslation('apartmentPage', { keyPrefix: 'skeleton' });
  useSkeletonLoading();

  return (
    <MainLayout headTitle={t('headTitle')}>
      <Root>
        <LeftColumn>
          <HighRow>
            <Skeleton width={55} height={12} borderRadius={18} isSecondary />
            <Skeleton width={300} height={12} borderRadius={18} isSecondary />
            <Skeleton width={277} height={12} borderRadius={18} isSecondary />
          </HighRow>
          <Skeleton width={624} height={23} borderRadius={32} isSecondary />
          <StyledSkeleton width={206} height={14} borderRadius={20} isSecondary />
          <Skeleton width={848} height={389} borderRadius={22} isSecondary />
          <InformationContainer>
            <Skeleton width={64} height={64} borderRadius={32} isSecondary />
            <LeftContainer>
              <LeftContainerSkeleton width={354} height={16} borderRadius={22} isSecondary />
              <LeftContainerRow>
                <Skeleton width={71} height={12} borderRadius={18} isSecondary />
                <Skeleton width={38} height={12} borderRadius={18} isSecondary />
                <Skeleton width={45} height={12} borderRadius={18} isSecondary />
                <Skeleton width={58} height={12} borderRadius={18} isSecondary />
              </LeftContainerRow>
            </LeftContainer>
            <RightContainer>
              <InnerContainer>
                <Skeleton width={169} height={12} borderRadius={18} isSecondary />
                <Skeleton width={142} height={12} borderRadius={18} isSecondary />
              </InnerContainer>
            </RightContainer>
          </InformationContainer>
        </LeftColumn>
        <RightColumn>
          <HighSkeleton width={32} height={32} borderRadius={8} isSecondary />
          <SliderRow>
            <Skeleton width={190} height={190} borderRadius={9} isSecondary />
            <Skeleton width={190} height={190} borderRadius={9} isSecondary />
            <Skeleton width={190} height={190} borderRadius={9} isSecondary />
            <Skeleton width={190} height={190} borderRadius={9} isSecondary />
          </SliderRow>
        </RightColumn>
      </Root>
    </MainLayout>
  );
};

export default ApartmentPageSkeleton;

const HighSkeleton = styled(Skeleton)`
  margin-top: 83px;
  margin-bottom: 68px;
`;
const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 48px;
  justify-content: center;
  gap: 24px;
`;
const RightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 257px;
`;
const LeftContainerRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 278px;
`;
const LeftContainerSkeleton = styled(Skeleton)`
  margin-bottom: 18px;
`;
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const InformationContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 50px;
  margin-top: 20px;
`;
const SliderRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  gap: 16px;
`;
const StyledSkeleton = styled(Skeleton)`
  margin-top: 22px;
  margin-bottom: 50px;
`;
const HighRow = styled.div`
  width: 672px;
  margin-top: 26px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;
const RightColumn = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  align-items: end;
`;
const LeftColumn = styled.div`
  width: 848px;
`;
const Root = styled.div`
  display: flex;
`;
