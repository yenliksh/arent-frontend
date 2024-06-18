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
export type CreateRentIdentificatorVariables = Types.Exact<{
  input: Types.CreateApartmentAdIdentificatorRequest;
}>;

export type CreateRentIdentificator = {
  __typename: 'Mutation';
  rentAdIdentificator__create: { __typename: 'ApartmentAdIdentificatorResponse'; apartmentId: string };
};

export const CreateRentIdentificatorDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateRentIdentificator' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'CreateApartmentAdIdentificatorRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rentAdIdentificator__create' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'apartmentId' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export type CreateRentIdentificatorMutationFn = Apollo.MutationFunction<
  CreateRentIdentificator,
  CreateRentIdentificatorVariables
>;

/**
 * __useCreateRentIdentificator__
 *
 * To run a mutation, you first call `useCreateRentIdentificator` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRentIdentificator` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRentIdentificator, { data, loading, error }] = useCreateRentIdentificator({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateRentIdentificator(
  baseOptions?: Apollo.MutationHookOptions<CreateRentIdentificator, CreateRentIdentificatorVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateRentIdentificator, CreateRentIdentificatorVariables>(
    CreateRentIdentificatorDocument,
    options,
  );
}
export type CreateRentIdentificatorHookResult = ReturnType<typeof useCreateRentIdentificator>;
export type CreateRentIdentificatorMutationResult = Apollo.MutationResult<CreateRentIdentificator>;
export type CreateRentIdentificatorMutationOptions = Apollo.BaseMutationOptions<
  CreateRentIdentificator,
  CreateRentIdentificatorVariables
>;
