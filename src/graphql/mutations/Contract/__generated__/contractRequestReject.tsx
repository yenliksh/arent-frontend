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
export type ContractRequestRejectVariables = Types.Exact<{
  input: Types.RejectRequest;
}>;

export type ContractRequestReject = {
  __typename: 'Mutation';
  contract_request__reject: {
    __typename: 'ContractRequestResponse';
    contractRequest?: { __typename: 'ContractRequestModel'; id: string } | null;
  };
};

export const ContractRequestRejectDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'ContractRequestReject' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'RejectRequest' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'contract_request__reject' },
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
                  name: { kind: 'Name', value: 'contractRequest' },
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
export type ContractRequestRejectMutationFn = Apollo.MutationFunction<
  ContractRequestReject,
  ContractRequestRejectVariables
>;

/**
 * __useContractRequestReject__
 *
 * To run a mutation, you first call `useContractRequestReject` within a React component and pass it any options that fit your needs.
 * When your component renders, `useContractRequestReject` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [contractRequestReject, { data, loading, error }] = useContractRequestReject({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useContractRequestReject(
  baseOptions?: Apollo.MutationHookOptions<ContractRequestReject, ContractRequestRejectVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<ContractRequestReject, ContractRequestRejectVariables>(
    ContractRequestRejectDocument,
    options,
  );
}
export type ContractRequestRejectHookResult = ReturnType<typeof useContractRequestReject>;
export type ContractRequestRejectMutationResult = Apollo.MutationResult<ContractRequestReject>;
export type ContractRequestRejectMutationOptions = Apollo.BaseMutationOptions<
  ContractRequestReject,
  ContractRequestRejectVariables
>;
