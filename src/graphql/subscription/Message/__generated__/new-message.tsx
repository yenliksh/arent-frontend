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
export type NewMessageVariables = Types.Exact<{
  userChatRole: Types.UserChatRole;
}>;

export type NewMessage = {
  __typename: 'Subscription';
  newMessage: {
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
  };
};

export const NewMessageDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'subscription',
      name: { kind: 'Name', value: 'NewMessage' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'userChatRole' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'UserChatRole' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'newMessage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'userChatRole' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'userChatRole' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'MessageFragment' } }],
            },
          },
        ],
      },
    },
    ...MessageFragment.definitions,
  ],
} as unknown as DocumentNode;

/**
 * __useNewMessage__
 *
 * To run a query within a React component, call `useNewMessage` and pass it any options that fit your needs.
 * When your component renders, `useNewMessage` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewMessage({
 *   variables: {
 *      userChatRole: // value for 'userChatRole'
 *   },
 * });
 */
export function useNewMessage(baseOptions: Apollo.SubscriptionHookOptions<NewMessage, NewMessageVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<NewMessage, NewMessageVariables>(NewMessageDocument, options);
}
export type NewMessageHookResult = ReturnType<typeof useNewMessage>;
export type NewMessageSubscriptionResult = Apollo.SubscriptionResult<NewMessage>;
