/* eslint-disable simple-import-sort/imports */
/* eslint-disable import/order */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-redeclare */
/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable no-unused-vars */
import * as Types from '../../../../__generated__/types';

import { DocumentNode } from 'graphql';
export type apartmentAddressFragment = {
  __typename: 'ApartmentAdAddressModel';
  city: string;
  country: string;
  houseNumber: string;
  lat: number;
  lng: number;
  region?: string | null;
  street: string;
};

export const apartmentAddressFragment = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'apartmentAddressFragment' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'ApartmentAdAddressModel' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'country' } },
          { kind: 'Field', name: { kind: 'Name', value: 'houseNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lat' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lng' } },
          { kind: 'Field', name: { kind: 'Name', value: 'region' } },
          { kind: 'Field', name: { kind: 'Name', value: 'street' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
