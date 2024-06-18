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
export type LandlordRentRequestVariables = Types.Exact<{
  input: Types.FindContractRequestForLandlordRequest;
}>;

export type LandlordRentRequest = {
  __typename: 'Query';
  contractRequest__forLandlord: {
    __typename: 'ContractRequestPaginationResponse';
    data?: Array<{
      __typename: 'ContractRequestModel';
      apartmentRentPeriodType: Types.ApartmentRentPeriodType;
      id: string;
      apartmentAdId?: string | null;
      arrivalDate?: string | null;
      departureDate?: string | null;
      comment?: string | null;
      apartmentAd: {
        __typename: 'ApartmentAdViewModel';
        rentPeriodType: Types.RentPeriodType;
        description?: { __typename: 'ApartmentAdDescriptionModel'; name: string } | null;
      };
      guests: {
        __typename: 'ApartmentGuestsModel';
        numberOfAdult: number;
        numberOfChildren: number;
        numberOfPets: number;
      };
      tenant: {
        __typename: 'UserModel';
        id: string;
        avatarKey?: string | null;
        firstName: string;
        lastName: string;
        isIdentityApproved: boolean;
      };
    }> | null;
    pageInfo?: {
      __typename: 'PageAfterCursorInfo';
      perPage: number;
      count: number;
      afterCursor?: string | null;
    } | null;
  };
};

export const LandlordRentRequestDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'LandlordRentRequest' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'FindContractRequestForLandlordRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'contractRequest__forLandlord' },
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
                      { kind: 'Field', name: { kind: 'Name', value: 'apartmentRentPeriodType' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'apartmentAdId' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'apartmentAd' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'rentPeriodType' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'description' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
                              },
                            },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'arrivalDate' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'departureDate' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'comment' } },
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
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tenant' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'avatarKey' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'isIdentityApproved' } },
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
                      { kind: 'Field', name: { kind: 'Name', value: 'perPage' } },
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
 * __useLandlordRentRequest__
 *
 * To run a query within a React component, call `useLandlordRentRequest` and pass it any options that fit your needs.
 * When your component renders, `useLandlordRentRequest` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLandlordRentRequest({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLandlordRentRequest(
  baseOptions: Apollo.QueryHookOptions<LandlordRentRequest, LandlordRentRequestVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<LandlordRentRequest, LandlordRentRequestVariables>(LandlordRentRequestDocument, options);
}
export function useLandlordRentRequestLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<LandlordRentRequest, LandlordRentRequestVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<LandlordRentRequest, LandlordRentRequestVariables>(LandlordRentRequestDocument, options);
}
export type LandlordRentRequestHookResult = ReturnType<typeof useLandlordRentRequest>;
export type LandlordRentRequestLazyQueryHookResult = ReturnType<typeof useLandlordRentRequestLazyQuery>;
export type LandlordRentRequestQueryResult = Apollo.QueryResult<LandlordRentRequest, LandlordRentRequestVariables>;
