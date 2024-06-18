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
export type GetApartmentIdentificatorVariables = Types.Exact<{
  input: Types.FindApartmentAdIdentificatorRequest;
}>;

export type GetApartmentIdentificator = {
  __typename: 'Query';
  rentAdIdentificator__find: {
    __typename: 'ApartmentAdIdentificatorResponse';
    apartmentId: string;
    keywordsSeo: string;
    titleSeo: string;
    descriptionSeo: string;
  };
};

export const GetApartmentIdentificatorDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetApartmentIdentificator' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'FindApartmentAdIdentificatorRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rentAdIdentificator__find' },
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
                { kind: 'Field', name: { kind: 'Name', value: 'apartmentId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'keywordsSeo' } },
                { kind: 'Field', name: { kind: 'Name', value: 'titleSeo' } },
                { kind: 'Field', name: { kind: 'Name', value: 'descriptionSeo' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;

/**
 * __useGetApartmentIdentificator__
 *
 * To run a query within a React component, call `useGetApartmentIdentificator` and pass it any options that fit your needs.
 * When your component renders, `useGetApartmentIdentificator` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetApartmentIdentificator({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetApartmentIdentificator(
  baseOptions: Apollo.QueryHookOptions<GetApartmentIdentificator, GetApartmentIdentificatorVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetApartmentIdentificator, GetApartmentIdentificatorVariables>(
    GetApartmentIdentificatorDocument,
    options,
  );
}
export function useGetApartmentIdentificatorLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetApartmentIdentificator, GetApartmentIdentificatorVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetApartmentIdentificator, GetApartmentIdentificatorVariables>(
    GetApartmentIdentificatorDocument,
    options,
  );
}
export type GetApartmentIdentificatorHookResult = ReturnType<typeof useGetApartmentIdentificator>;
export type GetApartmentIdentificatorLazyQueryHookResult = ReturnType<typeof useGetApartmentIdentificatorLazyQuery>;
export type GetApartmentIdentificatorQueryResult = Apollo.QueryResult<
  GetApartmentIdentificator,
  GetApartmentIdentificatorVariables
>;
