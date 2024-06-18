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
export type GetSixthStepVariables = Types.Exact<{
  input: Types.MyApartmentAdRequest;
}>;

export type GetSixthStep = {
  __typename: 'Query';
  rentAd__myRentAd: {
    __typename: 'ApartmentAdModel';
    id: string;
    description?: {
      __typename: 'ApartmentAdDescriptionModel';
      name: string;
      description?: string | null;
      freeParking?: boolean | null;
      quite?: boolean | null;
      selfCheckIn?: boolean | null;
      workSpace?: boolean | null;
      forFamily?: boolean | null;
      remoteView?: boolean | null;
    } | null;
  };
};

export const GetSixthStepDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetSixthStep' },
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
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'description' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'freeParking' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'quite' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'selfCheckIn' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'workSpace' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'forFamily' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'remoteView' } },
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
 * __useGetSixthStep__
 *
 * To run a query within a React component, call `useGetSixthStep` and pass it any options that fit your needs.
 * When your component renders, `useGetSixthStep` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSixthStep({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetSixthStep(baseOptions: Apollo.QueryHookOptions<GetSixthStep, GetSixthStepVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetSixthStep, GetSixthStepVariables>(GetSixthStepDocument, options);
}
export function useGetSixthStepLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetSixthStep, GetSixthStepVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetSixthStep, GetSixthStepVariables>(GetSixthStepDocument, options);
}
export type GetSixthStepHookResult = ReturnType<typeof useGetSixthStep>;
export type GetSixthStepLazyQueryHookResult = ReturnType<typeof useGetSixthStepLazyQuery>;
export type GetSixthStepQueryResult = Apollo.QueryResult<GetSixthStep, GetSixthStepVariables>;
