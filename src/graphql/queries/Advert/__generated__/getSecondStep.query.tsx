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
export type GetSecondStepVariables = Types.Exact<{
  input: Types.MyApartmentAdRequest;
}>;

export type GetSecondStep = {
  __typename: 'Query';
  rentAd__myRentAd: {
    __typename: 'ApartmentAdModel';
    id: string;
    apartmentType: Types.ApartmentType;
    apartmentCategory: Types.ApartmentCategory;
  };
};

export const GetSecondStepDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetSecondStep' },
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
                { kind: 'Field', name: { kind: 'Name', value: 'apartmentType' } },
                { kind: 'Field', name: { kind: 'Name', value: 'apartmentCategory' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;

/**
 * __useGetSecondStep__
 *
 * To run a query within a React component, call `useGetSecondStep` and pass it any options that fit your needs.
 * When your component renders, `useGetSecondStep` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSecondStep({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetSecondStep(baseOptions: Apollo.QueryHookOptions<GetSecondStep, GetSecondStepVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetSecondStep, GetSecondStepVariables>(GetSecondStepDocument, options);
}
export function useGetSecondStepLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetSecondStep, GetSecondStepVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetSecondStep, GetSecondStepVariables>(GetSecondStepDocument, options);
}
export type GetSecondStepHookResult = ReturnType<typeof useGetSecondStep>;
export type GetSecondStepLazyQueryHookResult = ReturnType<typeof useGetSecondStepLazyQuery>;
export type GetSecondStepQueryResult = Apollo.QueryResult<GetSecondStep, GetSecondStepVariables>;
