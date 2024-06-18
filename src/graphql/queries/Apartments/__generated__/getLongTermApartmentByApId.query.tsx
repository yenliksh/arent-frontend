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
export type GetLongTermRentByApIdVariables = Types.Exact<{
  id: Types.FindLongTermRentAdRequest;
}>;

export type GetLongTermRentByApId = {
  __typename: 'Query';
  rentAd__find_longTermAdByApId?: {
    __typename: 'FindLongTermRentAdResponse';
    data: {
      __typename: 'ApartmentAdLongTermRentViewModel';
      apartmentAdId: string;
      cost: string;
      createdAt: string;
      currency: Types.Currency;
      declineReason?: string | null;
      deletedAt?: string | null;
      id: string;
      isApproved: boolean;
      status: Array<Types.ApartmentAdStatusType>;
      updatedAt: string;
      apartmentAd: {
        __typename: 'ApartmentAdViewModel';
        apartmentType: Types.ApartmentType;
        apartmentCategory: Types.ApartmentCategory;
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
        characteristics?: {
          __typename: 'ApartmentAdCharacteristicsModel';
          ceilingHeight?: number | null;
          floor?: number | null;
          gas?: boolean | null;
          gasSupply?: string | null;
          heating?: boolean | null;
          landArea?: number | null;
          light?: boolean | null;
          objectArea?: number | null;
          objectPlacement?: string | null;
          sewerage?: boolean | null;
          territoryArea?: number | null;
          totalArea?: number | null;
          ventilation?: boolean | null;
          water?: boolean | null;
          waterSupply?: string | null;
          yearOfConstruction?: number | null;
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
          lastName: string;
          middleName?: string | null;
          updatedAt: string;
          isPhoneApproved: boolean;
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
      minutes?: number | null;
      seconds?: number | null;
      milliseconds?: number | null;
    } | null;
  } | null;
};

export const GetLongTermRentByApIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetLongTermRentByApId' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'FindLongTermRentAdRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rentAd__find_longTermAdByApId' },
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
                      { kind: 'Field', name: { kind: 'Name', value: 'cost' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'declineReason' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'deletedAt' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'isApproved' } },
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
                            { kind: 'Field', name: { kind: 'Name', value: 'apartmentCategory' } },
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
                              name: { kind: 'Name', value: 'characteristics' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'ceilingHeight' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'floor' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'gas' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'gasSupply' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'heating' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'landArea' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'light' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'objectArea' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'objectPlacement' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'sewerage' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'territoryArea' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'totalArea' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'ventilation' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'water' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'waterSupply' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'yearOfConstruction' } },
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
                                  { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'middleName' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'isPhoneApproved' } },
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
                      { kind: 'Field', name: { kind: 'Name', value: 'minutes' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'seconds' } },
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
 * __useGetLongTermRentByApId__
 *
 * To run a query within a React component, call `useGetLongTermRentByApId` and pass it any options that fit your needs.
 * When your component renders, `useGetLongTermRentByApId` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLongTermRentByApId({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetLongTermRentByApId(
  baseOptions: Apollo.QueryHookOptions<GetLongTermRentByApId, GetLongTermRentByApIdVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetLongTermRentByApId, GetLongTermRentByApIdVariables>(GetLongTermRentByApIdDocument, options);
}
export function useGetLongTermRentByApIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetLongTermRentByApId, GetLongTermRentByApIdVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetLongTermRentByApId, GetLongTermRentByApIdVariables>(
    GetLongTermRentByApIdDocument,
    options,
  );
}
export type GetLongTermRentByApIdHookResult = ReturnType<typeof useGetLongTermRentByApId>;
export type GetLongTermRentByApIdLazyQueryHookResult = ReturnType<typeof useGetLongTermRentByApIdLazyQuery>;
export type GetLongTermRentByApIdQueryResult = Apollo.QueryResult<
  GetLongTermRentByApId,
  GetLongTermRentByApIdVariables
>;
