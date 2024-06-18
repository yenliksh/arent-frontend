/* eslint-disable simple-import-sort/imports */
/* eslint-disable import/order */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-redeclare */
/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable no-unused-vars */
import * as Types from '../../../../__generated__/types';

import { DocumentNode } from 'graphql';
export type apartmentContractRequestFragment = {
  __typename: 'ContractRequestModel';
  apartmentAdId?: string | null;
  apartmentRentPeriodType: Types.ApartmentRentPeriodType;
  arrivalDate?: string | null;
  createdAt: string;
  deletedAt?: string | null;
  departureDate?: string | null;
  id: string;
  status: Types.ContractRequestStatus;
  tenantId?: string | null;
  updatedAt: string;
  guests: { __typename: 'ApartmentGuestsModel'; numberOfAdult: number; numberOfChildren: number; numberOfPets: number };
};

export const apartmentContractRequestFragment = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'apartmentContractRequestFragment' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'ContractRequestModel' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'apartmentAdId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'apartmentRentPeriodType' } },
          { kind: 'Field', name: { kind: 'Name', value: 'arrivalDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'deletedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'departureDate' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tenantId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
