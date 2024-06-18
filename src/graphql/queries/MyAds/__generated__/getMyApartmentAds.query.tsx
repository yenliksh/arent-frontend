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
export type GetMyRentAdsVariables = Types.Exact<{
  input: Types.MyApartmentAdsRequest;
}>;

export type GetMyRentAds = {
  __typename: 'Query';
  rentAd__myRentAd_unionRentPeriods: {
    __typename: 'ApartmentAdsUnionResponse';
    apartmentAdLongTermRent: Array<{
      __typename: 'ApartmentAdLongTermRentModel';
      apartmentAdId: string;
      status: Array<Types.ApartmentAdStatusType>;
      apartmentAd: {
        __typename: 'ApartmentAdModel';
        completeStep: number;
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
      };
    }>;
    apartmentAdShortTermRent: Array<{
      __typename: 'ApartmentAdShortTermRentModel';
      apartmentAdId: string;
      status: Array<Types.ApartmentAdStatusType>;
      apartmentAd: {
        __typename: 'ApartmentAdModel';
        completeStep: number;
        id: string;
        innopayCardId?: string | null;
        rentPeriodType: Types.RentPeriodType;
        shortTermRent?: {
          __typename: 'ApartmentAdShortTermRentModel';
          id: string;
          rentBookingType: Types.ShortTermRentBookingType;
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
      };
    }>;
  };
};

export const GetMyRentAdsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetMyRentAds' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'MyApartmentAdsRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rentAd__myRentAd_unionRentPeriods' },
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
                  name: { kind: 'Name', value: 'apartmentAdLongTermRent' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'apartmentAdId' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'status' } },
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
                            { kind: 'Field', name: { kind: 'Name', value: 'completeStep' } },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'apartmentAdShortTermRent' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'apartmentAdId' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'apartmentAd' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'FragmentSpread', name: { kind: 'Name', value: 'myApartmentFragment' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'shortTermRent' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'rentBookingType' } },
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
                            { kind: 'Field', name: { kind: 'Name', value: 'completeStep' } },
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
 * __useGetMyRentAds__
 *
 * To run a query within a React component, call `useGetMyRentAds` and pass it any options that fit your needs.
 * When your component renders, `useGetMyRentAds` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyRentAds({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetMyRentAds(baseOptions: Apollo.QueryHookOptions<GetMyRentAds, GetMyRentAdsVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetMyRentAds, GetMyRentAdsVariables>(GetMyRentAdsDocument, options);
}
export function useGetMyRentAdsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetMyRentAds, GetMyRentAdsVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetMyRentAds, GetMyRentAdsVariables>(GetMyRentAdsDocument, options);
}
export type GetMyRentAdsHookResult = ReturnType<typeof useGetMyRentAds>;
export type GetMyRentAdsLazyQueryHookResult = ReturnType<typeof useGetMyRentAdsLazyQuery>;
export type GetMyRentAdsQueryResult = Apollo.QueryResult<GetMyRentAds, GetMyRentAdsVariables>;
