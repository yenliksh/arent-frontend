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
export type GetFilteredRentAdsListVariables = Types.Exact<{
  filter: Types.FindLongTermRentAdsFilterRequest;
  pagination: Types.BaseOffsetPaginationRequest;
}>;

export type GetFilteredRentAdsList = {
  __typename: 'Query';
  rentAd__find_longTermAds: {
    __typename: 'FindLongTermRentAdsResponse';
    data?: Array<{
      __typename: 'ApartmentAdLongTermRentViewModel';
      apartmentAdId: string;
      apartmentAd: {
        __typename: 'ApartmentAdViewModel';
        id: string;
        apartmentType: Types.ApartmentType;
        rentPeriodType: Types.RentPeriodType;
        details?: { __typename: 'ApartmentAdDetailsModel'; numberOfRooms: number; numberOfGuests: number } | null;
        description?: { __typename: 'ApartmentAdDescriptionModel'; name: string } | null;
        longTermRent?: { __typename: 'ApartmentAdLongTermRentViewModel'; cost: string; id: string } | null;
        address?: {
          __typename: 'ApartmentAdAddressModel';
          region?: string | null;
          lat: number;
          city: string;
          lng: number;
          street: string;
          houseNumber: string;
        } | null;
        photos: Array<{ __typename: 'ApartmentAdMediaModel'; fileKey: string; order: number }>;
      };
    }> | null;
    pageInfo?: {
      __typename: 'BaseOffsetPaginationInfoModel';
      totalItems: number;
      currentPage: number;
      totalPages: number;
      limit: number;
    } | null;
    slugs: Array<{ __typename: 'SlugModel'; id: string; slug: string }>;
  };
};

export const GetFilteredRentAdsListDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetFilteredRentAdsList' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'FindLongTermRentAdsFilterRequest' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'pagination' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'BaseOffsetPaginationRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rentAd__find_longTermAds' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pagination' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'pagination' } },
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
                      { kind: 'Field', name: { kind: 'Name', value: 'apartmentAdId' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'apartmentAd' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'apartmentType' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'details' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'numberOfRooms' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'numberOfGuests' } },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'description' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'longTermRent' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'cost' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                ],
                              },
                            },
                            { kind: 'Field', name: { kind: 'Name', value: 'rentPeriodType' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'address' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'region' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'lat' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'city' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'lng' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'street' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'houseNumber' } },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'photos' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'fileKey' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'order' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'totalItems' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'currentPage' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'totalPages' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'limit' } },
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
 * __useGetFilteredRentAdsList__
 *
 * To run a query within a React component, call `useGetFilteredRentAdsList` and pass it any options that fit your needs.
 * When your component renders, `useGetFilteredRentAdsList` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFilteredRentAdsList({
 *   variables: {
 *      filter: // value for 'filter'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useGetFilteredRentAdsList(
  baseOptions: Apollo.QueryHookOptions<GetFilteredRentAdsList, GetFilteredRentAdsListVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetFilteredRentAdsList, GetFilteredRentAdsListVariables>(
    GetFilteredRentAdsListDocument,
    options,
  );
}
export function useGetFilteredRentAdsListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetFilteredRentAdsList, GetFilteredRentAdsListVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetFilteredRentAdsList, GetFilteredRentAdsListVariables>(
    GetFilteredRentAdsListDocument,
    options,
  );
}
export type GetFilteredRentAdsListHookResult = ReturnType<typeof useGetFilteredRentAdsList>;
export type GetFilteredRentAdsListLazyQueryHookResult = ReturnType<typeof useGetFilteredRentAdsListLazyQuery>;
export type GetFilteredRentAdsListQueryResult = Apollo.QueryResult<
  GetFilteredRentAdsList,
  GetFilteredRentAdsListVariables
>;
