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
export type ContractOfferAcceptByNewCardVariables = Types.Exact<{
  input: Types.ContractTemporaryConcludeRequest;
}>;

export type ContractOfferAcceptByNewCard = {
  __typename: 'Mutation';
  contractOffer__acceptByNewCard: {
    __typename: 'ContractResponse';
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

export const ContractOfferAcceptByNewCardDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'ContractOfferAcceptByNewCard' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ContractTemporaryConcludeRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'contractOffer__acceptByNewCard' },
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
export type ContractOfferAcceptByNewCardMutationFn = Apollo.MutationFunction<
  ContractOfferAcceptByNewCard,
  ContractOfferAcceptByNewCardVariables
>;

/**
 * __useContractOfferAcceptByNewCard__
 *
 * To run a mutation, you first call `useContractOfferAcceptByNewCard` within a React component and pass it any options that fit your needs.
 * When your component renders, `useContractOfferAcceptByNewCard` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [contractOfferAcceptByNewCard, { data, loading, error }] = useContractOfferAcceptByNewCard({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useContractOfferAcceptByNewCard(
  baseOptions?: Apollo.MutationHookOptions<ContractOfferAcceptByNewCard, ContractOfferAcceptByNewCardVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<ContractOfferAcceptByNewCard, ContractOfferAcceptByNewCardVariables>(
    ContractOfferAcceptByNewCardDocument,
    options,
  );
}
export type ContractOfferAcceptByNewCardHookResult = ReturnType<typeof useContractOfferAcceptByNewCard>;
export type ContractOfferAcceptByNewCardMutationResult = Apollo.MutationResult<ContractOfferAcceptByNewCard>;
export type ContractOfferAcceptByNewCardMutationOptions = Apollo.BaseMutationOptions<
  ContractOfferAcceptByNewCard,
  ContractOfferAcceptByNewCardVariables
>;
