/* eslint-disable simple-import-sort/imports */
/* eslint-disable import/order */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-redeclare */
/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable no-unused-vars */
import * as Types from '../../../../__generated__/types';

import { DocumentNode } from 'graphql';
export type myApartmentFragment = {
  __typename: 'ApartmentAdModel';
  id: string;
  innopayCardId?: string | null;
  rentPeriodType: Types.RentPeriodType;
  landlord: {
    __typename: 'UserMeModel';
    id: string;
    identityDocuments?: Array<string> | null;
    isPhoneApproved: boolean;
    identityStatus: Types.IdentityStatusType;
  };
  photos: Array<{ __typename: 'ApartmentAdMediaModel'; fileKey: string }>;
  description?: { __typename: 'ApartmentAdDescriptionModel'; name: string } | null;
  address?: { __typename: 'ApartmentAdAddressModel'; city: string; street: string; houseNumber: string } | null;
};

export const myApartmentFragment = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'myApartmentFragment' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'ApartmentAdModel' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'innopayCardId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rentPeriodType' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'landlord' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'identityDocuments' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isPhoneApproved' } },
                { kind: 'Field', name: { kind: 'Name', value: 'identityStatus' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'photos' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'fileKey' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'description' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'address' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'city' } },
                { kind: 'Field', name: { kind: 'Name', value: 'street' } },
                { kind: 'Field', name: { kind: 'Name', value: 'houseNumber' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
