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
export type getActiveContractByIdVariables = Types.Exact<{
  input: Types.FindContractRequest;
}>;

export type getActiveContractById = {
  __typename: 'Query';
  contract__tenant_find: {
    __typename: 'ContractTenantModel';
    arrivalDate?: string | null;
    departureDate?: string | null;
    cost: string;
    apartmentAdId?: string | null;
    innopayCardId?: string | null;
    shortTermRentCancellationPolicyType?: Types.ShortTermRentCancellationPolicyType | null;
    apartmentRentPeriodType: Types.ApartmentRentPeriodType;
    contractCancelation?: { __typename: 'ContractCancelationModel'; id: string } | null;
    nextPayment?: {
      __typename: 'NextPaymentInfoModel';
      id: string;
      contractId: string;
      withdrawFundsDate: string;
    } | null;
    guests: { __typename: 'ApartmentGuestsModel'; numberOfAdult: number; numberOfChildren: number };
    baseApartmentAdData: {
      __typename: 'BaseContractApartmentAdDataModel';
      title: string;
      address: { __typename: 'BaseContractAddressDataModel'; city: string; street: string; houseNumber: string };
    };
    rules?: {
      __typename: 'ContractRulesModel';
      allowedWithPets: boolean;
      allowedWithChildren: boolean;
      allowedToSmoke: boolean;
      allowedToHangingOut: boolean;
    } | null;
    apartmentAd?: {
      __typename: 'ApartmentAdViewModel';
      id: string;
      shortTermRent?: { __typename: 'ApartmentAdShortTermRentViewModel'; id: string } | null;
      longTermRent?: { __typename: 'ApartmentAdLongTermRentViewModel'; id: string } | null;
      address?: {
        __typename: 'ApartmentAdAddressModel';
        lat: number;
        lng: number;
        city: string;
        street: string;
        houseNumber: string;
      } | null;
      photos: Array<{ __typename: 'ApartmentAdMediaModel'; fileKey: string }>;
    } | null;
    landlord?: {
      __typename: 'UserModel';
      id: string;
      avatarKey?: string | null;
      firstName: string;
      lastName: string;
    } | null;
    tenant?: { __typename: 'UserMeModel'; avatarKey?: string | null; firstName: string; lastName: string } | null;
  };
};

export const getActiveContractByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getActiveContractById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'FindContractRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'contract__tenant_find' },
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
                { kind: 'Field', name: { kind: 'Name', value: 'arrivalDate' } },
                { kind: 'Field', name: { kind: 'Name', value: 'departureDate' } },
                { kind: 'Field', name: { kind: 'Name', value: 'cost' } },
                { kind: 'Field', name: { kind: 'Name', value: 'apartmentAdId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'innopayCardId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'contractCancelation' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nextPayment' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'contractId' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'withdrawFundsDate' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'guests' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'numberOfAdult' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'numberOfChildren' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'shortTermRentCancellationPolicyType' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'baseApartmentAdData' },
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
                            { kind: 'Field', name: { kind: 'Name', value: 'street' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'houseNumber' } },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'rules' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'allowedWithPets' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'allowedWithChildren' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'allowedToSmoke' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'allowedToHangingOut' } },
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
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'shortTermRent' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'longTermRent' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'address' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'lat' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'lng' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'city' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'street' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'houseNumber' } },
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
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'landlord' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'avatarKey' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tenant' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'avatarKey' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
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
 * __usegetActiveContractById__
 *
 * To run a query within a React component, call `usegetActiveContractById` and pass it any options that fit your needs.
 * When your component renders, `usegetActiveContractById` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usegetActiveContractById({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usegetActiveContractById(
  baseOptions: Apollo.QueryHookOptions<getActiveContractById, getActiveContractByIdVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<getActiveContractById, getActiveContractByIdVariables>(getActiveContractByIdDocument, options);
}
export function usegetActiveContractByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<getActiveContractById, getActiveContractByIdVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<getActiveContractById, getActiveContractByIdVariables>(
    getActiveContractByIdDocument,
    options,
  );
}
export type getActiveContractByIdHookResult = ReturnType<typeof usegetActiveContractById>;
export type getActiveContractByIdLazyQueryHookResult = ReturnType<typeof usegetActiveContractByIdLazyQuery>;
export type getActiveContractByIdQueryResult = Apollo.QueryResult<
  getActiveContractById,
  getActiveContractByIdVariables
>;
