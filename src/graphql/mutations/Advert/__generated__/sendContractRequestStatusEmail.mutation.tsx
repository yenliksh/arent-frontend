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
export type SendContractRequestStatusEmailVariables = Types.Exact<{
  input: Types.SendRequestStatusEmail;
}>;

export type SendContractRequestStatusEmail = {
  __typename: 'Mutation';
  contract_requestStatus__sendEmail: { __typename: 'SendBookingRequestStatusEmailResponse'; ok: boolean };
};

export const SendContractRequestStatusEmailDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SendContractRequestStatusEmail' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'SendRequestStatusEmail' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'contract_requestStatus__sendEmail' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
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
export type SendContractRequestStatusEmailMutationFn = Apollo.MutationFunction<
  SendContractRequestStatusEmail,
  SendContractRequestStatusEmailVariables
>;

/**
 * __useSendContractRequestStatusEmail__
 *
 * To run a mutation, you first call `useSendContractRequestStatusEmail` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendContractRequestStatusEmail` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendContractRequestStatusEmail, { data, loading, error }] = useSendContractRequestStatusEmail({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSendContractRequestStatusEmail(
  baseOptions?: Apollo.MutationHookOptions<SendContractRequestStatusEmail, SendContractRequestStatusEmailVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SendContractRequestStatusEmail, SendContractRequestStatusEmailVariables>(
    SendContractRequestStatusEmailDocument,
    options,
  );
}
export type SendContractRequestStatusEmailHookResult = ReturnType<typeof useSendContractRequestStatusEmail>;
export type SendContractRequestStatusEmailMutationResult = Apollo.MutationResult<SendContractRequestStatusEmail>;
export type SendContractRequestStatusEmailMutationOptions = Apollo.BaseMutationOptions<
  SendContractRequestStatusEmail,
  SendContractRequestStatusEmailVariables
>;
