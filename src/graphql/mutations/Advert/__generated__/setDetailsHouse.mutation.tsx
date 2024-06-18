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
export type SetRentDetailsVariables = Types.Exact<{
  input: Types.EditApartmentAdDetailsRequest;
}>;

export type SetRentDetails = {
  __typename: 'Mutation';
  rentAd__edit_details: {
    __typename: 'ApartmentAdResponse';
    apartmentAd: {
      __typename: 'ApartmentAdModel';
      id: string;
      details?: { __typename: 'ApartmentAdDetailsModel'; numberOfGuests: number; numberOfRooms: number } | null;
    };
  };
};

export const SetRentDetailsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SetRentDetails' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'EditApartmentAdDetailsRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rentAd__edit_details' },
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
                        name: { kind: 'Name', value: 'details' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'numberOfGuests' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'numberOfRooms' } },
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
export type SetRentDetailsMutationFn = Apollo.MutationFunction<SetRentDetails, SetRentDetailsVariables>;

/**
 * __useSetRentDetails__
 *
 * To run a mutation, you first call `useSetRentDetails` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetRentDetails` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setRentDetails, { data, loading, error }] = useSetRentDetails({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSetRentDetails(baseOptions?: Apollo.MutationHookOptions<SetRentDetails, SetRentDetailsVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SetRentDetails, SetRentDetailsVariables>(SetRentDetailsDocument, options);
}
export type SetRentDetailsHookResult = ReturnType<typeof useSetRentDetails>;
export type SetRentDetailsMutationResult = Apollo.MutationResult<SetRentDetails>;
export type SetRentDetailsMutationOptions = Apollo.BaseMutationOptions<SetRentDetails, SetRentDetailsVariables>;
