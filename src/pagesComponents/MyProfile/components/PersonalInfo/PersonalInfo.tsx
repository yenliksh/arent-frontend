import { GenderType, IdentityStatusType } from '__generated__/types';
import { useDeleteGuarantor } from 'graphql/mutations/User/__generated__/deleteGuarantor.mutation';
import { useGetFullMe } from 'graphql/queries/User/__generated__/getFullMe.query';
import { useClientSize, useToggle } from 'hooks';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { FC, useState } from 'react';
import styled, { css } from 'styled-components';
import { BreakpointsEnum, TextVariants } from 'types';
import { AppText, BaseModal, Button, LightButton } from 'ui';
import { ButtonSize, ButtonVariant } from 'ui/Button/Button';
import { LightButtonSize } from 'ui/LightButton/LightButton';
import { reverseDate } from 'utils';

import { Avatar } from '../../../../../public/svg/components';
import { EmergencyForm, PersonalInfoForm } from './components';

const PersonalInfo: FC = () => {
  const [currentForm, setCurrentForm] = useState<FormNameEnum>(FormNameEnum.PERSONALINFO_FORM);
  const [currentGuaranotrIndex, setCurrentGuarantorIndex] = useState(0);

  const { getIsBreakpoint } = useClientSize();
  const { t } = useTranslation('profilePage', { keyPrefix: 'personalInformation' });
  const { t: tProfile } = useTranslation('profilePage', { keyPrefix: 'myProfile' });

  const { isOpened, open, close } = useToggle();

  const { data, loading } = useGetFullMe({ fetchPolicy: 'cache-and-network' });
  const user = data?.user__me;
  const isNotApproved =
    user?.identityStatus !== IdentityStatusType.Approved &&
    user?.identityStatus !== IdentityStatusType.Processing &&
    !loading;
  const [fetchDeleteGuarantor] = useDeleteGuarantor();

  const openPhotoModal = () => {
    setCurrentForm(FormNameEnum.PERSONALINFO_FORM);
    open();
  };

  const openEmergencyModal = () => {
    setCurrentGuarantorIndex(0);
    setCurrentForm(FormNameEnum.EMERGENCY_FORM);
    open();
  };

  const deleteGuarantor = () => {
    fetchDeleteGuarantor();
  };

  const firstUserGuarantorsFullName = user?.guarantors?.[0]
    ? `${user.guarantors[0].firstName} ${user.guarantors[0].lastName} — ${user.guarantors[0].phone}`
    : t('noData');

  const guarantors = user?.guarantors?.[0] ? user.guarantors : [];

  const avatar = user?.avatarKey || '';
  const userId = user?.id || '';
  const firstName = user?.firstName || '';
  const middleName = user?.middleName || '';
  const lastName = user?.lastName || '';
  const fullName = user ? `${firstName} ${middleName} ${lastName}` : t('noName');
  const gender = user?.gender || GenderType.Male;
  const showGender = gender === GenderType.Male ? t('male') : t('female');
  const birthDate = user && user.birthDate ? reverseDate(user?.birthDate) : '';

  const formsMapping = {
    [FormNameEnum.PERSONALINFO_FORM]: {
      title: t('titlePhotoModal'),
      form: (
        <PersonalInfoForm
          close={close}
          userId={userId}
          avatar={avatar}
          firstName={firstName}
          lastName={lastName}
          middleName={middleName}
          genderType={gender}
          birthDate={birthDate}
        />
      ),
    },
    [FormNameEnum.EMERGENCY_FORM]: {
      title: t('faceOfEmergency'),
      form: <EmergencyForm close={close} index={currentGuaranotrIndex} guarantors={guarantors} />,
    },
  };

  const isWidthSm = getIsBreakpoint('sm');

  const isSBreakpoint = getIsBreakpoint('sm');

  return (
    <>
      <Container>
        {!isSBreakpoint && (
          <Title variant={TextVariants.SECONDARY} font="title_33_24_bold">
            {tProfile('personalInformation')}
          </Title>
        )}
        <AvatarWrapper>
          <ContainerAvatar>
            {avatar ? <NewAvatar layout="fill" src={avatar} alt="avatar" /> : <Avatar width={24} height={24} />}
          </ContainerAvatar>
          <Button
            text={t('titlePhotoModal')}
            size={ButtonSize.CARDS}
            variant={ButtonVariant.SECONDARY}
            onClick={openPhotoModal}
          />
        </AvatarWrapper>
        <Item>
          <InfoContainer>
            <AppText variant={TextVariants.SECONDARY} font="body_24_16_regular">
              {t('fullName')}
            </AppText>
            <Information variant={TextVariants.SECONDARY} font={isWidthSm ? 'body_24_16_medium' : 'title_22_18_bold'}>
              {fullName}
            </Information>
          </InfoContainer>
          {isNotApproved && <StyledLightButton text={t('edit')} size={LightButtonSize.NORMAL} isUnderline />}
        </Item>
        <Item>
          <InfoContainer>
            <AppText variant={TextVariants.SECONDARY} font="body_24_16_regular">
              {t('gender')}
            </AppText>
            <Information variant={TextVariants.SECONDARY} font={isWidthSm ? 'body_24_16_medium' : 'title_22_18_bold'}>
              {showGender}
            </Information>
          </InfoContainer>
          {isNotApproved && <StyledLightButton text={t('edit')} size={LightButtonSize.NORMAL} isUnderline />}
        </Item>
        <Item>
          <InfoContainer>
            <AppText variant={TextVariants.SECONDARY} font="body_24_16_regular">
              {t('dateOfBirth')}
            </AppText>
            <Information variant={TextVariants.SECONDARY} font={isWidthSm ? 'body_24_16_medium' : 'title_22_18_bold'}>
              {birthDate}
            </Information>
          </InfoContainer>
          {isNotApproved && <StyledLightButton text={t('edit')} size={LightButtonSize.NORMAL} isUnderline />}
        </Item>
        <ContactFaceWrapper>
          {guarantors.length > 0 ? (
            <StyledItem>
              <AppText variant={TextVariants.SECONDARY} font="body_24_16_regular">
                {t('contactFace')}
              </AppText>
              <LastInformation
                variant={TextVariants.SECONDARY}
                font={isWidthSm ? 'body_24_16_medium' : 'title_22_18_bold'}>
                {firstUserGuarantorsFullName}
              </LastInformation>
            </StyledItem>
          ) : (
            <StyledItem>
              <AppText variant={TextVariants.SECONDARY} font="body_24_16_regular">
                {t('addContactFace')}
              </AppText>
            </StyledItem>
          )}

          {guarantors.length > 0 ? (
            <ButtonWrapper>
              <Button
                text={t('edit')}
                size={ButtonSize.NORMAL}
                variant={ButtonVariant.PRIMARY}
                onClick={openEmergencyModal}
              />
              <Button
                text={t('delete')}
                size={ButtonSize.NORMAL}
                variant={ButtonVariant.RED}
                onClick={deleteGuarantor}
              />
            </ButtonWrapper>
          ) : (
            <Button
              text={t('add')}
              size={ButtonSize.NORMAL}
              variant={ButtonVariant.PRIMARY}
              onClick={openEmergencyModal}
            />
          )}
        </ContactFaceWrapper>
      </Container>
      <StyledBaseModal onClose={close} title={formsMapping[currentForm].title} isVisible={isOpened} isBottomMobile>
        {formsMapping[currentForm].form}
      </StyledBaseModal>
    </>
  );
};

