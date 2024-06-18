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
export type SendUserComplaintVariables = Types.Exact<{
  input: Types.CreateUserComplaintRequest;
}>;

export type SendUserComplaint = {
  __typename: 'Mutation';
  user_complaint__send: { __typename: 'UserComplaintResponse'; ok: boolean };
};

export const SendUserComplaintDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SendUserComplaint' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'CreateUserComplaintRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user_complaint__send' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'ok' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export type SendUserComplaintMutationFn = Apollo.MutationFunction<SendUserComplaint, SendUserComplaintVariables>;

/**
 * __useSendUserComplaint__
 *
 * To run a mutation, you first call `useSendUserComplaint` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendUserComplaint` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendUserComplaint, { data, loading, error }] = useSendUserComplaint({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSendUserComplaint(
  baseOptions?: Apollo.MutationHookOptions<SendUserComplaint, SendUserComplaintVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SendUserComplaint, SendUserComplaintVariables>(SendUserComplaintDocument, options);
}
export type SendUserComplaintHookResult = ReturnType<typeof useSendUserComplaint>;
export type SendUserComplaintMutationResult = Apollo.MutationResult<SendUserComplaint>;
export type SendUserComplaintMutationOptions = Apollo.BaseMutationOptions<
  SendUserComplaint,
  SendUserComplaintVariables
>;
