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
export type GetShortTermRentAdVariables = Types.Exact<{
  id: Types.FindShortTermRentAdRequest;
}>;

export type GetShortTermRentAd = {
  __typename: 'Query';
  rentAd__find_shortTermRentAd?: {
    __typename: 'FindShortTermRentAdResponse';
    data: {
      __typename: 'ApartmentAdShortTermRentViewModel';
      apartmentAdId: string;
      arrivalTime?: string | null;
      bookingAccessInMonths?: number | null;
      cancellationPolicy?: Types.ShortTermRentCancellationPolicyType | null;
      cost: string;
      createdAt: string;
      currency: Types.Currency;
      declineReason?: string | null;
      deletedAt?: string | null;
      departureTime?: string | null;
      id: string;
      isApproved: boolean;
      rentBookingType: Types.ShortTermRentBookingType;
      status: Array<Types.ApartmentAdStatusType>;
      updatedAt: string;
      lockedDates: Array<{ __typename: 'ApartmentAdLockedDatesModel'; endDate: string; startDate: string }>;
      apartmentAd: {
        __typename: 'ApartmentAdViewModel';
        apartmentType: Types.ApartmentType;
        createdAt: string;
        defaultPaymentMethod?: Types.PaymentMethod | null;
        deletedAt?: string | null;
        id: string;
        landlordId: string;
        rentPeriodType: Types.RentPeriodType;
        updatedAt: string;
        address?: {
          __typename: 'ApartmentAdAddressModel';
          city: string;
          country: string;
          houseNumber: string;
          lat: number;
          lng: number;
          region?: string | null;
          street: string;
        } | null;
        contractRequests?: Array<{
          __typename: 'ContractRequestModel';
          id: string;
          apartmentAdId?: string | null;
          apartmentRentPeriodType: Types.ApartmentRentPeriodType;
          arrivalDate?: string | null;
          createdAt: string;
          deletedAt?: string | null;
          departureDate?: string | null;
          status: Types.ContractRequestStatus;
          tenantId?: string | null;
          updatedAt: string;
          guests: {
            __typename: 'ApartmentGuestsModel';
            numberOfAdult: number;
            numberOfChildren: number;
            numberOfPets: number;
          };
          contract?: { __typename: 'BaseContractModel'; id: string; status: Types.ContractStatus } | null;
        }> | null;
        description?: {
          __typename: 'ApartmentAdDescriptionModel';
          description?: string | null;
          forFamily?: boolean | null;
          freeParking?: boolean | null;
          name: string;
          quite?: boolean | null;
          remoteView?: boolean | null;
          selfCheckIn?: boolean | null;
          workSpace?: boolean | null;
        } | null;
        details?: { __typename: 'ApartmentAdDetailsModel'; numberOfRooms: number; numberOfGuests: number } | null;
        landlord: {
          __typename: 'UserModel';
          avatarKey?: string | null;
          birthDate?: string | null;
          createdAt: string;
          deletedAt?: string | null;
          firstName: string;
          gender?: Types.GenderType | null;
          id: string;
          isIdentityApproved: boolean;
          isPhoneApproved: boolean;
          lastName: string;
          middleName?: string | null;
          updatedAt: string;
        };
        photos: Array<{ __typename: 'ApartmentAdMediaModel'; fileKey: string; order: number }>;
        rules?: {
          __typename: 'ApartmentAdRulesModel';
          allowedToHangingOut: boolean;
          allowedToSmoke: boolean;
          allowedWithChildren: boolean;
          allowedWithPets: boolean;
        } | null;
        videos: Array<{ __typename: 'ApartmentAdMediaModel'; fileKey: string; order: number }>;
      };
    };
    averageResponseOnRequest?: {
      __typename: 'ApartmentAdTimeIntervalModel';
      days?: number | null;
      hours?: number | null;
      seconds?: number | null;
      minutes?: number | null;
      milliseconds?: number | null;
    } | null;
  } | null;
};

export const GetShortTermRentAdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetShortTermRentAd' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'FindShortTermRentAdRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rentAd__find_shortTermRentAd' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
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
                      { kind: 'Field', name: { kind: 'Name', value: 'apartmentAdId' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'arrivalTime' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'bookingAccessInMonths' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'cancellationPolicy' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'cost' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'declineReason' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'deletedAt' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'departureTime' } },
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
                      { kind: 'Field', name: { kind: 'Name', value: 'rentBookingType' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'apartmentAd' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'address' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'city' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'country' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'houseNumber' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'lat' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'lng' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'region' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'street' } },
                                ],
                              },
                            },
                            { kind: 'Field', name: { kind: 'Name', value: 'apartmentType' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'contractRequests' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'apartmentAdId' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'apartmentRentPeriodType' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'arrivalDate' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'deletedAt' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'departureDate' } },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'guests' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'numberOfAdult' } },
                                        { kind: 'Field', name: { kind: 'Name', value: 'numberOfChildren' } },
                                        { kind: 'Field', name: { kind: 'Name', value: 'numberOfPets' } },
                                      ],
                                    },
                                  },
                                  { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'tenantId' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'contract' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                        { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'defaultPaymentMethod' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'deletedAt' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'description' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'forFamily' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'freeParking' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'quite' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'remoteView' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'selfCheckIn' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'workSpace' } },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'details' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'numberOfRooms' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'numberOfGuests' } },
                                ],
                              },
                            },
                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'landlord' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'avatarKey' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'birthDate' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'deletedAt' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'gender' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'isIdentityApproved' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'isPhoneApproved' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'middleName' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                                ],
                              },
                            },
                            { kind: 'Field', name: { kind: 'Name', value: 'landlordId' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'photos' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'fileKey' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'order' } },
                                ],
                              },
                            },
                            { kind: 'Field', name: { kind: 'Name', value: 'rentPeriodType' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'rules' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'allowedToHangingOut' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'allowedToSmoke' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'allowedWithChildren' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'allowedWithPets' } },
                                ],
                              },
                            },
                            { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'videos' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'fileKey' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'order' } },
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
                  name: { kind: 'Name', value: 'averageResponseOnRequest' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'days' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'hours' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'seconds' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'minutes' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'milliseconds' } },
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
 * __useGetShortTermRentAd__
 *
 * To run a query within a React component, call `useGetShortTermRentAd` and pass it any options that fit your needs.
 * When your component renders, `useGetShortTermRentAd` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShortTermRentAd({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetShortTermRentAd(
  baseOptions: Apollo.QueryHookOptions<GetShortTermRentAd, GetShortTermRentAdVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetShortTermRentAd, GetShortTermRentAdVariables>(GetShortTermRentAdDocument, options);
}
export function useGetShortTermRentAdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetShortTermRentAd, GetShortTermRentAdVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetShortTermRentAd, GetShortTermRentAdVariables>(GetShortTermRentAdDocument, options);
}
export type GetShortTermRentAdHookResult = ReturnType<typeof useGetShortTermRentAd>;
export type GetShortTermRentAdLazyQueryHookResult = ReturnType<typeof useGetShortTermRentAdLazyQuery>;
export type GetShortTermRentAdQueryResult = Apollo.QueryResult<GetShortTermRentAd, GetShortTermRentAdVariables>;
