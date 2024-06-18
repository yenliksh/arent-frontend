import { Routes } from 'constains';
import { useClientSize } from 'hooks';
import { AdvertLayout } from 'layouts';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FC, useEffect, useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { BreakpointsEnum, TextVariants } from 'types';
import { StepProps } from 'types/advert';
import { AppText, BaseInput, Button, Selector, Textarea } from 'ui';
import { getCookie } from 'utils';

import { useSetRentDescription } from '../../graphql/mutations/Advert/__generated__/setHouseDescription.mutation';
import { useGetSixthStep } from '../../graphql/queries/Advert/__generated__/getSixthStep.query';
import { ButtonVariant } from '../../ui/Button/Button';

enum SelectorsEnum {
  FOR_FAMILY = 'forFamily',
  FREE_PARKING = 'freeParking',
  QUITE = 'quite',
  REMOTE_VIEW = 'remoteView',
  SELF_IN_CHECK_IN = 'selfCheckIn',
  WORK_SPACE = 'workSpace',
}

type FormValues = {
  description: string;
  forFamily: boolean;
  freeParking: boolean;
  name: string;
  quite: boolean;
  remoteView: boolean;
  selfCheckIn: boolean;
  workSpace: boolean;
};

const MAX_LENGTH_DESCRIPTION = 499;

const DescriptionHouse: FC<StepProps> = ({ step }) => {
  const { t } = useTranslation('descriptionHousePage');
  const advertId = getCookie('advertId');
  const { getIsBreakpoint } = useClientSize();
  const { data } = useGetSixthStep({ variables: { input: { id: advertId! } } });
  const [fetchSetHouseDescription] = useSetRentDescription();
  const [isLoading, setIsLoading] = useState(false);

  const selectorsState = useMemo(
    () => [
      { title: t('selectors.remoteView'), value: SelectorsEnum.REMOTE_VIEW },
      { title: t('selectors.selfCheckIn'), value: SelectorsEnum.SELF_IN_CHECK_IN },
      { title: t('selectors.freeParking'), value: SelectorsEnum.FREE_PARKING },
      { title: t('selectors.workSpace'), value: SelectorsEnum.WORK_SPACE },
      { title: t('selectors.quite'), value: SelectorsEnum.QUITE },
      { title: t('selectors.forFamily'), value: SelectorsEnum.FOR_FAMILY },
    ],
    [t],
  );

  const router = useRouter();

  const {
    control,
    handleSubmit,
    reset,
    getValues,
    formState: { isValid, isDirty },
  } = useForm<FormValues>({
    defaultValues: {
      description: '',
      quite: false,
      forFamily: false,
      workSpace: false,
      freeParking: false,
      remoteView: false,
      selfCheckIn: false,
      name: '',
    },
    mode: 'onChange',
  });

  const setInDraft = async () => {
    if (isDirty && isValid) {
      await setDescription();
    }
  };

  const setDescription = async () => {
    const data = getValues();
    const input = {
      ...data,
      id: advertId!,
    };
    if (isDirty) {
      await fetchSetHouseDescription({
        variables: {
          input: {
            ...input,
          },
        },
      });
    }
  };

  const onSubmit = async () => {
    setIsLoading(true);
    await setDescription();
    setIsLoading(false);
    await router.push(Routes.adInformationHouse);
  };

  useEffect(() => {
    const defaultValues = data?.rentAd__myRentAd.description;
    reset({
      forFamily: defaultValues?.forFamily ? defaultValues?.forFamily : undefined,
      quite: defaultValues?.quite ? defaultValues?.quite : undefined,
      workSpace: defaultValues?.workSpace ? defaultValues?.workSpace : undefined,
      freeParking: defaultValues?.freeParking ? defaultValues?.freeParking : undefined,
      selfCheckIn: defaultValues?.selfCheckIn ? defaultValues?.selfCheckIn : undefined,
      remoteView: defaultValues?.remoteView ? defaultValues?.remoteView : undefined,
      description: defaultValues?.description ? defaultValues?.description : undefined,
      name: defaultValues?.name,
    });
  }, [data]);

  const isWidthSm = getIsBreakpoint('sm');

  return (
    <AdvertLayout step={step} onSaveDraft={setInDraft}>
      <Root onSubmit={handleSubmit(onSubmit)}>
        {!isWidthSm && (
          <Title variant={TextVariants.SECONDARY} font="title_36_26_bold">
            {t('title')}
          </Title>
        )}
        <Controller
          name="name"
          rules={{ required: true }}
          control={control}
          render={({ field }) => <StyledBaseInput placeholder={t('name.placeholder')} isLong {...field} />}
        />

        <SelectorsContainer>
          {selectorsState.map((selector, index) => (
            <Controller
              key={index}
              name={selector.value}
              control={control}
              render={({ field: { onChange, value } }) => (
                <StyledSelector
                  name={selector.value}
                  key={index}
                  text={selector.title}
                  onChange={() => onChange(value ? false : !!selector.value)}
                  checked={value}
                />
              )}
            />
          ))}
        </SelectorsContainer>
        <Controller
          name="description"
          control={control}
          rules={{
            required: true,
            validate: (value) => {
              if (value?.length > MAX_LENGTH_DESCRIPTION) {
                return 'isLong';
              }
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <StyledTextarea
              error={error}
              hasCounter
              maxRows={9}
              maxLength={500}
              placeholder={t('description.placeholder')}
              {...field}
            />
          )}
        />
        <Footer>
          <StyledBackButton
            type="button"
            onClick={() => {
              router.push(Routes.adCreateHouseMedia);
            }}
            isFullWight
            text="Назад"
            variant={ButtonVariant.SECONDARY}
          />
          <StyledButton
            type="submit"
            isLoading={isLoading}
            isFullWight
            disabled={(!isDirty && !data) || !isValid}
            text="Продолжить"
            variant={ButtonVariant.VIOLET}
          />
        </Footer>
      </Root>
    </AdvertLayout>
  );
};

export default DescriptionHouse;

const Root = styled.form`
  padding: 40px;
  max-width: 836px;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    padding: 24px 16px 16px;
  }
`;

const Title = styled(AppText)`
  margin-bottom: 32px;
`;

const StyledBaseInput = styled(BaseInput)`
  margin-bottom: 24px;
`;

const StyledTextarea = styled(Textarea)`
  margin-bottom: 32px;
  height: 242px;
  overflow: hidden;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    height: 280px;
    margin-bottom: 128px;
  }
`;

const StyledBackButton = styled(Button)`
  width: max-content;
  background-color: #fff;
  ${({ theme: { typography } }) => typography.body_20_14_medium};

  @media (max-width: ${BreakpointsEnum.sm}px) {
    max-width: 100%;
  }
`;

const Footer = styled.div`
  padding: 31px 73px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  z-index: 1000;

  @media (max-width: ${BreakpointsEnum.sm}px) {
    flex-direction: column;
    align-items: center;
    padding: 16px 12px;
  }
`;

const StyledButton = styled(Button)`
  width: 100%;
  max-width: 283px;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    width: 167px;
  }
  @media (max-width: ${BreakpointsEnum.xxs}px) {
    width: 140.5px;
  }
`;

const SelectorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    flex-wrap: nowrap;
    overflow-x: scroll;
    margin-right: -16px;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

const StyledSelector = styled(Selector)`
  min-width: unset;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    white-space: nowrap;
    padding: 12px 16px;
  }
`;
