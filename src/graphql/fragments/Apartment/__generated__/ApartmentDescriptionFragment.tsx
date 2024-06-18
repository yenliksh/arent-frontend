/* eslint-disable simple-import-sort/imports */
/* eslint-disable import/order */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-redeclare */
/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable no-unused-vars */
import * as Types from '../../../../__generated__/types';

import { DocumentNode } from 'graphql';
export type apartmentDescriptionFragment = {
  __typename: 'ApartmentAdDescriptionModel';
  description?: string | null;
  forFamily?: boolean | null;
  freeParking?: boolean | null;
  name: string;
  quite?: boolean | null;
  remoteView?: boolean | null;
  selfCheckIn?: boolean | null;
  workSpace?: boolean | null;
};

export const apartmentDescriptionFragment = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'apartmentDescriptionFragment' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'ApartmentAdDescriptionModel' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'forFamily' } },
          { kind: 'Field', name: { kind: 'Name', value: 'freeParking' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quite' } },
          { kind: 'Field', name: { kind: 'Name', value: 'remoteView' } },
          { kind: 'Field', name: { kind: 'Name', value: 'selfCheckIn' } },
          { kind: 'Field', name: { kind: 'Name', value: 'workSpace' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
