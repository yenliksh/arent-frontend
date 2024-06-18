import { GenderType } from '__generated__/types';
import { useEditAvatar } from 'graphql/mutations/User/__generated__/editAvatar.mutation';
import { useEditPersonalInfo } from 'graphql/mutations/User/__generated__/editPersonalInfo';
import { useLoadFile } from 'hooks';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { FileCategory } from 'pagesComponents/HouseMedias/types';
import { ChangeEvent, FC, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import InputMask from 'react-input-mask-next';
import { dayjs, notify } from 'services';
import styled, { css } from 'styled-components';
import { ErrorText } from 'styles/components/input';
import { BreakpointsEnum, TextVariants } from 'types';
import { AppText, BaseInput, Button, CheckBox, RadioButton } from 'ui';
import { ButtonVariant } from 'ui/Button/Button';
import { parseFileKeyFromUrl } from 'utils';

import { Avatar, Camera, GalleryAdd, Trash } from '../../../../../../../public/svg/components';

type PersonalProps = {
  close: () => void;
  userId: string;
  avatar: string;
  firstName: string;
  lastName: string;
  middleName: string;
  birthDate: string;
  genderType: GenderType;
};
type DropDownProps = {
  avatar?: boolean;
};

const TEN_MB = 10485760;

const MIN_AGE = 17;
const MAX_AGE = 100;

const PersonalInfoForm: FC<PersonalProps> = ({
  close,
  userId,
  avatar,
  firstName,
  lastName,
  middleName,
  birthDate,
  genderType,
}) => {
  const [isOpenPhotoMenu, setIsOpenPhotoMenu] = useState(false);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<ArrayBuffer | null | string>(avatar);
  // eslint-disable-next-line no-unused-vars
  const [_, setIsRestLoading] = useState(false);
  const [isPatronymic, setIsPatronymic] = useState(true);
  const [fetchPersonalInfo] = useEditPersonalInfo();

  const { t } = useTranslation('profilePage', { keyPrefix: 'personalInformation' });
  const { register } = useForm();

  const [fetchEditAvatar] = useEditAvatar();

  const { load, deleteAttachment } = useLoadFile(FileCategory.AVATARS);

  const controller = new AbortController();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<InputData>({
    defaultValues: {
      firstName,
      lastName,
      middleName,
      birthDate,
      genderType,
    },
    mode: 'onBlur',
  });

  const loadFile = async (file: File, fileCategory: string, id: string, signal = {} as AbortSignal) => {
    try {
      setIsRestLoading(true);
      const res = await load(file, FileCategory.AVATARS, id, signal);
      await fetchEditAvatar({
        variables: {
          input: {
            avatar: parseFileKeyFromUrl(res.signedUrl!),
          },
        },
        onCompleted: () => notify(t('photoAdded')),
        onError: () => notify(t('somethingError')),
      });
    } catch (e) {
      notify(t('somethingError'));
    } finally {
      setIsRestLoading(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setAvatarUrl(fileReader.result);
    };
    if (e.target.files !== null && e.target.files[0]) {
      if (e.target.files[0].size > TEN_MB) {
        notify(t('limitSize'));
        return null;
      }
      if (!e.target.files[0].type.match('image/jpeg|image/png|image/jpg')) {
        notify(t('imageFormat'));
        return null;
      }
      const file = e.target.files[0];
      setAvatarFile(file);
      fileReader.readAsDataURL(file);
    }
    setIsOpenPhotoMenu(false);
  };

  const onDeleteClickHandler = async () => {
    deleteAttachment(avatar);
    await fetchEditAvatar({
      variables: {
        input: {
          avatar: null,
        },
      },
      onError: () => notify(t('somethingError')),
    });
    setAvatarFile(null);
    setAvatarUrl(null);
    setIsOpenPhotoMenu(false);
  };

  const openPhotoMenu = () => {
    setIsOpenPhotoMenu(true);
  };

  const closePhotoMenu = () => {
    setIsOpenPhotoMenu(false);
  };

  const handleFormatDate = (date: string) => {
    return dayjs(date, 'DD.MM.YYYY').format('YYYY-MM-DD');
  };

  const onSubmit = async (formData: InputData) => {
    if (avatarFile !== null) {
      await loadFile(avatarFile, FileCategory.AVATARS, userId, controller.signal);
    }
    await fetchPersonalInfo({
      variables: {
        input: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          middleName: !isPatronymic ? null : formData.middleName,
          gender: formData.genderType,
          birthdate: handleFormatDate(formData.birthDate),
        },
      },
      onCompleted: () => notify(t('fullNameChanged')),
      onError: () => notify(t('somethingError')),
    });
    close();
  };

  const arrayGenderType = [
    { title: t('male'), value: GenderType.Male },
    { title: t('female'), value: GenderType.Female },
  ];

  const togglePatronymic = () => {
    setIsPatronymic(!isPatronymic);
  };

  const validateDate = (date: string) => {
    const isValidDate = dayjs(date, 'DD.MM.YYYY', true).isValid();
    const data = dayjs(date, 'DD.MM.YYYY', true);

    if (!isValidDate) return t('birthdateErrorInvalid');

    if (dayjs().get('years') - data.get('years') < MIN_AGE) {
      return t('birthdateErrorAge');
    }
    if (dayjs().get('years') - data.get('years') > MAX_AGE) {
      return t('birthdateErrorInvalid');
    }
  };

  const showAvatar = avatarUrl && typeof avatarUrl === 'string' ? avatarUrl : avatar;
  return (
    <Root>
      <ContainerAvatar>
        {avatarUrl || avatar ? (
          <NewAvatar layout="fill" src={showAvatar} alt="avatar" />
        ) : (
          <Avatar width={24} height={24} />
        )}
        {isOpenPhotoMenu ? (
          <ButtonAddAvatarActive>
            <Camera onClick={closePhotoMenu} />
          </ButtonAddAvatarActive>
        ) : (
          <ButtonAddAvatar>
            <Camera onClick={openPhotoMenu} />
          </ButtonAddAvatar>
        )}
      </ContainerAvatar>
      {isOpenPhotoMenu && (
        <DropDownContainer avatar={!!avatarUrl}>
          <DropDownItem>
            <GalleryAdd />
            <StyledLabel>
              {t('download')}
              <StyledInput {...register('picture')} id="avatar" type="file" onChange={handleChange} />
            </StyledLabel>
          </DropDownItem>
          {avatarUrl && (
            <>
              <Line />
              <DropDownItem onClick={onDeleteClickHandler}>
                <Trash width={24} height={24} />
                <DropDownText variant={TextVariants.SECONDARY} font="caption_16_12_regular">
                  {t('delete')}
                </DropDownText>
              </DropDownItem>
            </>
          )}
        </DropDownContainer>
      )}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormItem>
          <Label variant={TextVariants.SECONDARY} font="body_24_16_medium">
            {t('name')}
          </Label>
          <Controller
            control={control}
            name="firstName"
            render={({ field }) => <StyledBaseInput isLong error={errors.firstName && t('requiredField')} {...field} />}
            rules={{ required: true }}
          />
        </FormItem>
        <FormItem>
          <Label variant={TextVariants.SECONDARY} font="body_24_16_medium">
            {t('surname')}
          </Label>
          <Controller
            control={control}
            name="lastName"
            render={({ field }) => <StyledBaseInput isLong error={errors.lastName && t('requiredField')} {...field} />}
            rules={{ required: true }}
          />
        </FormItem>
        <LastFormItem>
          <Label variant={TextVariants.SECONDARY} font="body_24_16_medium">
            {t('patronymic')}
          </Label>
          <Controller
            control={control}
            name="middleName"
            render={({ field }) => (
              <StyledBaseInput
                disabled={!isPatronymic}
                isLong
                error={isPatronymic ? errors.middleName && t('requiredField') : undefined}
                {...field}
              />
            )}
            rules={{ required: isPatronymic }}
          />
        </LastFormItem>
        <ItemCheckbox>
          <StyledCheckBox checked={!isPatronymic} onChange={togglePatronymic} />
          <LabelCheckbox font="caption_16_12_regular">{t('notPatronymic')}</LabelCheckbox>
        </ItemCheckbox>
        <Wrapper>
          {arrayGenderType.map((radio, index) => (
            <Controller
              key={index}
              control={control}
              name="genderType"
              render={({ field: { value, onChange } }) => {
                const handleChangeRadioValue = () => onChange(radio.value);

                return (
                  <GenderItem onClick={handleChangeRadioValue}>
                    <RadioButton
                      name={String(index)}
                      checked={value === radio.value}
                      onChange={handleChangeRadioValue}
                    />
                    <StyledAppText variant={TextVariants.SECONDARY} font="caption_16_12_regular">
                      {radio.title}
                    </StyledAppText>
                  </GenderItem>
                );
              }}
            />
          ))}
        </Wrapper>
        <Controller
          control={control}
          name="birthDate"
          rules={{
            required: `${t('requiredField')}`,
            validate: validateDate,
          }}
          render={({ field }) => (
            <div>
              <StyledBirthInput
                mask="99.99.9999"
                value={field.value}
                disabled={false}
                placeholder={t('formatDate')}
                onChange={field.onChange}
                $isError={Boolean(errors.birthDate?.message)}
              />
              {errors.birthDate?.message && (
                <ErrorText font="caption_14_10_regular">{errors.birthDate.message}</ErrorText>
              )}
            </div>
          )}
        />
        <SaveButton text={t('save')} isFullWight type="submit" variant={ButtonVariant.VIOLET} />
      </Form>
    </Root>
  );
};

export default PersonalInfoForm;

type InputData = {
  firstName: string;
  lastName: string;
  middleName: string;
  genderType: GenderType;
  birthDate: string;
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContainerAvatar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 88px;
  height: 88px;
  margin-bottom: 24px;
  background: ${({ theme: { colors } }) => colors.greyScale[30]};
  border-radius: 50%;
`;
const ButtonAddAvatar = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  ${({ theme: { colors } }) => css`
    background: ${colors.greyScale[50]};
    border: 3px solid ${colors.greyScale[0]};
  `}
  border-radius: 50%;
  cursor: pointer;
`;
const ButtonAddAvatarActive = styled(ButtonAddAvatar)`
  ${({ theme: { colors } }) => css`
    background: ${colors.greyScale[60]};
    border: 3px solid ${colors.greyScale[40]};
  `}
`;
const NewAvatar = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
`;
const StyledInput = styled.input`
  display: none;
`;
const DropDownContainer = styled.div<DropDownProps>`
  width: 135px;
  padding-left: 15px;
  padding-right: 15px;
  position: absolute;
  z-index: 10;
  bottom: ${(props) => (props.avatar ? '-8px' : '38px')};
  left: 128px;
  background: ${({ theme: { colors } }) => colors.greyScale[0]};
  border-radius: 16px;
  box-shadow: 0 10px 33px rgba(175, 181, 192, 0.18);

  @media (max-width: ${BreakpointsEnum.s}px) {
    bottom: ${(props) => (props.avatar ? '91px' : '135px')};
    right: auto;
    left: auto;
    margin-right: 47px;
  }
`;
const DropDownItem = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Line = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme: { colors } }) => colors.greyScale[30]};
`;
const StyledLabel = styled.label`
  margin-left: 10px;
  ${({ theme: { typography } }) => typography.caption_16_12_regular}
`;
const DropDownText = styled(AppText)`
  margin-left: 10px;
`;

const FormItem = styled.div`
  margin-bottom: 16px;
`;

const Form = styled.form`
  width: 100%;
`;
const Label = styled(AppText)`
  margin-bottom: 8px;
`;

const StyledBaseInput = styled(BaseInput)`
  max-width: 100%;
  width: 100%;
`;

const LastFormItem = styled.div`
  margin-bottom: 27px;

  @media (max-width: ${BreakpointsEnum.s}px) {
    margin-bottom: 11px;
  }
`;

const ItemCheckbox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;
const LabelCheckbox = styled(AppText)`
  margin-left: 10px;
  color: ${({ theme: { colors } }) => colors.greyScale[60]};
`;
const StyledCheckBox = styled(CheckBox)`
  cursor: pointer;
`;

const Wrapper = styled.div`
  width: 100%;
`;

const GenderItem = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.greyScale[30]};
  cursor: pointer;
`;

const StyledAppText = styled(AppText)`
  margin-left: 10px;
`;

const StyledBirthInput = styled(InputMask)<{ $isSuccess?: boolean; $isError?: boolean }>`
  border: ${({ theme: { colors }, $isError }) => ($isError ? `1px solid ${colors.additional.red}` : 'none')};
  padding: ${({ $isError }) => ($isError ? '11px 16px' : '12px 16px')};
  color: ${({ theme: { colors }, $isSuccess }) => ($isSuccess ? colors.additional.green : colors.greyScale[100])};

  border-radius: 12px;
  width: 100%;
  outline: none;
  background-color: ${({ theme: { colors } }) => colors.greyScale[10]};

  &:disabled {
    color: ${({ theme: { colors } }) => colors.greyScale[40]};
    cursor: not-allowed;
  }

  &:-internal-autofill-selected {
    background-color: ${({ theme: { colors } }) => colors.greyScale[10]} !important;
    color: ${({ theme: { colors } }) => colors.greyScale[100]} !important;
    background-image: none !important;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
  &::placeholder {
    color: ${({ theme: { colors } }) => colors.greyScale[60]};
  }

  ${({ theme: { typography } }) => typography.caption_16_12_regular}

  &:focus {
    border: 1px solid ${({ theme: { colors } }) => colors.greyScale[60]};
    padding: 11px 15px;
  }

  &::placeholder {
    color: ${({ theme: { colors } }) => colors.greyScale[60]};
  }

  ${({ theme: { typography } }) => typography.caption_16_12_regular}
`;

const SaveButton = styled(Button)`
  margin-top: 20px;
`;
