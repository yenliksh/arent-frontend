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
export type GetCancellationInfoVariables = Types.Exact<{
  input: Types.TenantContractCancelationInfoRequest;
}>;

export type GetCancellationInfo = {
  __typename: 'Query';
  contract__tenant_cancelationInfo: {
    __typename: 'TenantContractCancelationInfoResponse';
    cancelationDate: string;
    checkOutDate: string;
    checkoutType?: Types.LongPeriodTenantCheckOutCancelationType | null;
    refundsAmount: string;
    strategyType: Types.RentPeriodStrategyType;
    withdrawalAmount?: string | null;
    recomputedLastStayWithdrawalAmount?: string | null;
  };
};

export const GetCancellationInfoDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetCancellationInfo' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'TenantContractCancelationInfoRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'contract__tenant_cancelationInfo' },
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
                { kind: 'Field', name: { kind: 'Name', value: 'cancelationDate' } },
                { kind: 'Field', name: { kind: 'Name', value: 'checkOutDate' } },
                { kind: 'Field', name: { kind: 'Name', value: 'checkoutType' } },
                { kind: 'Field', name: { kind: 'Name', value: 'refundsAmount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'strategyType' } },
                { kind: 'Field', name: { kind: 'Name', value: 'withdrawalAmount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'recomputedLastStayWithdrawalAmount' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;

/**
 * __useGetCancellationInfo__
 *
 * To run a query within a React component, call `useGetCancellationInfo` and pass it any options that fit your needs.
 * When your component renders, `useGetCancellationInfo` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCancellationInfo({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetCancellationInfo(
  baseOptions: Apollo.QueryHookOptions<GetCancellationInfo, GetCancellationInfoVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCancellationInfo, GetCancellationInfoVariables>(GetCancellationInfoDocument, options);
}
export function useGetCancellationInfoLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetCancellationInfo, GetCancellationInfoVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCancellationInfo, GetCancellationInfoVariables>(GetCancellationInfoDocument, options);
}
export type GetCancellationInfoHookResult = ReturnType<typeof useGetCancellationInfo>;
export type GetCancellationInfoLazyQueryHookResult = ReturnType<typeof useGetCancellationInfoLazyQuery>;
export type GetCancellationInfoQueryResult = Apollo.QueryResult<GetCancellationInfo, GetCancellationInfoVariables>;
