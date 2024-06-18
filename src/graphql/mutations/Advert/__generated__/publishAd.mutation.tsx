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
export type PublishAdvertAsyncVariables = Types.Exact<{
  input: Types.PublishApartmentAdRequest;
}>;

export type PublishAdvertAsync = {
  __typename: 'Mutation';
  rentAd__publish: {
    __typename: 'PublishApartmentAdResponse';
    apartmentAd?: { __typename: 'ApartmentAdModel'; id: string } | null;
    problem?: { __typename: 'LongTermRentIsRentedProblem'; message: string } | null;
  };
};

export const PublishAdvertAsyncDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'PublishAdvertAsync' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'PublishApartmentAdRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rentAd__publish' },
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
                  name: { kind: 'Name', value: 'apartmentAd' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
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
export type PublishAdvertAsyncMutationFn = Apollo.MutationFunction<PublishAdvertAsync, PublishAdvertAsyncVariables>;

/**
 * __usePublishAdvertAsync__
 *
 * To run a mutation, you first call `usePublishAdvertAsync` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePublishAdvertAsync` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [publishAdvertAsync, { data, loading, error }] = usePublishAdvertAsync({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePublishAdvertAsync(
  baseOptions?: Apollo.MutationHookOptions<PublishAdvertAsync, PublishAdvertAsyncVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<PublishAdvertAsync, PublishAdvertAsyncVariables>(PublishAdvertAsyncDocument, options);
}
export type PublishAdvertAsyncHookResult = ReturnType<typeof usePublishAdvertAsync>;
export type PublishAdvertAsyncMutationResult = Apollo.MutationResult<PublishAdvertAsync>;
export type PublishAdvertAsyncMutationOptions = Apollo.BaseMutationOptions<
  PublishAdvertAsync,
  PublishAdvertAsyncVariables
>;
