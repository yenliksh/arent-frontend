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
export type deleteCardVariables = Types.Exact<{
  input: Types.DeleteCardRequest;
}>;

export type deleteCard = {
  __typename: 'Mutation';
  innopay_card__delete: {
    __typename: 'InnopayCardResponse';
    ok: boolean;
    problem?:
      | { __typename: 'DeletingCardIsActiveProblem'; message: string }
      | { __typename: 'InnopayServiceBadRequestProblem'; message: string }
      | null;
  };
};

export const deleteCardDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'deleteCard' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'DeleteCardRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'innopay_card__delete' },
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
                { kind: 'Field', name: { kind: 'Name', value: 'ok' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'problem' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'DeletingCardIsActiveProblem' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{ kind: 'Field', name: { kind: 'Name', value: 'message' } }],
                        },
                      },
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'InnopayServiceBadRequestProblem' },
                        },
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
      },
    },
  ],
} as unknown as DocumentNode;
export type deleteCardMutationFn = Apollo.MutationFunction<deleteCard, deleteCardVariables>;

/**
 * __usedeleteCard__
 *
 * To run a mutation, you first call `usedeleteCard` within a React component and pass it any options that fit your needs.
 * When your component renders, `usedeleteCard` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCard, { data, loading, error }] = usedeleteCard({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usedeleteCard(baseOptions?: Apollo.MutationHookOptions<deleteCard, deleteCardVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<deleteCard, deleteCardVariables>(deleteCardDocument, options);
}
export type deleteCardHookResult = ReturnType<typeof usedeleteCard>;
export type deleteCardMutationResult = Apollo.MutationResult<deleteCard>;
export type deleteCardMutationOptions = Apollo.BaseMutationOptions<deleteCard, deleteCardVariables>;
