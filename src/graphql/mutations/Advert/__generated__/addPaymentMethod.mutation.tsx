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
export type AddPaymentMethodVariables = Types.Exact<{
  input: Types.AddApartmentAdPaymentMethodRequest;
}>;

export type AddPaymentMethod = {
  __typename: 'Mutation';
  rentAd__add_paymentMethod: {
    __typename: 'ApartmentAdResponse';
    apartmentAd: {
      __typename: 'ApartmentAdModel';
      id: string;
      innopayCardId?: string | null;
      landlord: { __typename: 'UserMeModel'; id: string };
      longTermRent?: { __typename: 'ApartmentAdLongTermRentModel'; id: string } | null;
      shortTermRent?: { __typename: 'ApartmentAdShortTermRentModel'; id: string } | null;
    };
  };
};

export const AddPaymentMethodDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'AddPaymentMethod' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'AddApartmentAdPaymentMethodRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rentAd__add_paymentMethod' },
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
                      { kind: 'Field', name: { kind: 'Name', value: 'innopayCardId' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'landlord' },
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
export type AddPaymentMethodMutationFn = Apollo.MutationFunction<AddPaymentMethod, AddPaymentMethodVariables>;

/**
 * __useAddPaymentMethod__
 *
 * To run a mutation, you first call `useAddPaymentMethod` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPaymentMethod` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPaymentMethod, { data, loading, error }] = useAddPaymentMethod({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddPaymentMethod(
  baseOptions?: Apollo.MutationHookOptions<AddPaymentMethod, AddPaymentMethodVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddPaymentMethod, AddPaymentMethodVariables>(AddPaymentMethodDocument, options);
}
export type AddPaymentMethodHookResult = ReturnType<typeof useAddPaymentMethod>;
export type AddPaymentMethodMutationResult = Apollo.MutationResult<AddPaymentMethod>;
export type AddPaymentMethodMutationOptions = Apollo.BaseMutationOptions<AddPaymentMethod, AddPaymentMethodVariables>;
