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
export type GetNextPaymentVariables = Types.Exact<{
  input: Types.NextPaymentTransactionRequest;
}>;

export type GetNextPayment = {
  __typename: 'Query';
  paymentTransaction_paymentNext: Array<{
    __typename: 'PaymentTransactionModel';
    cost: string;
    id: string;
    withdrawFundsDate: string;
    totalAmountPayable: string;
    isReadyToPay: boolean;
    contract: {
      __typename: 'BaseContractModel';
      id: string;
      apartmentAdId?: string | null;
      baseApartmentAdData: { __typename: 'BaseContractApartmentAdDataModel'; title: string };
    };
  }>;
};

export const GetNextPaymentDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetNextPayment' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'NextPaymentTransactionRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'paymentTransaction_paymentNext' },
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
                { kind: 'Field', name: { kind: 'Name', value: 'cost' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'withdrawFundsDate' } },
                { kind: 'Field', name: { kind: 'Name', value: 'totalAmountPayable' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isReadyToPay' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'contract' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'apartmentAdId' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'baseApartmentAdData' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{ kind: 'Field', name: { kind: 'Name', value: 'title' } }],
                        },
                      },
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
 * __useGetNextPayment__
 *
 * To run a query within a React component, call `useGetNextPayment` and pass it any options that fit your needs.
 * When your component renders, `useGetNextPayment` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNextPayment({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetNextPayment(baseOptions: Apollo.QueryHookOptions<GetNextPayment, GetNextPaymentVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetNextPayment, GetNextPaymentVariables>(GetNextPaymentDocument, options);
}
export function useGetNextPaymentLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetNextPayment, GetNextPaymentVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetNextPayment, GetNextPaymentVariables>(GetNextPaymentDocument, options);
}
export type GetNextPaymentHookResult = ReturnType<typeof useGetNextPayment>;
export type GetNextPaymentLazyQueryHookResult = ReturnType<typeof useGetNextPaymentLazyQuery>;
export type GetNextPaymentQueryResult = Apollo.QueryResult<GetNextPayment, GetNextPaymentVariables>;
