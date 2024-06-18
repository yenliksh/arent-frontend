/* eslint-disable simple-import-sort/imports */
/* eslint-disable import/order */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-redeclare */
/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable no-unused-vars */
import * as Types from '../../../../__generated__/types';

import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type SendEmailVariables = Types.Exact<{ [key: string]: never }>;

export type SendEmail = {
  __typename: 'Mutation';
  user__profile_verificationEmailSend: { __typename: 'ProfileConfirmVerificationEmailResponse'; ok: boolean };
};

export const SendEmailDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SendEmail' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user__profile_verificationEmailSend' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'ok' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export type SendEmailMutationFn = Apollo.MutationFunction<SendEmail, SendEmailVariables>;

/**
 * __useSendEmail__
 *
 * To run a mutation, you first call `useSendEmail` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendEmail` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendEmail, { data, loading, error }] = useSendEmail({
 *   variables: {
 *   },
 * });
 */
export function useSendEmail(baseOptions?: Apollo.MutationHookOptions<SendEmail, SendEmailVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SendEmail, SendEmailVariables>(SendEmailDocument, options);
}
export type SendEmailHookResult = ReturnType<typeof useSendEmail>;
export type SendEmailMutationResult = Apollo.MutationResult<SendEmail>;
export type SendEmailMutationOptions = Apollo.BaseMutationOptions<SendEmail, SendEmailVariables>;
