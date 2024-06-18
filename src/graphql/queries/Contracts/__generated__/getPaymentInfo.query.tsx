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
export type GetPaymentInfoVariables = Types.Exact<{
  input: Types.TenantContractPaymentInfoRequest;
}>;

export type GetPaymentInfo = {
  __typename: 'Query';
  contract__tenant_paymentInfo: {
    __typename: 'TenantContractPaymentInfoResponse';
    accommodationAvailableDate?: string | null;
    cancellationDate?: string | null;
    refundsAmount: string;
    dateOfNextCharge?: string | null;
    paidAmount: string;
    payableAmount: string;
    payableAmountOfNextCharge?: string | null;
    type: Types.ContractPaymentStatusType;
    totalAmount: string;
  };
};

export const GetPaymentInfoDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetPaymentInfo' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'TenantContractPaymentInfoRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'contract__tenant_paymentInfo' },
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
                { kind: 'Field', name: { kind: 'Name', value: 'accommodationAvailableDate' } },
                { kind: 'Field', name: { kind: 'Name', value: 'cancellationDate' } },
                { kind: 'Field', name: { kind: 'Name', value: 'refundsAmount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'dateOfNextCharge' } },
                { kind: 'Field', name: { kind: 'Name', value: 'paidAmount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'payableAmount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'payableAmountOfNextCharge' } },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                { kind: 'Field', name: { kind: 'Name', value: 'totalAmount' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;

/**
 * __useGetPaymentInfo__
 *
 * To run a query within a React component, call `useGetPaymentInfo` and pass it any options that fit your needs.
 * When your component renders, `useGetPaymentInfo` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaymentInfo({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPaymentInfo(baseOptions: Apollo.QueryHookOptions<GetPaymentInfo, GetPaymentInfoVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPaymentInfo, GetPaymentInfoVariables>(GetPaymentInfoDocument, options);
}
export function useGetPaymentInfoLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetPaymentInfo, GetPaymentInfoVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPaymentInfo, GetPaymentInfoVariables>(GetPaymentInfoDocument, options);
}
export type GetPaymentInfoHookResult = ReturnType<typeof useGetPaymentInfo>;
export type GetPaymentInfoLazyQueryHookResult = ReturnType<typeof useGetPaymentInfoLazyQuery>;
export type GetPaymentInfoQueryResult = Apollo.QueryResult<GetPaymentInfo, GetPaymentInfoVariables>;
