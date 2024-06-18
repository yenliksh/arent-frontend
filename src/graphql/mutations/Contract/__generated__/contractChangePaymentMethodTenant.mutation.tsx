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
export type ChangeTenantPaymentMethodVariables = Types.Exact<{
  input: Types.ChangeTenantPaymentMethodRequest;
}>;

export type ChangeTenantPaymentMethod = {
  __typename: 'Mutation';
  contractTenantPaymentMethod__change: {
    __typename: 'InnopayCardModel';
    id: string;
    panMasked: string;
    cnpCardId: number;
    cardType: Types.InnopayCardType;
  };
};

export const ChangeTenantPaymentMethodDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'ChangeTenantPaymentMethod' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ChangeTenantPaymentMethodRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'contractTenantPaymentMethod__change' },
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
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'panMasked' } },
                { kind: 'Field', name: { kind: 'Name', value: 'cnpCardId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'cardType' } },
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export type ChangeTenantPaymentMethodMutationFn = Apollo.MutationFunction<
  ChangeTenantPaymentMethod,
  ChangeTenantPaymentMethodVariables
>;

/**
 * __useChangeTenantPaymentMethod__
 *
 * To run a mutation, you first call `useChangeTenantPaymentMethod` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeTenantPaymentMethod` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeTenantPaymentMethod, { data, loading, error }] = useChangeTenantPaymentMethod({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useChangeTenantPaymentMethod(
  baseOptions?: Apollo.MutationHookOptions<ChangeTenantPaymentMethod, ChangeTenantPaymentMethodVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<ChangeTenantPaymentMethod, ChangeTenantPaymentMethodVariables>(
    ChangeTenantPaymentMethodDocument,
    options,
  );
}
export type ChangeTenantPaymentMethodHookResult = ReturnType<typeof useChangeTenantPaymentMethod>;
export type ChangeTenantPaymentMethodMutationResult = Apollo.MutationResult<ChangeTenantPaymentMethod>;
export type ChangeTenantPaymentMethodMutationOptions = Apollo.BaseMutationOptions<
  ChangeTenantPaymentMethod,
  ChangeTenantPaymentMethodVariables
>;
