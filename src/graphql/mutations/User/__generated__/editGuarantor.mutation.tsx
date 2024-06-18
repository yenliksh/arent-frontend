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
export type EditGuarantorVariables = Types.Exact<{
  input: Types.ProfileEditGuarantorRequest;
}>;

export type EditGuarantor = {
  __typename: 'Mutation';
  user__profile_editGuarantor: {
    __typename: 'ProfileResponse';
    user: {
      __typename: 'UserMeModel';
      id: string;
      guarantors?: Array<{ __typename: 'GuarantorModel'; phone: string; lastName: string; firstName: string }> | null;
    };
  };
};

export const EditGuarantorDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'EditGuarantor' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ProfileEditGuarantorRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user__profile_editGuarantor' },
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
export type EditGuarantorMutationFn = Apollo.MutationFunction<EditGuarantor, EditGuarantorVariables>;

/**
 * __useEditGuarantor__
 *
 * To run a mutation, you first call `useEditGuarantor` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditGuarantor` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editGuarantor, { data, loading, error }] = useEditGuarantor({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditGuarantor(baseOptions?: Apollo.MutationHookOptions<EditGuarantor, EditGuarantorVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<EditGuarantor, EditGuarantorVariables>(EditGuarantorDocument, options);
}
export type EditGuarantorHookResult = ReturnType<typeof useEditGuarantor>;
export type EditGuarantorMutationResult = Apollo.MutationResult<EditGuarantor>;
export type EditGuarantorMutationOptions = Apollo.BaseMutationOptions<EditGuarantor, EditGuarantorVariables>;
