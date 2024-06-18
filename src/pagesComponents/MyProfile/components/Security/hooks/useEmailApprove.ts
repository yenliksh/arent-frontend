import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useConfirmVerificationEmail } from '../../../../../graphql/mutations/User/__generated__/verificationEmailConfirm.mutation';
import { CookieKeys, removeQueryParam } from '../../../../../utils';

const useEmailApprove = () => {
  const router = useRouter();

  const [verificationEmail] = useConfirmVerificationEmail();

  const sendTokenForVerification = async () => {
    if (router.query?.token) {
      await verificationEmail({
        variables: {
          input: {
            token: String(router.query?.token),
          },
        },
      });
      removeQueryParam(CookieKeys.TOKEN, router);
    }
  };
  useEffect(() => {
    sendTokenForVerification();
  }, [router.query]);

  return {};
};

export default useEmailApprove;
