/* eslint-disable simple-import-sort/imports */
/* eslint-disable import/order */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-redeclare */
/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable no-unused-vars */
import * as Types from '../../../../__generated__/types';

import { DocumentNode } from 'graphql';
export type pageBeforeCursorInfoFragment = {
  __typename: 'PageBeforeCursorInfo';
  beforeCursor?: string | null;
  count: number;
  perPage: number;
};

export const pageBeforeCursorInfoFragment = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageBeforeCursorInfoFragment' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'PageBeforeCursorInfo' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'beforeCursor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'count' } },
          { kind: 'Field', name: { kind: 'Name', value: 'perPage' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
