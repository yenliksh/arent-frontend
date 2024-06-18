import { ONE_MINUTE_IN_SECONDS, TIME_TO_PAYMENT } from 'constains';
import dayjs from 'dayjs';
import useCountdown from 'hooks/useCountDown';
import dynamic from 'next/dist/shared/lib/dynamic';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import styled from 'styled-components';
import { BreakpointsEnum } from 'types';
import { AppText } from 'ui/AppText';
import { timeDifference } from 'utils';
import { getStorageById, resetStorageById } from 'utils/storage-service';

const Portal = dynamic(() => import('hocs/portal/portal'), { ssr: false });

type StickyTopHeaderPaymentTimerProps = {
  isVisible: boolean;
  chatId: string;
  onExpiredPaymentTimer: () => void;
};

const StickyTopHeaderPaymentTimer: FC<StickyTopHeaderPaymentTimerProps> = ({
  isVisible,
  chatId,
  onExpiredPaymentTimer,
}) => {
  const { t } = useTranslation('ui', { keyPrefix: 'topHeaderPaymentTimer' });

  const lastContractData = getStorageById(chatId);

  const startUrlDate = lastContractData && dayjs(lastContractData.innopayPageUrl.startUrlDate).unix() * 1000;

  const dateNowWithMilliseconds = Math.round(new Date().getTime());
  const differenceInSeconds = timeDifference(Number(dateNowWithMilliseconds), Number(startUrlDate));

  useCountdown(TIME_TO_PAYMENT, differenceInSeconds);

  const timeToExpiredTemporaryContractInSeconds = TIME_TO_PAYMENT - differenceInSeconds;
  const seconds = timeToExpiredTemporaryContractInSeconds % ONE_MINUTE_IN_SECONDS;
  const minutes = Math.trunc(timeToExpiredTemporaryContractInSeconds / ONE_MINUTE_IN_SECONDS);

  const isMoreThanFiveMinutes = minutes > 4;

  if (timeToExpiredTemporaryContractInSeconds < 0) {
    resetStorageById(chatId);
    onExpiredPaymentTimer();
  }

  if (!isVisible || minutes === undefined || seconds === undefined) {
    return null;
  }

  return (
    <Root $isMoreThanFiveMinutes={isMoreThanFiveMinutes}>
      <Inner>
        <StyledAppText>{t('text')}</StyledAppText>
        <TimerContainer $isMoreThanFiveMinutes={isMoreThanFiveMinutes}>
          <TimeItem font="body_24_16_medium">00 {t('hours')}</TimeItem>
          <TimeItem font="body_24_16_medium">
            {minutes > 0 ? minutes : '00'} {t('minutes')}
          </TimeItem>
          <TimeItem font="body_24_16_medium">
            {seconds > 0 ? seconds : '00'} {t('seconds')}
          </TimeItem>
        </TimerContainer>
      </Inner>
    </Root>
  );
};

export default StickyTopHeaderPaymentTimer;

const Root = styled(Portal)<{ $isMoreThanFiveMinutes: boolean }>`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: min-height;
  z-index: 9999;
  background: ${({ theme: { colors }, $isMoreThanFiveMinutes }) =>
    $isMoreThanFiveMinutes ? colors.greyScale[100] : colors.additional.red};
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 12px 24px;

  @media (min-width: ${BreakpointsEnum.sm}px) {
    flex-direction: row;
  }
`;

const TimerContainer = styled.div<{ $isMoreThanFiveMinutes: boolean }>`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 4px 8px;
  border-radius: 4px;
  background: ${({ theme: { colors }, $isMoreThanFiveMinutes }) =>
    $isMoreThanFiveMinutes ? colors.greyScale[90] : colors.additional.redDark};
`;

const TimeItem = styled(AppText)`
  color: ${({ theme: { colors } }) => colors.greyScale[0]};
  :not(:last-child) {
    margin-right: 4px;
  }
`;

const StyledAppText = styled(AppText)`
  color: ${({ theme: { colors } }) => colors.greyScale[0]};
  margin-right: 8px;

  @media (max-width: ${BreakpointsEnum.sm}px) {
    margin-right: 0;
  }
`;
