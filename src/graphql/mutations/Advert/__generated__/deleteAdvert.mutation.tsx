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
export type DeleteRentAdvertVariables = Types.Exact<{
  input: Types.DeleteApartmentAdRequest;
}>;

export type DeleteRentAdvert = { __typename: 'Mutation'; rentAd__delete: boolean };

export const DeleteRentAdvertDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteRentAdvert' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'DeleteApartmentAdRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rentAd__delete' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export type DeleteRentAdvertMutationFn = Apollo.MutationFunction<DeleteRentAdvert, DeleteRentAdvertVariables>;

/**
 * __useDeleteRentAdvert__
 *
 * To run a mutation, you first call `useDeleteRentAdvert` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRentAdvert` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRentAdvert, { data, loading, error }] = useDeleteRentAdvert({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteRentAdvert(
  baseOptions?: Apollo.MutationHookOptions<DeleteRentAdvert, DeleteRentAdvertVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteRentAdvert, DeleteRentAdvertVariables>(DeleteRentAdvertDocument, options);
}
export type DeleteRentAdvertHookResult = ReturnType<typeof useDeleteRentAdvert>;
export type DeleteRentAdvertMutationResult = Apollo.MutationResult<DeleteRentAdvert>;
export type DeleteRentAdvertMutationOptions = Apollo.BaseMutationOptions<DeleteRentAdvert, DeleteRentAdvertVariables>;
