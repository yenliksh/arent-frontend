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
export type CreateRentAdvertVariables = Types.Exact<{
  input: Types.CreateApartmentAdRequest;
}>;

export type CreateRentAdvert = {
  __typename: 'Mutation';
  rentAd__create: {
    __typename: 'ApartmentAdResponse';
    apartmentAd: {
      __typename: 'ApartmentAdModel';
      id: string;
      rentPeriodType: Types.RentPeriodType;
      longTermRent?: { __typename: 'ApartmentAdLongTermRentModel'; id: string } | null;
      shortTermRent?: { __typename: 'ApartmentAdShortTermRentModel'; id: string } | null;
    };
  };
};

export const CreateRentAdvertDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateRentAdvert' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'CreateApartmentAdRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rentAd__create' },
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
                        name: { kind: 'Name', value: 'longTermRent' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'rentPeriodType' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'shortTermRent' },
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
export type CreateRentAdvertMutationFn = Apollo.MutationFunction<CreateRentAdvert, CreateRentAdvertVariables>;

/**
 * __useCreateRentAdvert__
 *
 * To run a mutation, you first call `useCreateRentAdvert` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRentAdvert` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRentAdvert, { data, loading, error }] = useCreateRentAdvert({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateRentAdvert(
  baseOptions?: Apollo.MutationHookOptions<CreateRentAdvert, CreateRentAdvertVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateRentAdvert, CreateRentAdvertVariables>(CreateRentAdvertDocument, options);
}
export type CreateRentAdvertHookResult = ReturnType<typeof useCreateRentAdvert>;
export type CreateRentAdvertMutationResult = Apollo.MutationResult<CreateRentAdvert>;
export type CreateRentAdvertMutationOptions = Apollo.BaseMutationOptions<CreateRentAdvert, CreateRentAdvertVariables>;
