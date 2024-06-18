import dayjs from 'dayjs';
import { useTranslation } from 'next-i18next';
import { FC, useMemo } from 'react';
import styled from 'styled-components';
import { TextVariants } from 'types';
import { AppText, Button } from 'ui';
import { ButtonSize, ButtonVariant } from 'ui/Button/Button';

import {
  LongTermRentCancellationPolicyType,
  ShortTermRentCancellationPolicyType,
} from '../../../../__generated__/types';
import useCheckAverageTerm from '../../../../hooks/useCheckAverageTerm';

type CancelRulesModalProps = {
  cancelationPolicy: ShortTermRentCancellationPolicyType | LongTermRentCancellationPolicyType;
  startDate: string;
  endDate: string;
  onClose: () => void;
};

const CancelRulesModal: FC<CancelRulesModalProps> = ({ cancelationPolicy, onClose, startDate, endDate }) => {
  const { t } = useTranslation('activeRentPage', { keyPrefix: 'cancelRulesModal' });
  const { t: tPolicy } = useTranslation('importantInfoPage', { keyPrefix: 'cancel' });
  const { t: tUi } = useTranslation('ui', { keyPrefix: 'averageTerm' });

  const isAverageTerm = useCheckAverageTerm(dayjs(startDate).toDate(), dayjs(endDate).toDate());

  const rulesOptions = useMemo(
    () => [
      { label: 'Гибкие', value: ShortTermRentCancellationPolicyType.Flexible },
      { label: 'Умеренные', value: ShortTermRentCancellationPolicyType.Moderate },
      { label: 'Негибкие', value: ShortTermRentCancellationPolicyType.Inflexible },
      { label: 'Строгие', value: ShortTermRentCancellationPolicyType.Strict },
      { label: '', value: LongTermRentCancellationPolicyType.Forfeit },
    ],
    [t],
  );

  const filterOptionIndex = rulesOptions.findIndex((option) => option.value === cancelationPolicy);

  const TermsMapping = useMemo(() => {
    return {
      [ShortTermRentCancellationPolicyType.Strict]: tPolicy('rules.strict'),
      [ShortTermRentCancellationPolicyType.Flexible]: tPolicy('rules.flexible'),
      [ShortTermRentCancellationPolicyType.Inflexible]: tPolicy('rules.inFlexible'),
      [ShortTermRentCancellationPolicyType.Moderate]: tPolicy('rules.moderate'),
      [LongTermRentCancellationPolicyType.Forfeit]: tPolicy('rules.forfeit'),
    };
  }, [tPolicy]);

  const renderRules = () => {
    const actualRool = isAverageTerm ? `${tUi('rules.first')} ${tUi('rules.second')}` : TermsMapping[cancelationPolicy];
    return (
      <AppText variant={TextVariants.SECONDARY} font="body_24_16_regular">
        <>{actualRool}</>
      </AppText>
    );
  };

  return (
    <MainContainer>
      <TextContainer>
        <AppText variant={TextVariants.SECONDARY} font="body_24_16_medium">
          <>{rulesOptions[filterOptionIndex].label}</>
        </AppText>
        {renderRules()}
      </TextContainer>
      <StyledButton onClick={onClose} variant={ButtonVariant.PRIMARY} size={ButtonSize.LONG_TEXT} text={t('ok')} />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 8px;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

export default CancelRulesModal;
