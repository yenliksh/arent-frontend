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
export type EditAvatarVariables = Types.Exact<{
  input: Types.ProfileEditAvatarRequest;
}>;

export type EditAvatar = {
  __typename: 'Mutation';
  user__profile_editAvatar: {
    __typename: 'ProfileResponse';
    user: { __typename: 'UserMeModel'; id: string; avatarKey?: string | null };
  };
};

export const EditAvatarDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'EditAvatar' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ProfileEditAvatarRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user__profile_editAvatar' },
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
                      { kind: 'Field', name: { kind: 'Name', value: 'avatarKey' } },
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
export type EditAvatarMutationFn = Apollo.MutationFunction<EditAvatar, EditAvatarVariables>;

/**
 * __useEditAvatar__
 *
 * To run a mutation, you first call `useEditAvatar` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditAvatar` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editAvatar, { data, loading, error }] = useEditAvatar({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditAvatar(baseOptions?: Apollo.MutationHookOptions<EditAvatar, EditAvatarVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<EditAvatar, EditAvatarVariables>(EditAvatarDocument, options);
}
export type EditAvatarHookResult = ReturnType<typeof useEditAvatar>;
export type EditAvatarMutationResult = Apollo.MutationResult<EditAvatar>;
export type EditAvatarMutationOptions = Apollo.BaseMutationOptions<EditAvatar, EditAvatarVariables>;
