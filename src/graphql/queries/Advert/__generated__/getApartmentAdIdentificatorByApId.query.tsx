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
export type GetApartmentIdentificatorByApIdVariables = Types.Exact<{
  input: Types.FindApartmentAdIdentificatorRequest;
}>;

export type GetApartmentIdentificatorByApId = {
  __typename: 'Query';
  rentAdIdentificator__findByRentId: { __typename: 'ApartmentAdSlugResponse'; titleSeo: string; adSearchId: number };
};

export const GetApartmentIdentificatorByApIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetApartmentIdentificatorByApId' },
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
            name: { kind: 'Name', value: 'rentAdIdentificator__findByRentId' },
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
                { kind: 'Field', name: { kind: 'Name', value: 'titleSeo' } },
                { kind: 'Field', name: { kind: 'Name', value: 'adSearchId' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;

/**
 * __useGetApartmentIdentificatorByApId__
 *
 * To run a query within a React component, call `useGetApartmentIdentificatorByApId` and pass it any options that fit your needs.
 * When your component renders, `useGetApartmentIdentificatorByApId` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetApartmentIdentificatorByApId({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetApartmentIdentificatorByApId(
  baseOptions: Apollo.QueryHookOptions<GetApartmentIdentificatorByApId, GetApartmentIdentificatorByApIdVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetApartmentIdentificatorByApId, GetApartmentIdentificatorByApIdVariables>(
    GetApartmentIdentificatorByApIdDocument,
    options,
  );
}
export function useGetApartmentIdentificatorByApIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetApartmentIdentificatorByApId, GetApartmentIdentificatorByApIdVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetApartmentIdentificatorByApId, GetApartmentIdentificatorByApIdVariables>(
    GetApartmentIdentificatorByApIdDocument,
    options,
  );
}
export type GetApartmentIdentificatorByApIdHookResult = ReturnType<typeof useGetApartmentIdentificatorByApId>;
export type GetApartmentIdentificatorByApIdLazyQueryHookResult = ReturnType<
  typeof useGetApartmentIdentificatorByApIdLazyQuery
>;
export type GetApartmentIdentificatorByApIdQueryResult = Apollo.QueryResult<
  GetApartmentIdentificatorByApId,
  GetApartmentIdentificatorByApIdVariables
>;
