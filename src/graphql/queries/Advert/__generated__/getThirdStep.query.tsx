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
export type GetThirdStepVariables = Types.Exact<{
  input: Types.MyApartmentAdRequest;
}>;

export type GetThirdStep = {
  __typename: 'Query';
  rentAd__myRentAd: {
    __typename: 'ApartmentAdModel';
    id: string;
    apartmentCategory: Types.ApartmentCategory;
    details?: { __typename: 'ApartmentAdDetailsModel'; numberOfRooms: number; numberOfGuests: number } | null;
  };
};

export const GetThirdStepDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetThirdStep' },
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
                  name: { kind: 'Name', value: 'details' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'numberOfRooms' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'numberOfGuests' } },
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
 * __useGetThirdStep__
 *
 * To run a query within a React component, call `useGetThirdStep` and pass it any options that fit your needs.
 * When your component renders, `useGetThirdStep` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetThirdStep({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetThirdStep(baseOptions: Apollo.QueryHookOptions<GetThirdStep, GetThirdStepVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetThirdStep, GetThirdStepVariables>(GetThirdStepDocument, options);
}
export function useGetThirdStepLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetThirdStep, GetThirdStepVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetThirdStep, GetThirdStepVariables>(GetThirdStepDocument, options);
}
export type GetThirdStepHookResult = ReturnType<typeof useGetThirdStep>;
export type GetThirdStepLazyQueryHookResult = ReturnType<typeof useGetThirdStepLazyQuery>;
export type GetThirdStepQueryResult = Apollo.QueryResult<GetThirdStep, GetThirdStepVariables>;
