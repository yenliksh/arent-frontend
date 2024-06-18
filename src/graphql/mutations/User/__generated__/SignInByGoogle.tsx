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
export type SignInByGoogleVariables = Types.Exact<{
  input: Types.SignInByGoogleRequest;
}>;

export type SignInByGoogle = {
  __typename: 'Mutation';
  user__signInByGoogle_verifyToken: {
    __typename: 'SignInByGoogleResponse';
    refreshToken?: string | null;
    token?: string | null;
    problem?: { __typename: 'UndefinedReturnGoogleOauthProblem'; message: string } | null;
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

export const SignInByGoogleDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SignInByGoogle' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'SignInByGoogleRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user__signInByGoogle_verifyToken' },
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
                { kind: 'Field', name: { kind: 'Name', value: 'refreshToken' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'problem' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'message' } }],
                  },
                },
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
export type SignInByGoogleMutationFn = Apollo.MutationFunction<SignInByGoogle, SignInByGoogleVariables>;

/**
 * __useSignInByGoogle__
 *
 * To run a mutation, you first call `useSignInByGoogle` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInByGoogle` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInByGoogle, { data, loading, error }] = useSignInByGoogle({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignInByGoogle(baseOptions?: Apollo.MutationHookOptions<SignInByGoogle, SignInByGoogleVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignInByGoogle, SignInByGoogleVariables>(SignInByGoogleDocument, options);
}
export type SignInByGoogleHookResult = ReturnType<typeof useSignInByGoogle>;
export type SignInByGoogleMutationResult = Apollo.MutationResult<SignInByGoogle>;
export type SignInByGoogleMutationOptions = Apollo.BaseMutationOptions<SignInByGoogle, SignInByGoogleVariables>;
