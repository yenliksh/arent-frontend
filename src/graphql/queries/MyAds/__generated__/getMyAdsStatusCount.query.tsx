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
export type GetMyAdsStatusCountVariables = Types.Exact<{ [key: string]: never }>;

export type GetMyAdsStatusCount = {
  __typename: 'Query';
  rentAd__myRentAd_statusCount: {
    __typename: 'MyApartmentAdStatusCountResponse';
    ACTIVE: number;
    DRAFT: number;
    PAUSED: number;
    PROCESSING: number;
    PUBLISHED: number;
  };
};

export const GetMyAdsStatusCountDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetMyAdsStatusCount' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rentAd__myRentAd_statusCount' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'ACTIVE' } },
                { kind: 'Field', name: { kind: 'Name', value: 'DRAFT' } },
                { kind: 'Field', name: { kind: 'Name', value: 'PAUSED' } },
                { kind: 'Field', name: { kind: 'Name', value: 'PROCESSING' } },
                { kind: 'Field', name: { kind: 'Name', value: 'PUBLISHED' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;

/**
 * __useGetMyAdsStatusCount__
 *
 * To run a query within a React component, call `useGetMyAdsStatusCount` and pass it any options that fit your needs.
 * When your component renders, `useGetMyAdsStatusCount` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyAdsStatusCount({
 *   variables: {
 *   },
 * });
 */
export function useGetMyAdsStatusCount(
  baseOptions?: Apollo.QueryHookOptions<GetMyAdsStatusCount, GetMyAdsStatusCountVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetMyAdsStatusCount, GetMyAdsStatusCountVariables>(GetMyAdsStatusCountDocument, options);
}
export function useGetMyAdsStatusCountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetMyAdsStatusCount, GetMyAdsStatusCountVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetMyAdsStatusCount, GetMyAdsStatusCountVariables>(GetMyAdsStatusCountDocument, options);
}
export type GetMyAdsStatusCountHookResult = ReturnType<typeof useGetMyAdsStatusCount>;
export type GetMyAdsStatusCountLazyQueryHookResult = ReturnType<typeof useGetMyAdsStatusCountLazyQuery>;
export type GetMyAdsStatusCountQueryResult = Apollo.QueryResult<GetMyAdsStatusCount, GetMyAdsStatusCountVariables>;
