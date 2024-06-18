/* eslint-disable simple-import-sort/imports */
/* eslint-disable import/order */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-redeclare */
/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable no-unused-vars */
import * as Types from '../../../../__generated__/types';

import { DocumentNode } from 'graphql';
import { BaseContractAddressFragment } from './BaseContractAddressFragment';
export type ContractChatFragment = {
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
  guests: { __typename: 'ApartmentGuestsModel'; numberOfAdult: number; numberOfChildren: number; numberOfPets: number };
  rules?: {
    __typename: 'ContractRulesModel';
    allowedToHangingOut: boolean;
    allowedToSmoke: boolean;
    allowedWithChildren: boolean;
    allowedWithPets: boolean;
  } | null;
};

export const ContractChatFragment = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ContractChatFragment' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'ContractChatModel' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'shortTermRentCancellationPolicyType' } },
          { kind: 'Field', name: { kind: 'Name', value: 'apartmentRentPeriodType' } },
          { kind: 'Field', name: { kind: 'Name', value: 'cost' } },
          { kind: 'Field', name: { kind: 'Name', value: 'arrivalDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isPending' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isTemporary' } },
          { kind: 'Field', name: { kind: 'Name', value: 'departureDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'apartmentAd' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'details' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'numberOfRooms' } }],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'baseApartmentAdData' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'address' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'FragmentSpread', name: { kind: 'Name', value: 'BaseContractAddressFragment' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'guests' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'numberOfAdult' } },
                { kind: 'Field', name: { kind: 'Name', value: 'numberOfChildren' } },
                { kind: 'Field', name: { kind: 'Name', value: 'numberOfPets' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rules' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'allowedToHangingOut' } },
                { kind: 'Field', name: { kind: 'Name', value: 'allowedToSmoke' } },
                { kind: 'Field', name: { kind: 'Name', value: 'allowedWithChildren' } },
                { kind: 'Field', name: { kind: 'Name', value: 'allowedWithPets' } },
              ],
            },
          },
        ],
      },
    },
    ...BaseContractAddressFragment.definitions,
  ],
} as unknown as DocumentNode;
