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
export type GetApartmentsIdentificatorByApIdsVariables = Types.Exact<{
  input: Types.FindApartmentAdsIdentificatorsRequest;
}>;

export type GetApartmentsIdentificatorByApIds = {
  __typename: 'Query';
  rentAdIdentificators__findByRentIds: {
    __typename: 'ApartmentAdsSlugResponse';
    slugs: Array<{ __typename: 'SlugModel'; id: string; slug: string; apartmentId: string }>;
  };
};

export const GetApartmentsIdentificatorByApIdsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetApartmentsIdentificatorByApIds' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'FindApartmentAdsIdentificatorsRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rentAdIdentificators__findByRentIds' },
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
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'slugs' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'apartmentId' } },
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
 * __useGetApartmentsIdentificatorByApIds__
 *
 * To run a query within a React component, call `useGetApartmentsIdentificatorByApIds` and pass it any options that fit your needs.
 * When your component renders, `useGetApartmentsIdentificatorByApIds` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetApartmentsIdentificatorByApIds({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetApartmentsIdentificatorByApIds(
  baseOptions: Apollo.QueryHookOptions<GetApartmentsIdentificatorByApIds, GetApartmentsIdentificatorByApIdsVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetApartmentsIdentificatorByApIds, GetApartmentsIdentificatorByApIdsVariables>(
    GetApartmentsIdentificatorByApIdsDocument,
    options,
  );
}
export function useGetApartmentsIdentificatorByApIdsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetApartmentsIdentificatorByApIds,
    GetApartmentsIdentificatorByApIdsVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetApartmentsIdentificatorByApIds, GetApartmentsIdentificatorByApIdsVariables>(
    GetApartmentsIdentificatorByApIdsDocument,
    options,
  );
}
export type GetApartmentsIdentificatorByApIdsHookResult = ReturnType<typeof useGetApartmentsIdentificatorByApIds>;
export type GetApartmentsIdentificatorByApIdsLazyQueryHookResult = ReturnType<
  typeof useGetApartmentsIdentificatorByApIdsLazyQuery
>;
export type GetApartmentsIdentificatorByApIdsQueryResult = Apollo.QueryResult<
  GetApartmentsIdentificatorByApIds,
  GetApartmentsIdentificatorByApIdsVariables
>;
