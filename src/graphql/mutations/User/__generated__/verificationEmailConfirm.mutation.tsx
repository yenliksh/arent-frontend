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
export type ConfirmVerificationEmailVariables = Types.Exact<{
  input: Types.ProfileConfirmVerificationEmailRequest;
}>;

export type ConfirmVerificationEmail = {
  __typename: 'Mutation';
  user__profile_verificationEmailConfirm: {
    __typename: 'ProfileResponse';
    user: { __typename: 'UserMeModel'; id: string; isEmailVerified: boolean };
  };
};

export const ConfirmVerificationEmailDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'ConfirmVerificationEmail' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ProfileConfirmVerificationEmailRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user__profile_verificationEmailConfirm' },
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
                      { kind: 'Field', name: { kind: 'Name', value: 'isEmailVerified' } },
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
export type ConfirmVerificationEmailMutationFn = Apollo.MutationFunction<
  ConfirmVerificationEmail,
  ConfirmVerificationEmailVariables
>;

/**
 * __useConfirmVerificationEmail__
 *
 * To run a mutation, you first call `useConfirmVerificationEmail` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmVerificationEmail` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmVerificationEmail, { data, loading, error }] = useConfirmVerificationEmail({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useConfirmVerificationEmail(
  baseOptions?: Apollo.MutationHookOptions<ConfirmVerificationEmail, ConfirmVerificationEmailVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<ConfirmVerificationEmail, ConfirmVerificationEmailVariables>(
    ConfirmVerificationEmailDocument,
    options,
  );
}
export type ConfirmVerificationEmailHookResult = ReturnType<typeof useConfirmVerificationEmail>;
export type ConfirmVerificationEmailMutationResult = Apollo.MutationResult<ConfirmVerificationEmail>;
export type ConfirmVerificationEmailMutationOptions = Apollo.BaseMutationOptions<
  ConfirmVerificationEmail,
  ConfirmVerificationEmailVariables
>;
