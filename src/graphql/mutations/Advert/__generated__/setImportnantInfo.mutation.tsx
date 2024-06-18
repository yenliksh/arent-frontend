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
export type SetImportantInfoVariables = Types.Exact<{
  input: Types.EditApartmentAdImportantInfoRequest;
}>;

export type SetImportantInfo = {
  __typename: 'Mutation';
  rentAd__edit_importantInfo: {
    __typename: 'ApartmentAdResponse';
    apartmentAd: {
      __typename: 'ApartmentAdModel';
      id: string;
      rules?: {
        __typename: 'ApartmentAdRulesModel';
        allowedToSmoke: boolean;
        allowedWithPets: boolean;
        allowedToHangingOut: boolean;
        allowedWithChildren: boolean;
      } | null;
      shortTermRent?: {
        __typename: 'ApartmentAdShortTermRentModel';
        arrivalTime?: string | null;
        cancellationPolicy?: Types.ShortTermRentCancellationPolicyType | null;
      } | null;
    };
  };
};

export const SetImportantInfoDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SetImportantInfo' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'EditApartmentAdImportantInfoRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rentAd__edit_importantInfo' },
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
                        name: { kind: 'Name', value: 'rules' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'allowedToSmoke' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'allowedWithPets' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'allowedToHangingOut' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'allowedWithChildren' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'allowedToSmoke' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'shortTermRent' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'arrivalTime' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'cancellationPolicy' } },
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
export type SetImportantInfoMutationFn = Apollo.MutationFunction<SetImportantInfo, SetImportantInfoVariables>;

/**
 * __useSetImportantInfo__
 *
 * To run a mutation, you first call `useSetImportantInfo` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetImportantInfo` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setImportantInfo, { data, loading, error }] = useSetImportantInfo({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSetImportantInfo(
  baseOptions?: Apollo.MutationHookOptions<SetImportantInfo, SetImportantInfoVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SetImportantInfo, SetImportantInfoVariables>(SetImportantInfoDocument, options);
}
export type SetImportantInfoHookResult = ReturnType<typeof useSetImportantInfo>;
export type SetImportantInfoMutationResult = Apollo.MutationResult<SetImportantInfo>;
export type SetImportantInfoMutationOptions = Apollo.BaseMutationOptions<SetImportantInfo, SetImportantInfoVariables>;
