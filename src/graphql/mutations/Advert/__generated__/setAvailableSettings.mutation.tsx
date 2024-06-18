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
export type SetAvailableSettingsVariables = Types.Exact<{
  input: Types.EditShortTermRentAvailabilitySettingsRequest;
}>;

export type SetAvailableSettings = {
  __typename: 'Mutation';
  rentAd__edit_availabilitySettings: {
    __typename: 'ApartmentAdResponse';
    apartmentAd: {
      __typename: 'ApartmentAdModel';
      id: string;
      shortTermRent?: {
        __typename: 'ApartmentAdShortTermRentModel';
        bookingAccessInMonths?: number | null;
        lockedDates: Array<{ __typename: 'ApartmentAdLockedDatesModel'; startDate: string; endDate: string }>;
      } | null;
    };
  };
};

export const SetAvailableSettingsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SetAvailableSettings' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'EditShortTermRentAvailabilitySettingsRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rentAd__edit_availabilitySettings' },
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
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'lockedDates' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'startDate' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'endDate' } },
                                ],
                              },
                            },
                            { kind: 'Field', name: { kind: 'Name', value: 'bookingAccessInMonths' } },
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
export type SetAvailableSettingsMutationFn = Apollo.MutationFunction<
  SetAvailableSettings,
  SetAvailableSettingsVariables
>;

/**
 * __useSetAvailableSettings__
 *
 * To run a mutation, you first call `useSetAvailableSettings` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetAvailableSettings` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setAvailableSettings, { data, loading, error }] = useSetAvailableSettings({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSetAvailableSettings(
  baseOptions?: Apollo.MutationHookOptions<SetAvailableSettings, SetAvailableSettingsVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SetAvailableSettings, SetAvailableSettingsVariables>(SetAvailableSettingsDocument, options);
}
export type SetAvailableSettingsHookResult = ReturnType<typeof useSetAvailableSettings>;
export type SetAvailableSettingsMutationResult = Apollo.MutationResult<SetAvailableSettings>;
export type SetAvailableSettingsMutationOptions = Apollo.BaseMutationOptions<
  SetAvailableSettings,
  SetAvailableSettingsVariables
>;
