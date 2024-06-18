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
export type GetFifthStepVariables = Types.Exact<{
  input: Types.MyApartmentAdRequest;
}>;

export type GetFifthStep = {
  __typename: 'Query';
  rentAd__myRentAd: {
    __typename: 'ApartmentAdModel';
    id: string;
    apartmentCategory: Types.ApartmentCategory;
    photos: Array<{ __typename: 'ApartmentAdMediaModel'; fileKey: string; order: number }>;
    adDescription?: { __typename: 'ApartmentAdDescriptionModel'; name: string } | null;
  };
};

export const GetFifthStepDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetFifthStep' },
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
                  name: { kind: 'Name', value: 'photos' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'fileKey' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'order' } },
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
 * __useGetFifthStep__
 *
 * To run a query within a React component, call `useGetFifthStep` and pass it any options that fit your needs.
 * When your component renders, `useGetFifthStep` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFifthStep({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetFifthStep(baseOptions: Apollo.QueryHookOptions<GetFifthStep, GetFifthStepVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetFifthStep, GetFifthStepVariables>(GetFifthStepDocument, options);
}
export function useGetFifthStepLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetFifthStep, GetFifthStepVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetFifthStep, GetFifthStepVariables>(GetFifthStepDocument, options);
}
export type GetFifthStepHookResult = ReturnType<typeof useGetFifthStep>;
export type GetFifthStepLazyQueryHookResult = ReturnType<typeof useGetFifthStepLazyQuery>;
export type GetFifthStepQueryResult = Apollo.QueryResult<GetFifthStep, GetFifthStepVariables>;
