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
export type ContractRequestAcceptVariables = Types.Exact<{
  input: Types.AcceptRequest;
}>;

export type ContractRequestAccept = {
  __typename: 'Mutation';
  contract_request__accept: { __typename: 'ContractRequestAcceptResponse'; chatId?: string | null };
};

export const ContractRequestAcceptDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'ContractRequestAccept' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'AcceptRequest' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'contract_request__accept' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'chatId' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export type ContractRequestAcceptMutationFn = Apollo.MutationFunction<
  ContractRequestAccept,
  ContractRequestAcceptVariables
>;

/**
 * __useContractRequestAccept__
 *
 * To run a mutation, you first call `useContractRequestAccept` within a React component and pass it any options that fit your needs.
 * When your component renders, `useContractRequestAccept` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [contractRequestAccept, { data, loading, error }] = useContractRequestAccept({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useContractRequestAccept(
  baseOptions?: Apollo.MutationHookOptions<ContractRequestAccept, ContractRequestAcceptVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<ContractRequestAccept, ContractRequestAcceptVariables>(
    ContractRequestAcceptDocument,
    options,
  );
}
export type ContractRequestAcceptHookResult = ReturnType<typeof useContractRequestAccept>;
export type ContractRequestAcceptMutationResult = Apollo.MutationResult<ContractRequestAccept>;
export type ContractRequestAcceptMutationOptions = Apollo.BaseMutationOptions<
  ContractRequestAccept,
  ContractRequestAcceptVariables
>;
