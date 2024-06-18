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
export type SetIdentityDocumentsVariables = Types.Exact<{
  input: Types.ProfileAddIdentityDocumentRequest;
}>;

export type SetIdentityDocuments = {
  __typename: 'Mutation';
  user__profile_addIdentityDocuments: {
    __typename: 'ProfileResponse';
    user: {
      __typename: 'UserMeModel';
      id: string;
      identityDocuments?: Array<string> | null;
      identityStatus: Types.IdentityStatusType;
    };
  };
};

export const SetIdentityDocumentsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SetIdentityDocuments' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ProfileAddIdentityDocumentRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user__profile_addIdentityDocuments' },
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
                      { kind: 'Field', name: { kind: 'Name', value: 'identityDocuments' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'identityStatus' } },
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
export type SetIdentityDocumentsMutationFn = Apollo.MutationFunction<
  SetIdentityDocuments,
  SetIdentityDocumentsVariables
>;

/**
 * __useSetIdentityDocuments__
 *
 * To run a mutation, you first call `useSetIdentityDocuments` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetIdentityDocuments` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setIdentityDocuments, { data, loading, error }] = useSetIdentityDocuments({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSetIdentityDocuments(
  baseOptions?: Apollo.MutationHookOptions<SetIdentityDocuments, SetIdentityDocumentsVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SetIdentityDocuments, SetIdentityDocumentsVariables>(SetIdentityDocumentsDocument, options);
}
export type SetIdentityDocumentsHookResult = ReturnType<typeof useSetIdentityDocuments>;
export type SetIdentityDocumentsMutationResult = Apollo.MutationResult<SetIdentityDocuments>;
export type SetIdentityDocumentsMutationOptions = Apollo.BaseMutationOptions<
  SetIdentityDocuments,
  SetIdentityDocumentsVariables
>;
