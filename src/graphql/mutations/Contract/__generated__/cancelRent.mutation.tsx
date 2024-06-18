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
export type CancelContractTenantVariables = Types.Exact<{
  input: Types.CancelContractByTenantRequest;
}>;

export type CancelContractTenant = {
  __typename: 'Mutation';
  contractTenant__cancel: {
    __typename: 'ContractResponse';
    problem?: { __typename: 'ContractOfferAlreadyExistsProblem'; message: string } | null;
  };
};

export const CancelContractTenantDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CancelContractTenant' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'CancelContractByTenantRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'contractTenant__cancel' },
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
                  name: { kind: 'Name', value: 'problem' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'message' } }],
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
export type CancelContractTenantMutationFn = Apollo.MutationFunction<
  CancelContractTenant,
  CancelContractTenantVariables
>;

/**
 * __useCancelContractTenant__
 *
 * To run a mutation, you first call `useCancelContractTenant` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelContractTenant` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelContractTenant, { data, loading, error }] = useCancelContractTenant({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCancelContractTenant(
  baseOptions?: Apollo.MutationHookOptions<CancelContractTenant, CancelContractTenantVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CancelContractTenant, CancelContractTenantVariables>(CancelContractTenantDocument, options);
}
export type CancelContractTenantHookResult = ReturnType<typeof useCancelContractTenant>;
export type CancelContractTenantMutationResult = Apollo.MutationResult<CancelContractTenant>;
export type CancelContractTenantMutationOptions = Apollo.BaseMutationOptions<
  CancelContractTenant,
  CancelContractTenantVariables
>;
