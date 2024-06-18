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
export type SetRentDescriptionVariables = Types.Exact<{
  input: Types.EditApartmentAdDescriptionRequest;
}>;

export type SetRentDescription = {
  __typename: 'Mutation';
  rentAd__edit_description: {
    __typename: 'ApartmentAdResponse';
    apartmentAd: {
      __typename: 'ApartmentAdModel';
      id: string;
      description?: {
        __typename: 'ApartmentAdDescriptionModel';
        name: string;
        description?: string | null;
        freeParking?: boolean | null;
        quite?: boolean | null;
        selfCheckIn?: boolean | null;
        workSpace?: boolean | null;
        forFamily?: boolean | null;
        remoteView?: boolean | null;
      } | null;
    };
  };
};

export const SetRentDescriptionDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SetRentDescription' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'EditApartmentAdDescriptionRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rentAd__edit_description' },
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
                        name: { kind: 'Name', value: 'description' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'freeParking' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'quite' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'selfCheckIn' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'workSpace' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'forFamily' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'remoteView' } },
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
export type SetRentDescriptionMutationFn = Apollo.MutationFunction<SetRentDescription, SetRentDescriptionVariables>;

/**
 * __useSetRentDescription__
 *
 * To run a mutation, you first call `useSetRentDescription` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetRentDescription` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setRentDescription, { data, loading, error }] = useSetRentDescription({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSetRentDescription(
  baseOptions?: Apollo.MutationHookOptions<SetRentDescription, SetRentDescriptionVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SetRentDescription, SetRentDescriptionVariables>(SetRentDescriptionDocument, options);
}
export type SetRentDescriptionHookResult = ReturnType<typeof useSetRentDescription>;
export type SetRentDescriptionMutationResult = Apollo.MutationResult<SetRentDescription>;
export type SetRentDescriptionMutationOptions = Apollo.BaseMutationOptions<
  SetRentDescription,
  SetRentDescriptionVariables
>;
