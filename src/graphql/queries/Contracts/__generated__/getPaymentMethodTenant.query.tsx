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
export type GetTenantPaymentMethodVariables = Types.Exact<{
  input: Types.TenantContractCardRequest;
}>;

export type GetTenantPaymentMethod = {
  __typename: 'Query';
  innopay__tenant_contractCard: {
    __typename: 'InnopayCardModel';
    panMasked: string;
    id: string;
    cardType: Types.InnopayCardType;
    cnpCardId: number;
  };
};

export const GetTenantPaymentMethodDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetTenantPaymentMethod' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'TenantContractCardRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'innopay__tenant_contractCard' },
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
                { kind: 'Field', name: { kind: 'Name', value: 'panMasked' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'panMasked' } },
                { kind: 'Field', name: { kind: 'Name', value: 'cardType' } },
                { kind: 'Field', name: { kind: 'Name', value: 'cnpCardId' } },
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;

/**
 * __useGetTenantPaymentMethod__
 *
 * To run a query within a React component, call `useGetTenantPaymentMethod` and pass it any options that fit your needs.
 * When your component renders, `useGetTenantPaymentMethod` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTenantPaymentMethod({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetTenantPaymentMethod(
  baseOptions: Apollo.QueryHookOptions<GetTenantPaymentMethod, GetTenantPaymentMethodVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTenantPaymentMethod, GetTenantPaymentMethodVariables>(
    GetTenantPaymentMethodDocument,
    options,
  );
}
export function useGetTenantPaymentMethodLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetTenantPaymentMethod, GetTenantPaymentMethodVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTenantPaymentMethod, GetTenantPaymentMethodVariables>(
    GetTenantPaymentMethodDocument,
    options,
  );
}
export type GetTenantPaymentMethodHookResult = ReturnType<typeof useGetTenantPaymentMethod>;
export type GetTenantPaymentMethodLazyQueryHookResult = ReturnType<typeof useGetTenantPaymentMethodLazyQuery>;
export type GetTenantPaymentMethodQueryResult = Apollo.QueryResult<
  GetTenantPaymentMethod,
  GetTenantPaymentMethodVariables
>;
