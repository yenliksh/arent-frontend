/* eslint-disable simple-import-sort/imports */
/* eslint-disable import/order */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-redeclare */
/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable no-unused-vars */
import * as Types from '../../../../__generated__/types';

import { DocumentNode } from 'graphql';
export type BaseContractAddressFragment = {
  __typename: 'BaseContractAddressDataModel';
  city: string;
  country: string;
  houseNumber: string;
  region?: string | null;
  street: string;
  geoPoint: { __typename: 'GeoPointModel'; lat: number; lng: number };
};

export const BaseContractAddressFragment = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseContractAddressFragment' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'BaseContractAddressDataModel' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'country' } },
          { kind: 'Field', name: { kind: 'Name', value: 'houseNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'region' } },
          { kind: 'Field', name: { kind: 'Name', value: 'street' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'geoPoint' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'lat' } },
                { kind: 'Field', name: { kind: 'Name', value: 'lng' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
