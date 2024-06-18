import { Routes } from 'constains';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import { Control, UseFormGetValues } from 'react-hook-form';
import styled, { css } from 'styled-components';
import { Button } from 'ui/Button';
import { NumberInput } from 'ui/NumberInput';
import { SignedInput } from 'ui/SignedInput';
import { pluralHandler } from 'utils/textHelpers';

interface InputData {
  numberOfGuests: number;
  numberOfChilds: number;
  numberOfPets: number;

  location: string;
  dateStart: string;
  dateEnd: string;
  typeHousing: string | string[];
  price: string;
  rooms: string;
}

interface GuestFieldInModalProps {
  control: Control<any>;
  getValues: UseFormGetValues<InputData | any>;
  onClose: () => void;
}

const GuestFieldInModal: FC<GuestFieldInModalProps> = ({ control, getValues, onClose }) => {
  const { t } = useTranslation('ui', { keyPrefix: 'forms' });
  const router = useRouter();

  const { query } = router;

  const values = [+query.guests!, +query.kids!, +query.pets!];

  const single = [t('singleGuest'), t('singleChild'), t('singlePet')];
  const plural = [t('pluralGuests'), t('pluralChilds'), t('pluralPets')];

  const pluralValues = pluralHandler(values, plural, single);

  const applyFilters = async () => {
    const { numberOfGuests, numberOfChilds, numberOfPets } = getValues();

    const city = router.pathname.split('/')[2];

    await router.push(
      {
        pathname:
          router.pathname === Routes.listApartmentsLong
            ? `${Routes.listApartmentsLong}/${city}`
            : `${Routes.listApartmentsShort}/${city}`,
        query: {
          ...router.query,
          guests: !numberOfGuests && numberOfGuests !== 0 ? router.query.guests : numberOfGuests,
          kids: !numberOfChilds && numberOfChilds !== 0 ? router.query.kids : numberOfChilds,
          pets: !numberOfPets && numberOfPets !== 0 ? router.query.pets : numberOfPets,
        },
      },
      undefined,
      { shallow: true },
    );
    onClose();
  };

  return (
    <ModalContainer>
      <div>
        <StyledGuestsInput
          title=""
          value={pluralValues}
          onClick={(e) => {
            e.preventDefault();
          }}
        />
        <Container>
          <ModalInputWithBorder
            title={t('titleGuest')}
            name="numberOfGuests"
            minValue={1}
            initialValue={Number(router?.query.guests!) || 1}
            control={control}
          />
          <ModalInputWithBorder
            title={t('titleChilds')}
            name="numberOfChilds"
            initialValue={Number(router?.query.kids!) || 0}
            control={control}
          />
          <ModalInput
            title={t('titlePets')}
            name="numberOfPets"
            initialValue={Number(router?.query.pets!) || 0}
            control={control}
          />
        </Container>
      </div>
      <Button type="submit" onClick={applyFilters} text={t('showVariants')} isFullWight />
    </ModalContainer>
  );
};

export default GuestFieldInModal;

const Container = styled.div`
  margin-top: 17px;
  width: 100%;
`;

const StyledGuestsInput = styled(SignedInput)`
  width: calc(100% - 32px);
  margin-left: 32px;
  button {
    background: ${({ theme: { colors } }) => colors.greyScale[10]} !important;
    padding: 9px 16px 11px !important;
  }
`;

const ModalInputWithBorder = styled(NumberInput)`
  ${({ theme }) => css`
    background-color: ${theme.colors.greyScale[0]};
    width: 100%;
    padding-left: 0;
    padding-right: 0;
    border-bottom: 1px solid ${theme.colors.greyScale[30]};
  `}
`;

const ModalInput = styled(NumberInput)`
  ${({ theme }) => css`
    background-color: ${theme.colors.greyScale[0]};
    width: 100%;
    padding-left: 0;
    padding-right: 0;
  `}
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: calc(100% - 88px);
`;
