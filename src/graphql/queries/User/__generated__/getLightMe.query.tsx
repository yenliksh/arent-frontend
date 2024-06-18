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
export type GetLightMeVariables = Types.Exact<{ [key: string]: never }>;

export type GetLightMe = {
  __typename: 'Query';
  user__me: { __typename: 'UserMeModel'; id: string; firstName: string; avatarKey?: string | null };
};

export const GetLightMeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetLightMe' },
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
                { kind: 'Field', name: { kind: 'Name', value: 'avatarKey' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;

/**
 * __useGetLightMe__
 *
 * To run a query within a React component, call `useGetLightMe` and pass it any options that fit your needs.
 * When your component renders, `useGetLightMe` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLightMe({
 *   variables: {
 *   },
 * });
 */
export function useGetLightMe(baseOptions?: Apollo.QueryHookOptions<GetLightMe, GetLightMeVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetLightMe, GetLightMeVariables>(GetLightMeDocument, options);
}
export function useGetLightMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLightMe, GetLightMeVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetLightMe, GetLightMeVariables>(GetLightMeDocument, options);
}
export type GetLightMeHookResult = ReturnType<typeof useGetLightMe>;
export type GetLightMeLazyQueryHookResult = ReturnType<typeof useGetLightMeLazyQuery>;
export type GetLightMeQueryResult = Apollo.QueryResult<GetLightMe, GetLightMeVariables>;
