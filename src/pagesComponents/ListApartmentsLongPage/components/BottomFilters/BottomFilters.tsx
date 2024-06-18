import { useFilters, useToggle, useWindowScroll } from 'hooks';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { OptionType } from 'types';
import FiltersButton from 'ui/FiltersButton/FiltersButton';
import { removeQueryParam } from 'utils/urlHelpers';

const FilterModal = dynamic(() => import('../ModalFilter/ModalFilter'));

// TODO разбить на более мелкие компоненты форму фильтров

type BottomFiltersProps = {
  handleSetPage: (page: number) => void;
};

const BottomFilters: FC<BottomFiltersProps> = ({ handleSetPage }) => {
  const { t } = useTranslation('listApartmentsPage', { keyPrefix: 'bottomFilters' });
  const router = useRouter();
  const { scrollY } = useWindowScroll();

  const { count } = useFilters();

  const { isOpened: isOpenedModal, open: openModal, close: closeModal } = useToggle(false);

  const openModalFromQuery = () => {
    const { query } = router;
    if (query.isShowModal) {
      openModal();
      removeQueryParam('isShowModal', router);
    }
  };

  useEffect(() => {
    openModalFromQuery();
  }, [router.query]);

  const isScroll = scrollY > 0;

  return (
    <Root $isScroll={isScroll}>
      <FiltersButtonContainer onClick={openModal}>
        <FiltersButton filtersCount={count} />
      </FiltersButtonContainer>
      <FilterModal onClose={closeModal} isOpen={isOpenedModal} title={t('filters')} handleSetPage={handleSetPage} />
    </Root>
  );
};

export default BottomFilters;

export type InputDataFiltersLong = {
  dateStart: string;
  dateEnd: string;
  typeHousing: Array<OptionType> | OptionType;
  price: string;
  numberOfRooms: Array<string>;
  rooms: OptionType;
  location: OptionType;
  numberOfGuests: number;
  numberOfChilds: number;
  numberOfPets: number;
};

const FiltersButtonContainer = styled.div``;

const Root = styled.div<{ $isScroll: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: padding 0.5s;
`;
