/* eslint-disable simple-import-sort/imports */
/* eslint-disable import/order */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-redeclare */
/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable no-unused-vars */
import * as Types from '../../../../__generated__/types';

import { DocumentNode } from 'graphql';
export type apartmentLandlordFragment = {
  __typename: 'UserModel';
  avatarKey?: string | null;
  birthDate?: string | null;
  createdAt: string;
  deletedAt?: string | null;
  firstName: string;
  gender?: Types.GenderType | null;
  id: string;
  isIdentityApproved: boolean;
  isPhoneApproved: boolean;
  lastName: string;
  middleName?: string | null;
  updatedAt: string;
};

export const apartmentLandlordFragment = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'apartmentLandlordFragment' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'UserModel' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'avatarKey' } },
          { kind: 'Field', name: { kind: 'Name', value: 'birthDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'deletedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'gender' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isIdentityApproved' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isPhoneApproved' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'middleName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
