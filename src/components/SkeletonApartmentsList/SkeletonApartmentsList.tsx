import useSkeletonLoading from 'hooks/useSkeletonLoading';
import React from 'react';
import styled from 'styled-components';
import { BreakpointsEnum } from 'types';
import { Skeleton } from 'ui/Skeleton';

const cards = [1, 2, 3, 4, 5, 6, 7, 8];

const SkeletonApartmentsList = () => {
  useSkeletonLoading();
  return (
    <Root>
      <ResponsiveContainer>
        {cards.map((item) => (
          <CardContainer key={item}>
            <ImageContainer>
              <Skeleton width={306} height={253} borderRadius="24px" />
            </ImageContainer>
            <TextContainer>
              <Skeleton width={306} height={22} borderRadius={20} isSecondary />
              <InnerContainer>
                <Skeleton width={129} height={20} borderRadius={20} isSecondary />
                <NestContainer>
                  <Skeleton width={122} height={20} borderRadius={20} isSecondary />
                </NestContainer>
              </InnerContainer>
              <LowContainer>
                <Skeleton width={70} height={22} borderRadius={20} isSecondary />
              </LowContainer>
            </TextContainer>
          </CardContainer>
        ))}
      </ResponsiveContainer>
    </Root>
  );
};

export default SkeletonApartmentsList;

const ResponsiveContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 24px;
  grid-column-gap: 24px;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: ${BreakpointsEnum.lgm}px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${BreakpointsEnum.md}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${BreakpointsEnum.s}px) {
    grid-template-columns: 1fr;
  }
`;
const LowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const NestContainer = styled.div`
  display: flex;
  gap: 24px;
`;
const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
  margin-bottom: 20px;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 22px 0px;
`;
const ImageContainer = styled.div``;
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  border-radius: 24px;
  background: ${({ theme: { colors } }) => colors.greyScale[0]};
`;
const Root = styled.div`
  width: 100%;
  margin-top: 10px;
`;
