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
export type GetFirstStepAdvertVariables = Types.Exact<{
  input: Types.MyApartmentAdRequest;
}>;

export type GetFirstStepAdvert = {
  __typename: 'Query';
  rentAd__myRentAd: {
    __typename: 'ApartmentAdModel';
    rentPeriodType: Types.RentPeriodType;
    id: string;
    completeStep: number;
    shortTermRent?: { __typename: 'ApartmentAdShortTermRentModel'; cost: string } | null;
    longTermRent?: { __typename: 'ApartmentAdLongTermRentModel'; cost: string } | null;
  };
};

export const GetFirstStepAdvertDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetFirstStepAdvert' },
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
                  name: { kind: 'Name', value: 'shortTermRent' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'cost' } }],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'longTermRent' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'cost' } }],
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
 * __useGetFirstStepAdvert__
 *
 * To run a query within a React component, call `useGetFirstStepAdvert` and pass it any options that fit your needs.
 * When your component renders, `useGetFirstStepAdvert` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFirstStepAdvert({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetFirstStepAdvert(
  baseOptions: Apollo.QueryHookOptions<GetFirstStepAdvert, GetFirstStepAdvertVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetFirstStepAdvert, GetFirstStepAdvertVariables>(GetFirstStepAdvertDocument, options);
}
export function useGetFirstStepAdvertLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetFirstStepAdvert, GetFirstStepAdvertVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetFirstStepAdvert, GetFirstStepAdvertVariables>(GetFirstStepAdvertDocument, options);
}
export type GetFirstStepAdvertHookResult = ReturnType<typeof useGetFirstStepAdvert>;
export type GetFirstStepAdvertLazyQueryHookResult = ReturnType<typeof useGetFirstStepAdvertLazyQuery>;
export type GetFirstStepAdvertQueryResult = Apollo.QueryResult<GetFirstStepAdvert, GetFirstStepAdvertVariables>;
