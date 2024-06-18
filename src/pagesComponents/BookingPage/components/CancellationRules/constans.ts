import { i18n } from 'services';

import { LocalTypes } from '../../../../../public/locales/types';
import { ShortTermRentCancellationPolicyType } from '../../../../__generated__/types';

export const termsMapping = {
  [ShortTermRentCancellationPolicyType.Strict]: i18n.t('cancel.rules.strict', { ns: LocalTypes.IMPORTANT_INFO_PAGE }),
  [ShortTermRentCancellationPolicyType.Flexible]: i18n.t('cancel.rules.flexible', {
    ns: LocalTypes.IMPORTANT_INFO_PAGE,
  }),
  [ShortTermRentCancellationPolicyType.Inflexible]: i18n.t('cancel.rules.inFlexible', {
    ns: LocalTypes.IMPORTANT_INFO_PAGE,
  }),
  [ShortTermRentCancellationPolicyType.Moderate]: i18n.t('cancel.rules.moderate', {
    ns: LocalTypes.IMPORTANT_INFO_PAGE,
  }),
};
