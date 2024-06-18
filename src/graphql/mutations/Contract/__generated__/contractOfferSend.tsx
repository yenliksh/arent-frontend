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
export type ContractOfferSendVariables = Types.Exact<{
  input: Types.SendContractOfferRequest;
}>;

export type ContractOfferSend = {
  __typename: 'Mutation';
  contractOffer__send: {
    __typename: 'ContractResponse';
    contract?: { __typename: 'ContractChatModel'; id: string; status: Types.ContractStatus } | null;
    problem?: { __typename: 'ContractOfferAlreadyExistsProblem'; message: string } | null;
  };
};

export const ContractOfferSendDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'ContractOfferSend' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'SendContractOfferRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'contractOffer__send' },
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
export type ContractOfferSendMutationFn = Apollo.MutationFunction<ContractOfferSend, ContractOfferSendVariables>;

/**
 * __useContractOfferSend__
 *
 * To run a mutation, you first call `useContractOfferSend` within a React component and pass it any options that fit your needs.
 * When your component renders, `useContractOfferSend` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [contractOfferSend, { data, loading, error }] = useContractOfferSend({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useContractOfferSend(
  baseOptions?: Apollo.MutationHookOptions<ContractOfferSend, ContractOfferSendVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<ContractOfferSend, ContractOfferSendVariables>(ContractOfferSendDocument, options);
}
export type ContractOfferSendHookResult = ReturnType<typeof useContractOfferSend>;
export type ContractOfferSendMutationResult = Apollo.MutationResult<ContractOfferSend>;
export type ContractOfferSendMutationOptions = Apollo.BaseMutationOptions<
  ContractOfferSend,
  ContractOfferSendVariables
>;
