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
export type CreateUserVariables = Types.Exact<{
  input: Types.SignUpByPhoneCreateUserRequest;
}>;

export type CreateUser = {
  __typename: 'Mutation';
  user__signUpByPhone_createUser: {
    __typename: 'SignUpByPhoneCreateUserResponse';
    refreshToken?: string | null;
    token?: string | null;
    problem?: { __typename: 'EmailAlreadyUsedProblem'; message: string } | null;
    user?: {
      __typename: 'UserMeModel';
      id: string;
      lastName: string;
      firstName: string;
      phone?: string | null;
      email: string;
      birthDate?: string | null;
      avatarKey?: string | null;
      createdAt: string;
    } | null;
  };
};

export const CreateUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'SignUpByPhoneCreateUserRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user__signUpByPhone_createUser' },
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
                { kind: 'Field', name: { kind: 'Name', value: 'refreshToken' } },
                { kind: 'Field', name: { kind: 'Name', value: 'token' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'phone' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'birthDate' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'avatarKey' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
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
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUser, CreateUserVariables>;

/**
 * __useCreateUser__
 *
 * To run a mutation, you first call `useCreateUser` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUser` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUser, { data, loading, error }] = useCreateUser({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUser(baseOptions?: Apollo.MutationHookOptions<CreateUser, CreateUserVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateUser, CreateUserVariables>(CreateUserDocument, options);
}
export type CreateUserHookResult = ReturnType<typeof useCreateUser>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUser>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUser, CreateUserVariables>;
