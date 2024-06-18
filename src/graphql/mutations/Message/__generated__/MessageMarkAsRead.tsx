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
export type MessageMarkAsReadVariables = Types.Exact<{
  input: Types.MarkMessageAsReadRequest;
}>;

export type MessageMarkAsRead = { __typename: 'Mutation'; message__mark_as_read: boolean };

export const MessageMarkAsReadDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'MessageMarkAsRead' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'MarkMessageAsReadRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'message__mark_as_read' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export type MessageMarkAsReadMutationFn = Apollo.MutationFunction<MessageMarkAsRead, MessageMarkAsReadVariables>;

/**
 * __useMessageMarkAsRead__
 *
 * To run a mutation, you first call `useMessageMarkAsRead` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMessageMarkAsRead` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [messageMarkAsRead, { data, loading, error }] = useMessageMarkAsRead({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMessageMarkAsRead(
  baseOptions?: Apollo.MutationHookOptions<MessageMarkAsRead, MessageMarkAsReadVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<MessageMarkAsRead, MessageMarkAsReadVariables>(MessageMarkAsReadDocument, options);
}
export type MessageMarkAsReadHookResult = ReturnType<typeof useMessageMarkAsRead>;
export type MessageMarkAsReadMutationResult = Apollo.MutationResult<MessageMarkAsRead>;
export type MessageMarkAsReadMutationOptions = Apollo.BaseMutationOptions<
  MessageMarkAsRead,
  MessageMarkAsReadVariables
>;
