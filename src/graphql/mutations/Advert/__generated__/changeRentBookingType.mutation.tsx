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
export type ChangeRentBookingTypeVariables = Types.Exact<{
  input: Types.ShortTermSwitchRentBookingTypeRequest;
}>;

export type ChangeRentBookingType = {
  __typename: 'Mutation';
  rentAd__shortTerm_switchRentBookingType: {
    __typename: 'ApartmentAdResponse';
    apartmentAd: {
      __typename: 'ApartmentAdModel';
      id: string;
      shortTermRent?: {
        __typename: 'ApartmentAdShortTermRentModel';
        id: string;
        rentBookingType: Types.ShortTermRentBookingType;
      } | null;
    };
  };
};

export const ChangeRentBookingTypeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'ChangeRentBookingType' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ShortTermSwitchRentBookingTypeRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rentAd__shortTerm_switchRentBookingType' },
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
                        name: { kind: 'Name', value: 'shortTermRent' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'rentBookingType' } },
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
export type ChangeRentBookingTypeMutationFn = Apollo.MutationFunction<
  ChangeRentBookingType,
  ChangeRentBookingTypeVariables
>;

/**
 * __useChangeRentBookingType__
 *
 * To run a mutation, you first call `useChangeRentBookingType` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeRentBookingType` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeRentBookingType, { data, loading, error }] = useChangeRentBookingType({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useChangeRentBookingType(
  baseOptions?: Apollo.MutationHookOptions<ChangeRentBookingType, ChangeRentBookingTypeVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<ChangeRentBookingType, ChangeRentBookingTypeVariables>(
    ChangeRentBookingTypeDocument,
    options,
  );
}
export type ChangeRentBookingTypeHookResult = ReturnType<typeof useChangeRentBookingType>;
export type ChangeRentBookingTypeMutationResult = Apollo.MutationResult<ChangeRentBookingType>;
export type ChangeRentBookingTypeMutationOptions = Apollo.BaseMutationOptions<
  ChangeRentBookingType,
  ChangeRentBookingTypeVariables
>;
