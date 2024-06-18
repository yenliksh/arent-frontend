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
export type DeleteGuarantorVariables = Types.Exact<{ [key: string]: never }>;

export type DeleteGuarantor = {
  __typename: 'Mutation';
  user__profile_deleteGuarantor: {
    __typename: 'ProfileResponse';
    user: {
      __typename: 'UserMeModel';
      id: string;
      guarantors?: Array<{ __typename: 'GuarantorModel'; phone: string; lastName: string; firstName: string }> | null;
    };
  };
};

export const DeleteGuarantorDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteGuarantor' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user__profile_deleteGuarantor' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'guarantors' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'phone' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
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
      },
    },
  ],
} as unknown as DocumentNode;
export type DeleteGuarantorMutationFn = Apollo.MutationFunction<DeleteGuarantor, DeleteGuarantorVariables>;

/**
 * __useDeleteGuarantor__
 *
 * To run a mutation, you first call `useDeleteGuarantor` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGuarantor` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteGuarantor, { data, loading, error }] = useDeleteGuarantor({
 *   variables: {
 *   },
 * });
 */
export function useDeleteGuarantor(
  baseOptions?: Apollo.MutationHookOptions<DeleteGuarantor, DeleteGuarantorVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteGuarantor, DeleteGuarantorVariables>(DeleteGuarantorDocument, options);
}
export type DeleteGuarantorHookResult = ReturnType<typeof useDeleteGuarantor>;
export type DeleteGuarantorMutationResult = Apollo.MutationResult<DeleteGuarantor>;
export type DeleteGuarantorMutationOptions = Apollo.BaseMutationOptions<DeleteGuarantor, DeleteGuarantorVariables>;
