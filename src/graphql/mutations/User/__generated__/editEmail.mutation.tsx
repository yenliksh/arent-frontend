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
export type EditEmailVariables = Types.Exact<{
  input: Types.ProfileEditEmailRequest;
}>;

export type EditEmail = {
  __typename: 'Mutation';
  user__profile_editEmail: {
    __typename: 'ProfileEditEmailResponse';
    problem?: { __typename: 'EmailAlreadyUsedProblem'; message: string } | null;
    user?: { __typename: 'UserMeModel'; id: string; email: string } | null;
  };
};

export const EditEmailDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'EditEmail' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ProfileEditEmailRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user__profile_editEmail' },
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
                  name: { kind: 'Name', value: 'problem' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'message' } }],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
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
export type EditEmailMutationFn = Apollo.MutationFunction<EditEmail, EditEmailVariables>;

/**
 * __useEditEmail__
 *
 * To run a mutation, you first call `useEditEmail` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditEmail` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editEmail, { data, loading, error }] = useEditEmail({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditEmail(baseOptions?: Apollo.MutationHookOptions<EditEmail, EditEmailVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<EditEmail, EditEmailVariables>(EditEmailDocument, options);
}
export type EditEmailHookResult = ReturnType<typeof useEditEmail>;
export type EditEmailMutationResult = Apollo.MutationResult<EditEmail>;
export type EditEmailMutationOptions = Apollo.BaseMutationOptions<EditEmail, EditEmailVariables>;
