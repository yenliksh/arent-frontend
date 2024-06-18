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
export type SetRentHouseTypeVariables = Types.Exact<{
  input: Types.EditApartmentAdTypeRequest;
}>;

export type SetRentHouseType = {
  __typename: 'Mutation';
  rentAd__edit_type: {
    __typename: 'ApartmentAdResponse';
    apartmentAd: {
      __typename: 'ApartmentAdModel';
      id: string;
      apartmentCategory: Types.ApartmentCategory;
      apartmentType: Types.ApartmentType;
    };
  };
};

export const SetRentHouseTypeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SetRentHouseType' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'EditApartmentAdTypeRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rentAd__edit_type' },
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
                      { kind: 'Field', name: { kind: 'Name', value: 'apartmentCategory' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'apartmentType' } },
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
export type SetRentHouseTypeMutationFn = Apollo.MutationFunction<SetRentHouseType, SetRentHouseTypeVariables>;

/**
 * __useSetRentHouseType__
 *
 * To run a mutation, you first call `useSetRentHouseType` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetRentHouseType` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setRentHouseType, { data, loading, error }] = useSetRentHouseType({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSetRentHouseType(
  baseOptions?: Apollo.MutationHookOptions<SetRentHouseType, SetRentHouseTypeVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SetRentHouseType, SetRentHouseTypeVariables>(SetRentHouseTypeDocument, options);
}
export type SetRentHouseTypeHookResult = ReturnType<typeof useSetRentHouseType>;
export type SetRentHouseTypeMutationResult = Apollo.MutationResult<SetRentHouseType>;
export type SetRentHouseTypeMutationOptions = Apollo.BaseMutationOptions<SetRentHouseType, SetRentHouseTypeVariables>;
