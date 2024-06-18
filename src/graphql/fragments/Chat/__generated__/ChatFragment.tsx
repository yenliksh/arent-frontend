/* eslint-disable simple-import-sort/imports */
/* eslint-disable import/order */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-redeclare */
/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable no-unused-vars */
import * as Types from '../../../../__generated__/types';

import { DocumentNode } from 'graphql';
import { MessageFragment } from '../../Message/__generated__/Message';
import { ContractChatFragment } from '../../Contract/__generated__/Contract';
export type chatFragment = {
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
};

export const chatFragment = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'chatFragment' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'ChatModel' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isActive' } },
          { kind: 'Field', name: { kind: 'Name', value: 'unreadMessageCount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'apartmentAdIds' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'longTermRentId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'shortTermRentId' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'apartmentAdPhotos' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'fileKey' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'lastMessage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'MessageFragment' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'contract' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'ContractChatFragment' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'members' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'avatarKey' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isIdentityApproved' } },
              ],
            },
          },
        ],
      },
    },
    ...MessageFragment.definitions,
    ...ContractChatFragment.definitions,
  ],
} as unknown as DocumentNode;
