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
export type SetRentAddressVariables = Types.Exact<{
  input: Types.EditApartmentAdAddressRequest;
}>;

export type SetRentAddress = {
  __typename: 'Mutation';
  rentAd__edit_address: {
    __typename: 'ApartmentAdResponse';
    apartmentAd: {
      __typename: 'ApartmentAdModel';
      id: string;
      address?: {
        __typename: 'ApartmentAdAddressModel';
        lat: number;
        lng: number;
        street: string;
        houseNumber: string;
        country: string;
        city: string;
      } | null;
    };
  };
};

export const SetRentAddressDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SetRentAddress' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'EditApartmentAdAddressRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rentAd__edit_address' },
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
                  name: { kind: 'Name', value: 'apartmentAd' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'address' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'lat' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'lng' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'street' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'houseNumber' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'country' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'city' } },
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
  ],
} as unknown as DocumentNode;
export type SetRentAddressMutationFn = Apollo.MutationFunction<SetRentAddress, SetRentAddressVariables>;

/**
 * __useSetRentAddress__
 *
 * To run a mutation, you first call `useSetRentAddress` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetRentAddress` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setRentAddress, { data, loading, error }] = useSetRentAddress({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSetRentAddress(baseOptions?: Apollo.MutationHookOptions<SetRentAddress, SetRentAddressVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SetRentAddress, SetRentAddressVariables>(SetRentAddressDocument, options);
}
export type SetRentAddressHookResult = ReturnType<typeof useSetRentAddress>;
export type SetRentAddressMutationResult = Apollo.MutationResult<SetRentAddress>;
export type SetRentAddressMutationOptions = Apollo.BaseMutationOptions<SetRentAddress, SetRentAddressVariables>;
