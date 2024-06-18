/* eslint-disable simple-import-sort/imports */
/* eslint-disable import/order */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-redeclare */
/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable no-unused-vars */
import * as Types from '../../../../__generated__/types';

import { DocumentNode } from 'graphql';
import { apartmentAdRulesModelFragment } from '../../Apartment/__generated__/ApartmentAdRulesFragment';
export type MessageFragment = {
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

export const MessageFragment = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'MessageFragment' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'MessageModel' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'chatId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'text' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'systemMessageType' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mediaUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mediaWeight' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mediaName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'transactionsMeta' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'withdrawFundsDate' } },
                { kind: 'Field', name: { kind: 'Name', value: 'startDate' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'contractData' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'arrivalDate' } },
                { kind: 'Field', name: { kind: 'Name', value: 'departureDate' } },
                { kind: 'Field', name: { kind: 'Name', value: 'comment' } },
                { kind: 'Field', name: { kind: 'Name', value: 'cost' } },
                { kind: 'Field', name: { kind: 'Name', value: 'apartmentRentPeriodType' } },
                { kind: 'Field', name: { kind: 'Name', value: 'shortTermRentCancellationPolicyType' } },
                { kind: 'Field', name: { kind: 'Name', value: 'shortTermRentBookingType' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'rules' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'FragmentSpread', name: { kind: 'Name', value: 'apartmentAdRulesModelFragment' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'sender' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'avatarKey' } },
                { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
              ],
            },
          },
        ],
      },
    },
    ...apartmentAdRulesModelFragment.definitions,
  ],
} as unknown as DocumentNode;
