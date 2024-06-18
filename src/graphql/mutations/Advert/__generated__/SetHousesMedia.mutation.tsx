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
export type SetRentPhotoVariables = Types.Exact<{
  input: Types.EditApartmentAdMediaRequest;
}>;

export type SetRentPhoto = {
  __typename: 'Mutation';
  rentAd__edit_media: {
    __typename: 'ApartmentAdResponse';
    apartmentAd: {
      __typename: 'ApartmentAdModel';
      id: string;
      photos: Array<{ __typename: 'ApartmentAdMediaModel'; fileKey: string; order: number }>;
    };
  };
};

export const SetRentPhotoDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SetRentPhoto' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'EditApartmentAdMediaRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rentAd__edit_media' },
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
                        name: { kind: 'Name', value: 'photos' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'fileKey' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'order' } },
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
export type SetRentPhotoMutationFn = Apollo.MutationFunction<SetRentPhoto, SetRentPhotoVariables>;

/**
 * __useSetRentPhoto__
 *
 * To run a mutation, you first call `useSetRentPhoto` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetRentPhoto` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setRentPhoto, { data, loading, error }] = useSetRentPhoto({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSetRentPhoto(baseOptions?: Apollo.MutationHookOptions<SetRentPhoto, SetRentPhotoVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SetRentPhoto, SetRentPhotoVariables>(SetRentPhotoDocument, options);
}
export type SetRentPhotoHookResult = ReturnType<typeof useSetRentPhoto>;
export type SetRentPhotoMutationResult = Apollo.MutationResult<SetRentPhoto>;
export type SetRentPhotoMutationOptions = Apollo.BaseMutationOptions<SetRentPhoto, SetRentPhotoVariables>;
