/* eslint-disable simple-import-sort/imports */
/* eslint-disable import/order */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-redeclare */
/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable no-unused-vars */
import * as Types from '../../../../__generated__/types';

import { DocumentNode } from 'graphql';
import { MessageFragment } from '../../../fragments/Message/__generated__/Message';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type MessageSendVariables = Types.Exact<{
  input: Types.SendMessageRequest;
}>;

export type MessageSend = {
  __typename: 'Mutation';
  message__send: {
    __typename: 'MessageResponse';
    message?: {
      __typename: 'MessageModel';
      id: string;
      chatId: string;
      text?: string | null;
      type: Types.MessageType;
      createdAt: string;
      systemMessageType?: Types.SystemMessageType | null;
      mediaUrl?: string | null;
      mediaWeight?: number | null;
      mediaName?: string | null;
      status: Types.MessageStatus;
      transactionsMeta: Array<{
        __typename: 'TransactionMetaModel';
        withdrawFundsDate: string;
        startDate: string;
        status: Types.PaymentTransactionStatus;
      }>;
      contractData?: {
        __typename: 'SystemMessageDataModel';
        arrivalDate?: string | null;
        departureDate?: string | null;
        comment?: string | null;
        cost?: string | null;
        apartmentRentPeriodType?: Types.ApartmentRentPeriodType | null;
        shortTermRentCancellationPolicyType?: Types.ShortTermRentCancellationPolicyType | null;
        shortTermRentBookingType?: Types.ShortTermRentBookingType | null;
        rules?: {
          __typename: 'ApartmentAdRulesModel';
          allowedToHangingOut: boolean;
          allowedToSmoke: boolean;
          allowedWithChildren: boolean;
          allowedWithPets: boolean;
        } | null;
      } | null;
      sender?: { __typename: 'UserModel'; id: string; avatarKey?: string | null; firstName: string } | null;
    } | null;
  };
};

export const MessageSendDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'MessageSend' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'SendMessageRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'message__send' },
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
                  name: { kind: 'Name', value: 'message' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'MessageFragment' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...MessageFragment.definitions,
  ],
} as unknown as DocumentNode;
export type MessageSendMutationFn = Apollo.MutationFunction<MessageSend, MessageSendVariables>;

/**
 * __useMessageSend__
 *
 * To run a mutation, you first call `useMessageSend` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMessageSend` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [messageSend, { data, loading, error }] = useMessageSend({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMessageSend(baseOptions?: Apollo.MutationHookOptions<MessageSend, MessageSendVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<MessageSend, MessageSendVariables>(MessageSendDocument, options);
}
export type MessageSendHookResult = ReturnType<typeof useMessageSend>;
export type MessageSendMutationResult = Apollo.MutationResult<MessageSend>;
export type MessageSendMutationOptions = Apollo.BaseMutationOptions<MessageSend, MessageSendVariables>;
