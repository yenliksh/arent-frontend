import { useClientSize } from 'hooks';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import styled from 'styled-components';
import { BreakpointsEnum, TextVariants } from 'types';
import { AppText, Avatar } from 'ui';
import { AvatarSize } from 'ui/Avatar/Avatar';
import { formatDateToRange } from 'utils';

import { TickCircle } from '../../../../../public/svg/components';

type OwnerProps = {
  name: string;
  date?: string;
  avatar?: string;
  isIdentityApproved?: boolean;
  isPhoneApproved?: boolean;
};

const Owner: FC<OwnerProps> = ({ name, isIdentityApproved, isPhoneApproved, avatar, date = '' }) => {
  const { t } = useTranslation('apartmentPage', { keyPrefix: 'owner' });

  const { getIsBreakpoint } = useClientSize();

  const isWidthS = getIsBreakpoint('s');

  const showDate = formatDateToRange(date).substring(3);
  return (
    <Root>
      <Container>
        <AvatarWrapper>
          <Avatar size={AvatarSize.size64} avatar={avatar} />
        </AvatarWrapper>
        <ContentContainer>
          <TextContainer>
            <AppText font="title_22_18_bold" variant={TextVariants.SECONDARY}>{`${t('ownerName')}${name}`}</AppText>
            {date && <StyledAppText font="body_20_14_regular">{`${t('presenceTime')}${showDate}`}</StyledAppText>}
          </TextContainer>
          {!isWidthS && (
            <VerifiedContainer>
              {isIdentityApproved && (
                <ConfirmationItem>
                  <StyledTickCircle />
                  <AppText font="body_20_14_medium" variant={TextVariants.SECONDARY}>
                    {t('identityVerified')}
                  </AppText>
                </ConfirmationItem>
              )}
              {isPhoneApproved && (
                <ConfirmationItem>
                  <StyledTickCircle />
                  <AppText font="body_20_14_medium" variant={TextVariants.SECONDARY}>
                    {t('numberVerified')}
                  </AppText>
                </ConfirmationItem>
              )}
            </VerifiedContainer>
          )}
        </ContentContainer>
      </Container>
      {isWidthS && (
        <VerifiedContainer>
          {isIdentityApproved && (
            <ConfirmationItem>
              <StyledTickCircle />
              <AppText font="body_20_14_medium" variant={TextVariants.SECONDARY}>
                {t('identityVerified')}
              </AppText>
            </ConfirmationItem>
          )}
          {isPhoneApproved && (
            <ConfirmationItem>
              <StyledTickCircle />
              <AppText font="body_20_14_medium" variant={TextVariants.SECONDARY}>
                {t('numberVerified')}
              </AppText>
            </ConfirmationItem>
          )}
        </VerifiedContainer>
      )}
    </Root>
  );
};

export default Owner;

const StyledTickCircle = styled(TickCircle)`
  margin-right: 10px;
`;
const ConfirmationItem = styled.div`
  display: flex;
  margin-right: 18px;
  align-items: center;
`;
const VerifiedContainer = styled.div`
  display: flex;
  margin-top: 16px;

  @media (max-width: ${BreakpointsEnum.s}px) {
    flex-direction: column;
    gap: 8px;
  }
`;
const StyledAppText = styled(AppText)`
  color: ${({ theme: { colors } }) => colors.greyScale[50]};
  border-left: solid;
  padding-left: 16px;
  margin-left: 16px;
  @media (max-width: ${BreakpointsEnum.s}px) {
    border-left: none;
    padding: 0;
    margin: 0;
  }
`;
const TextContainer = styled.div`
  display: flex;
  align-tems: center;
  @media (max-width: ${BreakpointsEnum.s}px) {
    flex-direction: column;
    gap: 8px;
  }
`;
const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
`;
const Root = styled.div`
  width: 100%;
  padding-bottom: 32px;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.greyScale[30]};
  @media (max-width: ${BreakpointsEnum.s}px) {
    border: none;
    padding-bottom: 18px;
  }
`;

const ContentContainer = styled.div``;
