import { makeVar } from '@apollo/client';

export const loginModalVar = makeVar<{ isAuthModalOpen: boolean }>({
  isAuthModalOpen: false,
});

export const tokenVar = makeVar<string>('');

export const AdvertId = makeVar<string>('');

export const innopayCardCompleteVar = makeVar<boolean>(false);

export const authRoute = makeVar<string>('');

export const possibilityToPayInInstalments = makeVar(true);

export const averageTerm = makeVar(false);

export const manualyPayError = makeVar(false);

export const stickyTopHeaderOpenedVar = makeVar<boolean>(false);
