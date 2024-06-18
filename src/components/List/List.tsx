import { ApartmentAdViewModel, ApartmentRentPeriodType, ApartmentType } from '__generated__/types';
import { ResponsiveCardInSearch } from 'components/ResponsiveCardInSearch';
import { SkeletonApartmentsList } from 'components/SkeletonApartmentsList';
import { useClientSize } from 'hooks';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import styled from 'styled-components';
import { BreakpointsEnum, TextVariants } from 'types';
import { AppText } from 'ui';

import NotFoundImgSrc from '../../../public/img/EmptyState.png';
import { AdsCard } from './components';

interface ResponsiveCardInSearchProps extends Partial<Omit<ApartmentAdViewModel, 'address'>> {
  rentType?: string;
  guestsNum?: string;
  id: string;
  pictureSrc: string;
  numberOfPets?: string;
  numberOfGuests?: string;
  numberOfChilds?: string;
  apartmentType?: ApartmentType;
  address: string;
  title: string;
  price: string;
  type?: ApartmentRentPeriodType;
}

type ListProps = {
  ads: Array<ResponsiveCardInSearchProps>;
  totalItems: number;
  page: number;
  onSetFocusOnCard: (id: string) => void;
  onDeleteFocusOnCard: (id: string) => void;
  onSetPage: () => void;
  totalPages: number;
  loadingForList?: boolean;
};

const List: FC<ListProps> = ({ ads, onSetFocusOnCard, onDeleteFocusOnCard, loadingForList, onSetPage }) => {
  const { t } = useTranslation('ui', { keyPrefix: 'list' });
  const { getIsBreakpoint } = useClientSize();

  const isCards = ads?.length > 0;
  const isWidthLgm = getIsBreakpoint('lgm');

  return (
    <Root>
      {isCards && (
        <Container>
          {ads.map((item, index) => (
            <InnerContainer key={index}>
              {isWidthLgm ? (
                <ResponsiveCardInSearch
                  onSetFocusOnCard={onSetFocusOnCard}
                  onDeleteFocusOnCard={onDeleteFocusOnCard}
                  {...item}
                />
              ) : (
                <AdsCard
                  onSetFocusOnCard={onSetFocusOnCard}
                  onDeleteFocusOnCard={onDeleteFocusOnCard}
                  isLast={index === ads.length - 1}
                  newLimit={onSetPage}
                  {...item}
                />
              )}
            </InnerContainer>
          ))}
        </Container>
      )}
      {loadingForList ? (
        <SkeletonApartmentsList />
      ) : (
        !isCards && (
          <ContainerWithoutCards>
            <ImageContainer>
              <Image src={NotFoundImgSrc} width={340} height={278} alt="Not found" />
            </ImageContainer>
            <WithoutCardTitle variant={TextVariants.SECONDARY} font="title_32_24_medium">
              {t('notFoundTitle')}
            </WithoutCardTitle>
            <SubtitleText font="body_20_14_regular">{t('notFoundSubtitle')}</SubtitleText>
          </ContainerWithoutCards>
        )
      )}

      {/* {isCards && (
        <PaginationContainer>
          <Pagination page={page} pageCount={totalPages} setPage={onSetPage} showRange={showRange} />
        </PaginationContainer>
      )} */}
    </Root>
  );
};

export default List;

const Root = styled.div`
  width: 100%;

  @media (max-width: ${BreakpointsEnum.sm}px) {
    z-index: 323;
  }

  @media (max-width: ${BreakpointsEnum.md}px) {
    width: auto;
  }

  @media (min-width: ${BreakpointsEnum.sm}px) {
    margin-top: 0;
  }
`;

const WithoutCardTitle = styled(AppText)`
  text-align: center;
  max-width: 340px;
`;

const SubtitleText = styled(AppText)`
  margin-top: 16px;
  text-align: center;
  max-width: 250px;
  color: ${({ theme: { colors } }) => colors.greyScale[60]};
`;
const ContainerWithoutCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 0 15px;

  @media (min-width: ${BreakpointsEnum.sm}px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
const InnerContainer = styled.div`
  margin-top: 16px;
  cursor: pointer;

  @media (min-width: ${BreakpointsEnum.md}px) {
    margin-top: 8px;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 24px;
  grid-column-gap: 24px;
  align-items: center;
  margin-bottom: 24px;
  margin-top: 24px;
  width: 100%;
  overflow: hidden;

  @media (max-width: ${BreakpointsEnum.lgm}px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${BreakpointsEnum.md}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${BreakpointsEnum.sm}px) {
    grid-template-columns: 1fr;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 278px;
  width: 100%;
  overflow: hidden;
  margin-top: 50px;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    margin-top: 10px;
  }
`;
