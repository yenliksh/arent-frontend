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
export type GetFilteredRentAdsForMapVariables = Types.Exact<{
  filter: Types.FindLongTermRentAdsFilterRequest;
}>;

export type GetFilteredRentAdsForMap = {
  __typename: 'Query';
  rentAd__find_longTermAdsCluster: {
    __typename: 'FindLongTermRentAdsClusterResponse';
    data: Array<{
      __typename: 'ApartmentAdClusterModel';
      cost: string;
      id: string;
      apartmentType: Types.ApartmentType;
      title: string;
      photo: string;
      lng: number;
      lat: number;
    }>;
    slugs: Array<{ __typename: 'SlugModel'; id: string; slug: string }>;
  };
};

export const GetFilteredRentAdsForMapDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetFilteredRentAdsForMap' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'FindLongTermRentAdsFilterRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rentAd__find_longTermAdsCluster' },
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
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'apartmentType' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'photo' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'lng' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'lat' } },
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
 * __useGetFilteredRentAdsForMap__
 *
 * To run a query within a React component, call `useGetFilteredRentAdsForMap` and pass it any options that fit your needs.
 * When your component renders, `useGetFilteredRentAdsForMap` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFilteredRentAdsForMap({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetFilteredRentAdsForMap(
  baseOptions: Apollo.QueryHookOptions<GetFilteredRentAdsForMap, GetFilteredRentAdsForMapVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetFilteredRentAdsForMap, GetFilteredRentAdsForMapVariables>(
    GetFilteredRentAdsForMapDocument,
    options,
  );
}
export function useGetFilteredRentAdsForMapLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetFilteredRentAdsForMap, GetFilteredRentAdsForMapVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetFilteredRentAdsForMap, GetFilteredRentAdsForMapVariables>(
    GetFilteredRentAdsForMapDocument,
    options,
  );
}
export type GetFilteredRentAdsForMapHookResult = ReturnType<typeof useGetFilteredRentAdsForMap>;
export type GetFilteredRentAdsForMapLazyQueryHookResult = ReturnType<typeof useGetFilteredRentAdsForMapLazyQuery>;
export type GetFilteredRentAdsForMapQueryResult = Apollo.QueryResult<
  GetFilteredRentAdsForMap,
  GetFilteredRentAdsForMapVariables
>;
