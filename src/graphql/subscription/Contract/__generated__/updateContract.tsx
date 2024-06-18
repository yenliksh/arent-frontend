/* eslint-disable simple-import-sort/imports */
/* eslint-disable import/order */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-redeclare */
/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable no-unused-vars */
import * as Types from '../../../../__generated__/types';

import { DocumentNode } from 'graphql';
import { ContractChatFragment } from '../../../fragments/Contract/__generated__/Contract';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UpdateContractVariables = Types.Exact<{ [key: string]: never }>;

export type UpdateContract = {
  __typename: 'Subscription';
  updateContract: {
    __typename: 'ContractSubscriptionResponse';
    contract?: {
      __typename: 'ContractChatModel';
      id: string;
      shortTermRentCancellationPolicyType?: Types.ShortTermRentCancellationPolicyType | null;
      apartmentRentPeriodType: Types.ApartmentRentPeriodType;
      cost: string;
      arrivalDate?: string | null;
      isPending: boolean;
      isTemporary: boolean;
      departureDate?: string | null;
      status: Types.ContractStatus;
      apartmentAd?: {
        __typename: 'ApartmentAdViewModel';
        id: string;
        details?: { __typename: 'ApartmentAdDetailsModel'; numberOfRooms: number } | null;
      } | null;
      baseApartmentAdData: {
        __typename: 'BaseContractApartmentAdDataModel';
        title: string;
        address: {
          __typename: 'BaseContractAddressDataModel';
          city: string;
          country: string;
          houseNumber: string;
          region?: string | null;
          street: string;
          geoPoint: { __typename: 'GeoPointModel'; lat: number; lng: number };
        };
      };
      guests: {
        __typename: 'ApartmentGuestsModel';
        numberOfAdult: number;
        numberOfChildren: number;
        numberOfPets: number;
      };
      rules?: {
        __typename: 'ContractRulesModel';
        allowedToHangingOut: boolean;
        allowedToSmoke: boolean;
        allowedWithChildren: boolean;
        allowedWithPets: boolean;
      } | null;
    } | null;
  };
};

export const UpdateContractDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'subscription',
      name: { kind: 'Name', value: 'UpdateContract' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateContract' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'contract' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'ContractChatFragment' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...ContractChatFragment.definitions,
  ],
} as unknown as DocumentNode;

/**
 * __useUpdateContract__
 *
 * To run a query within a React component, call `useUpdateContract` and pass it any options that fit your needs.
 * When your component renders, `useUpdateContract` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpdateContract({
 *   variables: {
 *   },
 * });
 */
export function useUpdateContract(
  baseOptions?: Apollo.SubscriptionHookOptions<UpdateContract, UpdateContractVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<UpdateContract, UpdateContractVariables>(UpdateContractDocument, options);
}
export type UpdateContractHookResult = ReturnType<typeof useUpdateContract>;
export type UpdateContractSubscriptionResult = Apollo.SubscriptionResult<UpdateContract>;
