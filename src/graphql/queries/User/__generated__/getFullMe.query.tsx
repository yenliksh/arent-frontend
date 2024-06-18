/* eslint-disable simple-import-sort/imports */
/* eslint-disable import/order */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-redeclare */
/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable no-unused-vars */
import * as Types from '../../../../__generated__/types';

import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetFullMeVariables = Types.Exact<{ [key: string]: never }>;

export type GetFullMe = {
  __typename: 'Query';
  user__me: {
    __typename: 'UserMeModel';
    id: string;
    firstName: string;
    lastName: string;
    middleName?: string | null;
    birthDate?: string | null;
    isEmailVerified: boolean;
    avatarKey?: string | null;
    gender?: Types.GenderType | null;
    identityStatus: Types.IdentityStatusType;
    email: string;
    phone?: string | null;
    isPhoneApproved: boolean;
    identityDocuments?: Array<string> | null;
    identityRejectReason?: string | null;
    guarantors?: Array<{ __typename: 'GuarantorModel'; firstName: string; lastName: string; phone: string }> | null;
  };
};

export const GetFullMeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetFullMe' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user__me' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'middleName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'birthDate' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isEmailVerified' } },
                { kind: 'Field', name: { kind: 'Name', value: 'avatarKey' } },
                { kind: 'Field', name: { kind: 'Name', value: 'gender' } },
                { kind: 'Field', name: { kind: 'Name', value: 'identityStatus' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                { kind: 'Field', name: { kind: 'Name', value: 'phone' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'guarantors' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'phone' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'isPhoneApproved' } },
                { kind: 'Field', name: { kind: 'Name', value: 'identityDocuments' } },
                { kind: 'Field', name: { kind: 'Name', value: 'identityRejectReason' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;

/**
 * __useGetFullMe__
 *
 * To run a query within a React component, call `useGetFullMe` and pass it any options that fit your needs.
 * When your component renders, `useGetFullMe` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFullMe({
 *   variables: {
 *   },
 * });
 */
export function useGetFullMe(baseOptions?: Apollo.QueryHookOptions<GetFullMe, GetFullMeVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetFullMe, GetFullMeVariables>(GetFullMeDocument, options);
}
export function useGetFullMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFullMe, GetFullMeVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetFullMe, GetFullMeVariables>(GetFullMeDocument, options);
}
export type GetFullMeHookResult = ReturnType<typeof useGetFullMe>;
export type GetFullMeLazyQueryHookResult = ReturnType<typeof useGetFullMeLazyQuery>;
export type GetFullMeQueryResult = Apollo.QueryResult<GetFullMe, GetFullMeVariables>;