export default PersonalInfo;

enum FormNameEnum {
  PERSONALINFO_FORM = 'PERSONALINFO_FORM',
  EMERGENCY_FORM = 'EMERGENCY_FORM',
}
const StyledBaseModal = styled(BaseModal)`
  max-width: 442px;

  @media (max-width: ${BreakpointsEnum.s}px) {
    max-width: 100%;
    width: 100%;
  }
`;
const Container = styled.div`
  width: 848px;
  margin-top: 32px;
  margin-bottom: 80px;
  padding: 40px;
  background: ${({ theme: { colors } }) => colors.greyScale[0]};
  border-radius: 21px;

  @media (max-width: ${BreakpointsEnum.md}px) {
    width: 100%;
  }
  @media (max-width: ${BreakpointsEnum.sm}px) {
    margin: 0;
    border-radius: 0;
    padding: 24px 16px 80px 16px;
  }
`;
const Item = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 24px;
  ${({ theme: { colors } }) => css`
    border-bottom: 1px solid ${colors.greyScale[30]};

    &:hover {
      border-bottom: 1px solid ${colors.greyScale[100]};
      cursor: pointer;
    }
  `}
`;
const StyledItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 18px;
`;
const StyledLightButton = styled(LightButton)`
  font-size: 16px;
  margin-bottom: 7px;
  margin-right: -10px;
`;
const Title = styled(AppText)`
  margin-bottom: 16px;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Information = styled(AppText)`
  margin: 16px 0;
`;
const LastInformation = styled(AppText)`
  margin-left: 6px;
`;
const ContactFaceWrapper = styled.div`
  background-color: ${({ theme: { colors } }) => colors.additional.blueLight};
  padding: 16px 20px;
  border-radius: 12px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;
`;
const NewAvatar = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
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

const AvatarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
