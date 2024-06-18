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
export type SetOwnershipDocsVariables = Types.Exact<{
  input: Types.AddApartmentAdOwnershipDocumentRequest;
}>;

export type SetOwnershipDocs = {
  __typename: 'Mutation';
  rentAd__add_ownershipDocs: {
    __typename: 'ApartmentAdResponse';
    apartmentAd: {
      __typename: 'ApartmentAdModel';
      id: string;
      longTermRent?: {
        __typename: 'ApartmentAdLongTermRentModel';
        id: string;
        ownershipDocuments?: Array<string> | null;
      } | null;
    };
  };
};

export const SetOwnershipDocsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SetOwnershipDocs' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'AddApartmentAdOwnershipDocumentRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rentAd__add_ownershipDocs' },
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
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'ownershipDocuments' } },
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
export type SetOwnershipDocsMutationFn = Apollo.MutationFunction<SetOwnershipDocs, SetOwnershipDocsVariables>;

/**
 * __useSetOwnershipDocs__
 *
 * To run a mutation, you first call `useSetOwnershipDocs` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetOwnershipDocs` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setOwnershipDocs, { data, loading, error }] = useSetOwnershipDocs({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSetOwnershipDocs(
  baseOptions?: Apollo.MutationHookOptions<SetOwnershipDocs, SetOwnershipDocsVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SetOwnershipDocs, SetOwnershipDocsVariables>(SetOwnershipDocsDocument, options);
}
export type SetOwnershipDocsHookResult = ReturnType<typeof useSetOwnershipDocs>;
export type SetOwnershipDocsMutationResult = Apollo.MutationResult<SetOwnershipDocs>;
export type SetOwnershipDocsMutationOptions = Apollo.BaseMutationOptions<SetOwnershipDocs, SetOwnershipDocsVariables>;
