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
export type StopRentAdvertVariables = Types.Exact<{
  input: Types.PauseApartmentAdRequest;
}>;

export type StopRentAdvert = {
  __typename: 'Mutation';
  rentAd__pause: {
    __typename: 'ApartmentAdResponse';
    apartmentAd: {
      __typename: 'ApartmentAdModel';
      id: string;
      shortTermRent?: { __typename: 'ApartmentAdShortTermRentModel'; id: string } | null;
      longTermRent?: { __typename: 'ApartmentAdLongTermRentModel'; id: string } | null;
    };
  };
};

export const StopRentAdvertDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'StopRentAdvert' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'PauseApartmentAdRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rentAd__pause' },
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
export type StopRentAdvertMutationFn = Apollo.MutationFunction<StopRentAdvert, StopRentAdvertVariables>;

/**
 * __useStopRentAdvert__
 *
 * To run a mutation, you first call `useStopRentAdvert` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStopRentAdvert` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [stopRentAdvert, { data, loading, error }] = useStopRentAdvert({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useStopRentAdvert(baseOptions?: Apollo.MutationHookOptions<StopRentAdvert, StopRentAdvertVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<StopRentAdvert, StopRentAdvertVariables>(StopRentAdvertDocument, options);
}
export type StopRentAdvertHookResult = ReturnType<typeof useStopRentAdvert>;
export type StopRentAdvertMutationResult = Apollo.MutationResult<StopRentAdvert>;
export type StopRentAdvertMutationOptions = Apollo.BaseMutationOptions<StopRentAdvert, StopRentAdvertVariables>;
