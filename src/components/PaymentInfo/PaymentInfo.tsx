import React, { FC } from 'react';
import styled from 'styled-components';
import { TextVariants } from 'types';
import { AppText } from 'ui';

import usePaymentInfo from './hooks/usePaymentInfo';

const PaymentInfo: FC = () => {
  const { title, totalAmount, loading, description } = usePaymentInfo();

  return (
    <WithBorder>
      {!loading && (
        <InnerBorder>
          <PriceContainer>
            <AppText variant={TextVariants.SECONDARY} font="body_24_16_medium">
              {title}
            </AppText>
            <AppText variant={TextVariants.SECONDARY} font="body_24_16_medium">
              {totalAmount} 〒
            </AppText>
          </PriceContainer>
          <AppText variant={TextVariants.PRIMARY} font="caption_16_12_regular">
            {description}
          </AppText>
        </InnerBorder>
      )}
    </WithBorder>
  );
};

export default PaymentInfo;

const WithBorder = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid ${({ theme: { colors } }) => colors.greyScale[30]};
  border-radius: 12px;
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InnerBorder = styled.div`
  display: flex;
  padding: 15px 16px;
  flex-direction: column;
  gap: 4px;
`;
