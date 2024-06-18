/* eslint-disable simple-import-sort/imports */
/* eslint-disable import/order */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-redeclare */
/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable no-unused-vars */
import * as Types from '../../../../__generated__/types';

import { DocumentNode } from 'graphql';
import { MessageFragment } from '../../../fragments/Message/__generated__/Message';
import { pageBeforeCursorInfoFragment } from '../../../fragments/Pagination/__generated__/PageBeforeCursorInfoFragment';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetChatMessagesVariables = Types.Exact<{
  input: Types.ChatMessagesRequest;
}>;

export type GetChatMessages = {
  __typename: 'Query';
  chat__messages: {
    __typename: 'MessagePayload';
    data?: Array<{
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
    }> | null;
    pageInfo?: {
      __typename: 'PageBeforeCursorInfo';
      beforeCursor?: string | null;
      count: number;
      perPage: number;
    } | null;
  };
};

export const GetChatMessagesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetChatMessages' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ChatMessagesRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'chat__messages' },
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
                  name: { kind: 'Name', value: 'data' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'MessageFragment' } }],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'FragmentSpread', name: { kind: 'Name', value: 'pageBeforeCursorInfoFragment' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...MessageFragment.definitions,
    ...pageBeforeCursorInfoFragment.definitions,
  ],
} as unknown as DocumentNode;

/**
 * __useGetChatMessages__
 *
 * To run a query within a React component, call `useGetChatMessages` and pass it any options that fit your needs.
 * When your component renders, `useGetChatMessages` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChatMessages({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetChatMessages(baseOptions: Apollo.QueryHookOptions<GetChatMessages, GetChatMessagesVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetChatMessages, GetChatMessagesVariables>(GetChatMessagesDocument, options);
}
export function useGetChatMessagesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetChatMessages, GetChatMessagesVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetChatMessages, GetChatMessagesVariables>(GetChatMessagesDocument, options);
}
export type GetChatMessagesHookResult = ReturnType<typeof useGetChatMessages>;
export type GetChatMessagesLazyQueryHookResult = ReturnType<typeof useGetChatMessagesLazyQuery>;
export type GetChatMessagesQueryResult = Apollo.QueryResult<GetChatMessages, GetChatMessagesVariables>;
