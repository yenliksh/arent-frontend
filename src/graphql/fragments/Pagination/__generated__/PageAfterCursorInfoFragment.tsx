/* eslint-disable simple-import-sort/imports */
/* eslint-disable import/order */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-redeclare */
/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable no-unused-vars */
import * as Types from '../../../../__generated__/types';

import { DocumentNode } from 'graphql';
export type pageAfterCursorInfoFragment = {
  __typename: 'PageAfterCursorInfo';
  afterCursor?: string | null;
  count: number;
  perPage: number;
};

export const pageAfterCursorInfoFragment = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageAfterCursorInfoFragment' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'PageAfterCursorInfo' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'afterCursor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'count' } },
          { kind: 'Field', name: { kind: 'Name', value: 'perPage' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
