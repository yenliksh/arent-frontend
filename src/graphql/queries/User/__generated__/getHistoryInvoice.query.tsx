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
export type GetHistoryInvoiceVariables = Types.Exact<{
  input: Types.PaymentInvoicesHistoryRequest;
}>;

export type GetHistoryInvoice = {
  __typename: 'Query';
  paymentTransaction_historyInvoice: {
    __typename: 'PaymentInvoicePayload';
    data?: Array<{
      __typename: 'PaymentInvoiceModel';
      id: string;
      createdAt: string;
      isSuccess: boolean;
      updatedAt: string;
      invoiceDate: string;
      type: Types.PaymentInvoiceType;
      cardMeta?: { __typename: 'CardMetaModel'; panMasked: string } | null;
      paymentTransaction: {
        __typename: 'PaymentTransactionModel';
        id: string;
        cost: string;
        totalAmountToBeTransferred: string;
        totalAmountPayable: string;
        contract: {
          __typename: 'BaseContractModel';
          id: string;
          cost: string;
          baseApartmentAdData: { __typename: 'BaseContractApartmentAdDataModel'; title: string };
        };
      };
    }> | null;
    pageInfo?: { __typename: 'PageAfterCursorInfo'; count: number; afterCursor?: string | null } | null;
  };
};

export const GetHistoryInvoiceDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetHistoryInvoice' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'PaymentInvoicesHistoryRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'paymentTransaction_historyInvoice' },
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
                  name: { kind: 'Name', value: 'data' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'isSuccess' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'invoiceDate' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cardMeta' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{ kind: 'Field', name: { kind: 'Name', value: 'panMasked' } }],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'paymentTransaction' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'cost' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'totalAmountToBeTransferred' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'totalAmountPayable' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'contract' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'cost' } },
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
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'afterCursor' } },
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
 * __useGetHistoryInvoice__
 *
 * To run a query within a React component, call `useGetHistoryInvoice` and pass it any options that fit your needs.
 * When your component renders, `useGetHistoryInvoice` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHistoryInvoice({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetHistoryInvoice(
  baseOptions: Apollo.QueryHookOptions<GetHistoryInvoice, GetHistoryInvoiceVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetHistoryInvoice, GetHistoryInvoiceVariables>(GetHistoryInvoiceDocument, options);
}
export function useGetHistoryInvoiceLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetHistoryInvoice, GetHistoryInvoiceVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetHistoryInvoice, GetHistoryInvoiceVariables>(GetHistoryInvoiceDocument, options);
}
export type GetHistoryInvoiceHookResult = ReturnType<typeof useGetHistoryInvoice>;
export type GetHistoryInvoiceLazyQueryHookResult = ReturnType<typeof useGetHistoryInvoiceLazyQuery>;
export type GetHistoryInvoiceQueryResult = Apollo.QueryResult<GetHistoryInvoice, GetHistoryInvoiceVariables>;
