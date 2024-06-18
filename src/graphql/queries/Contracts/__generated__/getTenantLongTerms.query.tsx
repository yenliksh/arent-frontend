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
export type getTenantActiveLongTermsVariables = Types.Exact<{
  input: Types.TenantLongTermRentContractsRequest;
}>;

export type getTenantActiveLongTerms = {
  __typename: 'Query';
  contract__tenant_longTermRents: {
    __typename: 'TenantContractsPaginationResponse';
    data?: Array<{
      __typename: 'ContractTenantModel';
      id: string;
      apartmentAdId?: string | null;
      arrivalDate?: string | null;
      departureDate?: string | null;
      cost: string;
      nextPayment?: {
        __typename: 'NextPaymentInfoModel';
        contractId: string;
        id: string;
        withdrawFundsDate: string;
      } | null;
      landlord?: { __typename: 'UserModel'; firstName: string } | null;
      apartmentAd?: {
        __typename: 'ApartmentAdViewModel';
        rentPeriodType: Types.RentPeriodType;
        description?: { __typename: 'ApartmentAdDescriptionModel'; description?: string | null; name: string } | null;
        photos: Array<{ __typename: 'ApartmentAdMediaModel'; fileKey: string }>;
        address?: {
          __typename: 'ApartmentAdAddressModel';
          city: string;
          country: string;
          houseNumber: string;
          region?: string | null;
          street: string;
        } | null;
      } | null;
    }> | null;
    pageInfo?: {
      __typename: 'PageAfterCursorInfo';
      afterCursor?: string | null;
      count: number;
      perPage: number;
    } | null;
  };
};

export const getTenantActiveLongTermsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getTenantActiveLongTerms' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'TenantLongTermRentContractsRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'contract__tenant_longTermRents' },
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
                      { kind: 'Field', name: { kind: 'Name', value: 'apartmentAdId' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nextPayment' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'contractId' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'withdrawFundsDate' } },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'arrivalDate' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'departureDate' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'landlord' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{ kind: 'Field', name: { kind: 'Name', value: 'firstName' } }],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'apartmentAd' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'description' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'photos' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [{ kind: 'Field', name: { kind: 'Name', value: 'fileKey' } }],
                              },
                            },
                            { kind: 'Field', name: { kind: 'Name', value: 'rentPeriodType' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'address' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'city' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'country' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'houseNumber' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'region' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'street' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'cost' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'afterCursor' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'perPage' } },
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
 * __usegetTenantActiveLongTerms__
 *
 * To run a query within a React component, call `usegetTenantActiveLongTerms` and pass it any options that fit your needs.
 * When your component renders, `usegetTenantActiveLongTerms` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usegetTenantActiveLongTerms({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usegetTenantActiveLongTerms(
  baseOptions: Apollo.QueryHookOptions<getTenantActiveLongTerms, getTenantActiveLongTermsVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<getTenantActiveLongTerms, getTenantActiveLongTermsVariables>(
    getTenantActiveLongTermsDocument,
    options,
  );
}
export function usegetTenantActiveLongTermsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<getTenantActiveLongTerms, getTenantActiveLongTermsVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<getTenantActiveLongTerms, getTenantActiveLongTermsVariables>(
    getTenantActiveLongTermsDocument,
    options,
  );
}
export type getTenantActiveLongTermsHookResult = ReturnType<typeof usegetTenantActiveLongTerms>;
export type getTenantActiveLongTermsLazyQueryHookResult = ReturnType<typeof usegetTenantActiveLongTermsLazyQuery>;
export type getTenantActiveLongTermsQueryResult = Apollo.QueryResult<
  getTenantActiveLongTerms,
  getTenantActiveLongTermsVariables
>;
