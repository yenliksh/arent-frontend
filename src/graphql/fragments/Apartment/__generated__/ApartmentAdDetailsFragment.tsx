/* eslint-disable simple-import-sort/imports */
/* eslint-disable import/order */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-redeclare */
/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable no-unused-vars */
import * as Types from '../../../../__generated__/types';

import { DocumentNode } from 'graphql';
export type apartmentAdDetailsFragment = {
  __typename: 'ApartmentAdDetailsModel';
  numberOfGuests: number;
  numberOfRooms: number;
};

export const apartmentAdDetailsFragment = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'apartmentAdDetailsFragment' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'ApartmentAdDetailsModel' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'numberOfGuests' } },
          { kind: 'Field', name: { kind: 'Name', value: 'numberOfRooms' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
