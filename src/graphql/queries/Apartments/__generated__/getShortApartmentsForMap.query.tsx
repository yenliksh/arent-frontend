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
export type GetShortRentAdsForMapVariables = Types.Exact<{
  filter: Types.FindShortTermRentAdsFilterRequest;
}>;

export type GetShortRentAdsForMap = {
  __typename: 'Query';
  rentAd__find_shortTermAdsCluster: {
    __typename: 'FindShortTermRentAdsClusterResponse';
    data: Array<{
      __typename: 'ApartmentAdClusterModel';
      cost: string;
      apartmentType: Types.ApartmentType;
      title: string;
      photo: string;
      lng: number;
      lat: number;
      id: string;
    }>;
    slugs: Array<{ __typename: 'SlugModel'; id: string; slug: string }>;
  };
};

export const GetShortRentAdsForMapDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetShortRentAdsForMap' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'FindShortTermRentAdsFilterRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rentAd__find_shortTermAdsCluster' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'data' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'cost' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'apartmentType' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'photo' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'lng' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'lat' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'slugs' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;

/**
 * __useGetShortRentAdsForMap__
 *
 * To run a query within a React component, call `useGetShortRentAdsForMap` and pass it any options that fit your needs.
 * When your component renders, `useGetShortRentAdsForMap` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShortRentAdsForMap({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetShortRentAdsForMap(
  baseOptions: Apollo.QueryHookOptions<GetShortRentAdsForMap, GetShortRentAdsForMapVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetShortRentAdsForMap, GetShortRentAdsForMapVariables>(GetShortRentAdsForMapDocument, options);
}
export function useGetShortRentAdsForMapLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetShortRentAdsForMap, GetShortRentAdsForMapVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetShortRentAdsForMap, GetShortRentAdsForMapVariables>(
    GetShortRentAdsForMapDocument,
    options,
  );
}
export type GetShortRentAdsForMapHookResult = ReturnType<typeof useGetShortRentAdsForMap>;
export type GetShortRentAdsForMapLazyQueryHookResult = ReturnType<typeof useGetShortRentAdsForMapLazyQuery>;
export type GetShortRentAdsForMapQueryResult = Apollo.QueryResult<
  GetShortRentAdsForMap,
  GetShortRentAdsForMapVariables
>;
