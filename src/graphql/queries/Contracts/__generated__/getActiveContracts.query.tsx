/* eslint-disable simple-import-sort/imports */
/* eslint-disable import/order */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-redeclare */
/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable no-unused-vars */
import * as Types from '../../../../__generated__/types';

import { DocumentNode } from 'graphql';
import { myApartmentFragment } from '../../../fragments/Apartment/__generated__/MyApartmentFragment.query';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetActiveContractsVariables = Types.Exact<{ [key: string]: never }>;

export type GetActiveContracts = {
  __typename: 'Query';
  contract__landlord_activeRents: Array<{
    __typename: 'ContractLandlordModel';
    apartmentAdId?: string | null;
    cost: string;
    apartmentRentPeriodType: Types.ApartmentRentPeriodType;
    nextPayment?: {
      __typename: 'NextPaymentInfoModel';
      contractId: string;
      id: string;
      withdrawFundsDate: string;
    } | null;
    apartmentAd?: {
      __typename: 'ApartmentAdModel';
      id: string;
      innopayCardId?: string | null;
      rentPeriodType: Types.RentPeriodType;
      longTermRent?: {
        __typename: 'ApartmentAdLongTermRentModel';
        id: string;
        isApproved: boolean;
        cost: string;
        ownershipDocuments?: Array<string> | null;
        declineReason?: string | null;
      } | null;
      shortTermRent?: {
        __typename: 'ApartmentAdShortTermRentModel';
        id: string;
        isApproved: boolean;
        bookingAccessInMonths?: number | null;
        cost: string;
        declineReason?: string | null;
        lockedDates: Array<{ __typename: 'ApartmentAdLockedDatesModel'; endDate: string; startDate: string }>;
      } | null;
      landlord: {
        __typename: 'UserMeModel';
        id: string;
        identityDocuments?: Array<string> | null;
        isPhoneApproved: boolean;
        identityStatus: Types.IdentityStatusType;
      };
      photos: Array<{ __typename: 'ApartmentAdMediaModel'; fileKey: string }>;
      description?: { __typename: 'ApartmentAdDescriptionModel'; name: string } | null;
      address?: { __typename: 'ApartmentAdAddressModel'; city: string; street: string; houseNumber: string } | null;
    } | null;
  }>;
};

export const GetActiveContractsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetActiveContracts' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'contract__landlord_activeRents' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'apartmentAdId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'cost' } },
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
                { kind: 'Field', name: { kind: 'Name', value: 'apartmentRentPeriodType' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'apartmentAd' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'FragmentSpread', name: { kind: 'Name', value: 'myApartmentFragment' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'longTermRent' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'isApproved' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'cost' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'ownershipDocuments' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'declineReason' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'shortTermRent' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'isApproved' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'lockedDates' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'endDate' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'startDate' } },
                                ],
                              },
                            },
                            { kind: 'Field', name: { kind: 'Name', value: 'bookingAccessInMonths' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'cost' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'declineReason' } },
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
      },
    },
    ...myApartmentFragment.definitions,
  ],
} as unknown as DocumentNode;

/**
 * __useGetActiveContracts__
 *
 * To run a query within a React component, call `useGetActiveContracts` and pass it any options that fit your needs.
 * When your component renders, `useGetActiveContracts` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetActiveContracts({
 *   variables: {
 *   },
 * });
 */
export function useGetActiveContracts(
  baseOptions?: Apollo.QueryHookOptions<GetActiveContracts, GetActiveContractsVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetActiveContracts, GetActiveContractsVariables>(GetActiveContractsDocument, options);
}
export function useGetActiveContractsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetActiveContracts, GetActiveContractsVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetActiveContracts, GetActiveContractsVariables>(GetActiveContractsDocument, options);
}
export type GetActiveContractsHookResult = ReturnType<typeof useGetActiveContracts>;
export type GetActiveContractsLazyQueryHookResult = ReturnType<typeof useGetActiveContractsLazyQuery>;
export type GetActiveContractsQueryResult = Apollo.QueryResult<GetActiveContracts, GetActiveContractsVariables>;
