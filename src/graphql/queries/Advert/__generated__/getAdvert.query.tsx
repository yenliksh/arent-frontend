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
export type GetAdvertVariables = Types.Exact<{
  input: Types.MyApartmentAdRequest;
}>;

export type GetAdvert = {
  __typename: 'Query';
  rentAd__myRentAd: {
    __typename: 'ApartmentAdModel';
    rentPeriodType: Types.RentPeriodType;
    id: string;
    completeStep: number;
    rules?: {
      __typename: 'ApartmentAdRulesModel';
      allowedToHangingOut: boolean;
      allowedToSmoke: boolean;
      allowedWithChildren: boolean;
      allowedWithPets: boolean;
    } | null;
    shortTermRent?: {
      __typename: 'ApartmentAdShortTermRentModel';
      cancellationPolicy?: Types.ShortTermRentCancellationPolicyType | null;
      arrivalTime?: string | null;
      departureTime?: string | null;
      rentBookingType: Types.ShortTermRentBookingType;
    } | null;
    adDescription?: { __typename: 'ApartmentAdDescriptionModel'; name: string } | null;
  };
};

export const GetAdvertDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetAdvert' },
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
                { kind: 'Field', name: { kind: 'Name', value: 'rentPeriodType' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'completeStep' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'rules' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'allowedToHangingOut' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'allowedToSmoke' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'allowedWithChildren' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'allowedWithPets' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'shortTermRent' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'cancellationPolicy' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'arrivalTime' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'departureTime' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'rentBookingType' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'adDescription' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
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
 * __useGetAdvert__
 *
 * To run a query within a React component, call `useGetAdvert` and pass it any options that fit your needs.
 * When your component renders, `useGetAdvert` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdvert({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAdvert(baseOptions: Apollo.QueryHookOptions<GetAdvert, GetAdvertVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAdvert, GetAdvertVariables>(GetAdvertDocument, options);
}
export function useGetAdvertLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdvert, GetAdvertVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAdvert, GetAdvertVariables>(GetAdvertDocument, options);
}
export type GetAdvertHookResult = ReturnType<typeof useGetAdvert>;
export type GetAdvertLazyQueryHookResult = ReturnType<typeof useGetAdvertLazyQuery>;
export type GetAdvertQueryResult = Apollo.QueryResult<GetAdvert, GetAdvertVariables>;
