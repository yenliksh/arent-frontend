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
export type ContractOfferRejectVariables = Types.Exact<{
  input: Types.RejectContractOfferRequest;
}>;

export type ContractOfferReject = {
  __typename: 'Mutation';
  contractOffer__reject: {
    __typename: 'ContractResponse';
    contract?: { __typename: 'ContractChatModel'; id: string; status: Types.ContractStatus } | null;
  };
};

export const ContractOfferRejectDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'ContractOfferReject' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'RejectContractOfferRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'contractOffer__reject' },
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
                  name: { kind: 'Name', value: 'contract' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                    ],
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
export type ContractOfferRejectMutationFn = Apollo.MutationFunction<ContractOfferReject, ContractOfferRejectVariables>;

/**
 * __useContractOfferReject__
 *
 * To run a mutation, you first call `useContractOfferReject` within a React component and pass it any options that fit your needs.
 * When your component renders, `useContractOfferReject` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [contractOfferReject, { data, loading, error }] = useContractOfferReject({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useContractOfferReject(
  baseOptions?: Apollo.MutationHookOptions<ContractOfferReject, ContractOfferRejectVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<ContractOfferReject, ContractOfferRejectVariables>(ContractOfferRejectDocument, options);
}
export type ContractOfferRejectHookResult = ReturnType<typeof useContractOfferReject>;
export type ContractOfferRejectMutationResult = Apollo.MutationResult<ContractOfferReject>;
export type ContractOfferRejectMutationOptions = Apollo.BaseMutationOptions<
  ContractOfferReject,
  ContractOfferRejectVariables
>;
