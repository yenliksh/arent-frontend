/* eslint-disable simple-import-sort/imports */
/* eslint-disable import/order */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-redeclare */
/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable no-unused-vars */
import * as Types from '../../../../__generated__/types';

import { DocumentNode } from 'graphql';
export type apartmentAdRulesModelFragment = {
  __typename: 'ApartmentAdRulesModel';
  allowedToHangingOut: boolean;
  allowedToSmoke: boolean;
  allowedWithChildren: boolean;
  allowedWithPets: boolean;
};

export const apartmentAdRulesModelFragment = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'apartmentAdRulesModelFragment' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'ApartmentAdRulesModel' } },
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
} as unknown as DocumentNode;
