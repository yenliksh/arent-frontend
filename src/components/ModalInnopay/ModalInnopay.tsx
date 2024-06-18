import { useReactiveVar } from '@apollo/client';
import {
  SetInnopayCardStart,
  useSetInnopayCardStart,
} from 'graphql/mutations/User/__generated__/setInnopayCardStart.mutation';
import { useTranslation } from 'next-i18next';
import { FC, useEffect, useState } from 'react';
import { notify } from 'services';
import styled from 'styled-components';
import { BreakpointsEnum } from 'types';

import { innopayCardCompleteVar } from '../../libs/apollo-client/react-variables';

type ModalInnopayProps = {
  onComplete: () => void;
};

export const ModalInnopay: FC<ModalInnopayProps> = ({ onComplete }) => {
  const { t } = useTranslation('profilePage', { keyPrefix: 'security' });
  const isInnopayCardComplete = useReactiveVar(innopayCardCompleteVar);

  const [fetchInnopayCardStart] = useSetInnopayCardStart();
  const [iframeInnopayUrl, setIframeInnopayUrl] = useState('');

  const handleCompleteInnopayCardStart = (data: SetInnopayCardStart) => {
    if (data.innopay_card__save.url) {
      setIframeInnopayUrl(data.innopay_card__save.url);
    }
  };

  const handleComplete = () => {
    if (isInnopayCardComplete) {
      onComplete();
    }
  };

  useEffect(() => {
    fetchInnopayCardStart({
      onCompleted: handleCompleteInnopayCardStart,
      onError: () => notify(t('somethingError')),
    });
  }, []);

  useEffect(handleComplete, [isInnopayCardComplete]);

  return <Root src={iframeInnopayUrl} />;
};

const Root = styled.iframe`
  width: 100%;
  height: 75vh;
  @media (min-width: ${BreakpointsEnum.sm}px) {
    height: 563px;
    max-height: 563px;
  }
`;
