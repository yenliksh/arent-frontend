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
export type SendContractRequestEmailVariables = Types.Exact<{
  input: Types.SendRequestEmail;
}>;

export type SendContractRequestEmail = {
  __typename: 'Mutation';
  contract_request__sendEmail: { __typename: 'SendRequestEmailResponse'; ok: boolean };
};

export const SendContractRequestEmailDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SendContractRequestEmail' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'SendRequestEmail' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'contract_request__sendEmail' },
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
export type SendContractRequestEmailMutationFn = Apollo.MutationFunction<
  SendContractRequestEmail,
  SendContractRequestEmailVariables
>;

/**
 * __useSendContractRequestEmail__
 *
 * To run a mutation, you first call `useSendContractRequestEmail` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendContractRequestEmail` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendContractRequestEmail, { data, loading, error }] = useSendContractRequestEmail({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSendContractRequestEmail(
  baseOptions?: Apollo.MutationHookOptions<SendContractRequestEmail, SendContractRequestEmailVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SendContractRequestEmail, SendContractRequestEmailVariables>(
    SendContractRequestEmailDocument,
    options,
  );
}
export type SendContractRequestEmailHookResult = ReturnType<typeof useSendContractRequestEmail>;
export type SendContractRequestEmailMutationResult = Apollo.MutationResult<SendContractRequestEmail>;
export type SendContractRequestEmailMutationOptions = Apollo.BaseMutationOptions<
  SendContractRequestEmail,
  SendContractRequestEmailVariables
>;
