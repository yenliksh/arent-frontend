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
export type GetStepVariables = Types.Exact<{
  input: Types.MyApartmentAdRequest;
}>;

export type GetStep = {
  __typename: 'Query';
  rentAd__myRentAd: { __typename: 'ApartmentAdModel'; id: string; completeStep: number };
};

export const GetStepDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetStep' },
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
                { kind: 'Field', name: { kind: 'Name', value: 'completeStep' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;

/**
 * __useGetStep__
 *
 * To run a query within a React component, call `useGetStep` and pass it any options that fit your needs.
 * When your component renders, `useGetStep` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStep({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetStep(baseOptions: Apollo.QueryHookOptions<GetStep, GetStepVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetStep, GetStepVariables>(GetStepDocument, options);
}
export function useGetStepLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStep, GetStepVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetStep, GetStepVariables>(GetStepDocument, options);
}
export type GetStepHookResult = ReturnType<typeof useGetStep>;
export type GetStepLazyQueryHookResult = ReturnType<typeof useGetStepLazyQuery>;
export type GetStepQueryResult = Apollo.QueryResult<GetStep, GetStepVariables>;
