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
export type EditFirstStepVariables = Types.Exact<{
  input: Types.EditApartmentAdRequest;
}>;

export type EditFirstStep = {
  __typename: 'Mutation';
  rentAd__edit: {
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

export const EditFirstStepDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'EditFirstStep' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'EditApartmentAdRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rentAd__edit' },
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
export type EditFirstStepMutationFn = Apollo.MutationFunction<EditFirstStep, EditFirstStepVariables>;

/**
 * __useEditFirstStep__
 *
 * To run a mutation, you first call `useEditFirstStep` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditFirstStep` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editFirstStep, { data, loading, error }] = useEditFirstStep({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditFirstStep(baseOptions?: Apollo.MutationHookOptions<EditFirstStep, EditFirstStepVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<EditFirstStep, EditFirstStepVariables>(EditFirstStepDocument, options);
}
export type EditFirstStepHookResult = ReturnType<typeof useEditFirstStep>;
export type EditFirstStepMutationResult = Apollo.MutationResult<EditFirstStep>;
export type EditFirstStepMutationOptions = Apollo.BaseMutationOptions<EditFirstStep, EditFirstStepVariables>;
