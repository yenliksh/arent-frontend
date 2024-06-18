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
export type GetFourthVariables = Types.Exact<{
  input: Types.MyApartmentAdRequest;
}>;

export type GetFourth = {
  __typename: 'Query';
  rentAd__myRentAd: {
    __typename: 'ApartmentAdModel';
    id: string;
    apartmentCategory: Types.ApartmentCategory;
    address?: {
      __typename: 'ApartmentAdAddressModel';
      lat: number;
      lng: number;
      street: string;
      houseNumber: string;
      country: string;
      city: string;
    } | null;
  };
};

export const GetFourthDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetFourth' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'MyApartmentAdRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rentAd__myRentAd' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'apartmentCategory' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'address' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'lat' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'lng' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'street' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'houseNumber' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'country' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'city' } },
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
 * __useGetFourth__
 *
 * To run a query within a React component, call `useGetFourth` and pass it any options that fit your needs.
 * When your component renders, `useGetFourth` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFourth({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetFourth(baseOptions: Apollo.QueryHookOptions<GetFourth, GetFourthVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetFourth, GetFourthVariables>(GetFourthDocument, options);
}
export function useGetFourthLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFourth, GetFourthVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetFourth, GetFourthVariables>(GetFourthDocument, options);
}
export type GetFourthHookResult = ReturnType<typeof useGetFourth>;
export type GetFourthLazyQueryHookResult = ReturnType<typeof useGetFourthLazyQuery>;
export type GetFourthQueryResult = Apollo.QueryResult<GetFourth, GetFourthVariables>;
