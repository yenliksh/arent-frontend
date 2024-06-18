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
export type EditPersonalInfoVariables = Types.Exact<{
  input: Types.ProfileEditPersonalInfoRequest;
}>;

export type EditPersonalInfo = {
  __typename: 'Mutation';
  user__profile_editPersonalInfo: {
    __typename: 'ProfileResponse';
    user: {
      __typename: 'UserMeModel';
      id: string;
      birthDate?: string | null;
      firstName: string;
      middleName?: string | null;
      lastName: string;
      gender?: Types.GenderType | null;
    };
  };
};

export const EditPersonalInfoDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'EditPersonalInfo' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ProfileEditPersonalInfoRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user__profile_editPersonalInfo' },
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
                      { kind: 'Field', name: { kind: 'Name', value: 'birthDate' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'middleName' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'gender' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'birthDate' } },
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
export type EditPersonalInfoMutationFn = Apollo.MutationFunction<EditPersonalInfo, EditPersonalInfoVariables>;

/**
 * __useEditPersonalInfo__
 *
 * To run a mutation, you first call `useEditPersonalInfo` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditPersonalInfo` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editPersonalInfo, { data, loading, error }] = useEditPersonalInfo({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditPersonalInfo(
  baseOptions?: Apollo.MutationHookOptions<EditPersonalInfo, EditPersonalInfoVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<EditPersonalInfo, EditPersonalInfoVariables>(EditPersonalInfoDocument, options);
}
export type EditPersonalInfoHookResult = ReturnType<typeof useEditPersonalInfo>;
export type EditPersonalInfoMutationResult = Apollo.MutationResult<EditPersonalInfo>;
export type EditPersonalInfoMutationOptions = Apollo.BaseMutationOptions<EditPersonalInfo, EditPersonalInfoVariables>;