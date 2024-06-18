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
export type PayManuallyVariables = Types.Exact<{
  input: Types.TenantManuallyPayRequest;
}>;

export type PayManually = {
  __typename: 'Mutation';
  paymentTransaction__tenant_manuallyPay: {
    __typename: 'PaymentTransactionResponse';
    paymentTransaction?: { __typename: 'PaymentTransactionModel'; id: string } | null;
  };
};

export const PayManuallyDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'PayManually' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'TenantManuallyPayRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'paymentTransaction__tenant_manuallyPay' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'paymentTransaction' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export type PayManuallyMutationFn = Apollo.MutationFunction<PayManually, PayManuallyVariables>;

/**
 * __usePayManually__
 *
 * To run a mutation, you first call `usePayManually` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePayManually` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [payManually, { data, loading, error }] = usePayManually({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePayManually(baseOptions?: Apollo.MutationHookOptions<PayManually, PayManuallyVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<PayManually, PayManuallyVariables>(PayManuallyDocument, options);
}
export type PayManuallyHookResult = ReturnType<typeof usePayManually>;
export type PayManuallyMutationResult = Apollo.MutationResult<PayManually>;
export type PayManuallyMutationOptions = Apollo.BaseMutationOptions<PayManually, PayManuallyVariables>;
