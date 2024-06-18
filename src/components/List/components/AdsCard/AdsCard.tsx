import { guestPlural, Routes } from 'constains';
import { useClientSize } from 'hooks';
import { useRouter } from 'next/router';
import { FC, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import { BreakpointsEnum, TextVariants } from 'types';
import { BaseCardProps } from 'types/card';
import { AppText } from 'ui';
import { handleDivisionOnCategories } from 'utils';
import { handleWordsDeclination } from 'utils/textHelpers';

import { Heart } from '../../../../../public/svg/components';
import { ApartmentType } from '../../../../__generated__/types';
import LinkTo from '../../../../ui/LinkTo/LinkTo';
import { InSearchContainer } from '../../../CardInSearch/styled';

interface CardInSearchProps extends BaseCardProps {
  rentType?: string;
  guestsNum?: string;
  bedNum?: string;
  bathNum?: string;
  apartmentType?: ApartmentType;
  onSetFocusOnCard: (id: string) => void;
  onDeleteFocusOnCard: (id: string) => void;
  isBooking?: boolean;
  id: string;
  slug?: string;
  newLimit: Function;
  isLast: boolean;
}

const AdsCard: FC<CardInSearchProps> = ({
  pictureSrc,
  title,
  address,
  id,
  price,
  guestsNum,
  onDeleteFocusOnCard,
  onSetFocusOnCard,
  isBooking = false,
  slug,
  newLimit,
  isLast,
}) => {
  const { getIsBreakpoint } = useClientSize();
  const { query } = useRouter();

  const guestSubtitle = `${guestsNum} ${handleWordsDeclination(Number(guestsNum), guestPlural)}`;

  const priceSubtitle = `${handleDivisionOnCategories(String(price || ''))} ₸ `;

  const isWidthSm = getIsBreakpoint('sm');

  const shortTitle = title!.length > 20 ? `${title!.slice(0, 36)}...` : title;

  const shortAddress = address!.length > 40 ? `${address!.slice(0, 34)}...` : address;

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef?.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (isLast && entry.isIntersecting) {
        newLimit();

        observer.unobserve(entry.target);
      }
    });

    observer.observe(cardRef.current);
  }, [isLast]);

  return (
    <StyledLinkTo
      text=""
      target="_blank"
      href={{
        pathname: `${Routes.apartment}/${slug}`,
        query: {
          guests: query.guests,
          kids: query.kids,
          pets: query.pets,
          dateStartInitial: query.start,
          dateEndInitial: query.end,
        },
      }}>
      <StyledInSearchContainer
        ref={cardRef}
        $isBooking={isBooking}
        onMouseEnter={() => onSetFocusOnCard(id)}
        onMouseLeave={() => onDeleteFocusOnCard(id)}>
        <ImageContainer $isBooking={isBooking} $src={pictureSrc}>
          <StyledButton>
            <Heart />
          </StyledButton>
        </ImageContainer>
        <DescriptionContainer $isBooking={isBooking}>
          <TitleContainer $isBooking={isBooking}>
            <TitleText
              variant={TextVariants.SECONDARY}
              font={isWidthSm ? 'caption_16_12_medium' : 'title_22_18_medium'}>
              {shortTitle}
            </TitleText>
          </TitleContainer>
          <FooterContainer $isBooking={isBooking}>
            {!isWidthSm && (
              <AddressContainer>
                <Address>{shortAddress}</Address>
              </AddressContainer>
            )}
            {!isWidthSm && (
              <FeatureContainer>
                <Features>{guestSubtitle}</Features>
              </FeatureContainer>
            )}
            <PriceContainer $isBooking={isBooking}>
              <AppText variant={TextVariants.SECONDARY} font={isWidthSm ? 'body_24_16_medium' : 'title_22_18_bold'}>
                {priceSubtitle}
              </AppText>
            </PriceContainer>
          </FooterContainer>
        </DescriptionContainer>
      </StyledInSearchContainer>
    </StyledLinkTo>
  );
};

const StyledLinkTo = styled(LinkTo)``;

const StyledInSearchContainer = styled(InSearchContainer)<{ $isBooking: boolean }>`
  flex-direction: column;
  width: 100%;
  z-index: 99999999999;
  max-width: 306px;
  margin: auto;
  ${({ theme, $isBooking }) =>
    $isBooking &&
    css`
      max-width: 100%;
      border: none;
      background-color: ${theme.colors.greyScale[10]};
      &:hover {
        box-shadow: none;
      }
    `}
`;

const StyledButton = styled.button`
  background-color: #fff;
  padding: 7px;
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 12px;
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.greyScale[30]};
  `}
`;

const ImageContainer = styled.div<{ $isBooking: boolean; $src: string }>`
  width: 306px;
  overflow: hidden;
  height: 253px;
  position: relative;
  display: flex;
  justify-content: flex-end;

  ${({ $src }) =>
    css`
      background: url(${$src});
      background-size: cover;
      background-position: center;
    `}

  ${({ $isBooking }) =>
    $isBooking &&
    css`
      min-width: 100px;
      max-width: 100px;
      max-height: 120px;

      @media (min-width: ${BreakpointsEnum.sm}px) {
        min-width: 203px;
        min-height: 204px;
      }
    `}
`;

const DescriptionContainer = styled.div<{ $isBooking: boolean }>`
  display: flex;
  flex-direction: column;
  margin: 16px;
  max-width: 373px;
  ${({ $isBooking }) =>
    $isBooking &&
    css`
      width: 100%;
      margin: 8px;
      justify-content: space-between;
      gap: 16px;
      max-width: 100%;

      @media (min-width: ${BreakpointsEnum.sm}px) {
        margin: 16px;
        justify-content: flex-start;
        gap: 0;
        max-width: 100%;
        width: 100%;
      }
    `}
`;

const TitleContainer = styled.div<{ $isBooking: boolean }>`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  ${({ $isBooking }) =>
    $isBooking &&
    css`
      margin-top: 0;
    `}
`;

const TitleText = styled(AppText)`
  overflow-x: hidden;
  overflow-y: hidden;
  text-overflow: ellipsis;

  @media (min-width: ${BreakpointsEnum.sm}px) {
    white-space: nowrap;
  }
`;

const FeatureContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Features = styled(AppText)`
  ${({ theme }) => css`
    color: ${theme.colors.greyScale[60]};
    ${theme.typography.body_20_14_regular}
  `}
`;

const FooterContainer = styled.div<{ $isBooking: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 10px;
  ${({ $isBooking }) =>
    $isBooking &&
    css`
      margin-top: 0;

      @media (min-width: ${BreakpointsEnum.sm}px) {
        margin-top: 54px;
      }
    `}
`;

const AddressContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Address = styled(AppText)`
  ${({ theme }) => css`
    color: ${theme.colors.greyScale[60]};
    ${theme.typography.body_20_14_regular}
  `}
`;

const PriceContainer = styled.div<{ $isBooking: boolean }>`
  display: flex;
  align-items: flex-end;
  width: 57%;
  margin-top: 10px;
  ${({ $isBooking }) =>
    $isBooking &&
    css`
      width: auto;
    `}
`;

export default AdsCard;
