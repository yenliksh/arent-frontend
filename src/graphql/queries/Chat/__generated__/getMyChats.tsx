/* eslint-disable simple-import-sort/imports */
/* eslint-disable import/order */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-redeclare */
/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable no-unused-vars */
import * as Types from '../../../../__generated__/types';

import { DocumentNode } from 'graphql';
import { chatFragment } from '../../../fragments/Chat/__generated__/ChatFragment';
import { pageAfterCursorInfoFragment } from '../../../fragments/Pagination/__generated__/PageAfterCursorInfoFragment';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetMyChatsVariables = Types.Exact<{
  input: Types.MyChatsRequest;
}>;

export type GetMyChats = {
  __typename: 'Query';
  chat__myChats: {
    __typename: 'ChatPaginationResponse';
    isChatsExist: boolean;
    data?: Array<{
      __typename: 'ChatModel';
      id: string;
      isActive: boolean;
      unreadMessageCount: number;
      apartmentAdIds: {
        __typename: 'ApartmentAdIdsModel';
        longTermRentId?: string | null;
        shortTermRentId?: string | null;
      };
      apartmentAdPhotos?: Array<{ __typename: 'ApartmentAdMediaModel'; fileKey: string }> | null;
      lastMessage?: {
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
      contract: {
        __typename: 'ContractChatModel';
        id: string;
        shortTermRentCancellationPolicyType?: Types.ShortTermRentCancellationPolicyType | null;
        apartmentRentPeriodType: Types.ApartmentRentPeriodType;
        cost: string;
        arrivalDate?: string | null;
        isPending: boolean;
        isTemporary: boolean;
        departureDate?: string | null;
        status: Types.ContractStatus;
        apartmentAd?: {
          __typename: 'ApartmentAdViewModel';
          id: string;
          details?: { __typename: 'ApartmentAdDetailsModel'; numberOfRooms: number } | null;
        } | null;
        baseApartmentAdData: {
          __typename: 'BaseContractApartmentAdDataModel';
          title: string;
          address: {
            __typename: 'BaseContractAddressDataModel';
            city: string;
            country: string;
            houseNumber: string;
            region?: string | null;
            street: string;
            geoPoint: { __typename: 'GeoPointModel'; lat: number; lng: number };
          };
        };
        guests: {
          __typename: 'ApartmentGuestsModel';
          numberOfAdult: number;
          numberOfChildren: number;
          numberOfPets: number;
        };
        rules?: {
          __typename: 'ContractRulesModel';
          allowedToHangingOut: boolean;
          allowedToSmoke: boolean;
          allowedWithChildren: boolean;
          allowedWithPets: boolean;
        } | null;
      };
      members: Array<{
        __typename: 'UserModel';
        id: string;
        firstName: string;
        avatarKey?: string | null;
        isIdentityApproved: boolean;
      }>;
    }> | null;
    pageInfo?: {
      __typename: 'PageAfterCursorInfo';
      afterCursor?: string | null;
      count: number;
      perPage: number;
    } | null;
  };
};

export const GetMyChatsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetMyChats' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'MyChatsRequest' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'chat__myChats' },
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
                    selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'chatFragment' } }],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'isChatsExist' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'FragmentSpread', name: { kind: 'Name', value: 'pageAfterCursorInfoFragment' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...chatFragment.definitions,
    ...pageAfterCursorInfoFragment.definitions,
  ],
} as unknown as DocumentNode;

/**
 * __useGetMyChats__
 *
 * To run a query within a React component, call `useGetMyChats` and pass it any options that fit your needs.
 * When your component renders, `useGetMyChats` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyChats({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetMyChats(baseOptions: Apollo.QueryHookOptions<GetMyChats, GetMyChatsVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetMyChats, GetMyChatsVariables>(GetMyChatsDocument, options);
}
export function useGetMyChatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyChats, GetMyChatsVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetMyChats, GetMyChatsVariables>(GetMyChatsDocument, options);
}
export type GetMyChatsHookResult = ReturnType<typeof useGetMyChats>;
export type GetMyChatsLazyQueryHookResult = ReturnType<typeof useGetMyChatsLazyQuery>;
export type GetMyChatsQueryResult = Apollo.QueryResult<GetMyChats, GetMyChatsVariables>;
