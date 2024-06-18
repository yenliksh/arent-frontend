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
export type SendRentAdComplaintVariables = Types.Exact<{
  input: Types.CreateApartmentAdComplaintRequest;
}>;

export type SendRentAdComplaint = {
  __typename: 'Mutation';
  rent_ad_complaint__send: { __typename: 'ApartmentAdComplaintResponse'; ok: boolean };
};

export const SendRentAdComplaintDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SendRentAdComplaint' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'CreateApartmentAdComplaintRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rent_ad_complaint__send' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'ok' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export type SendRentAdComplaintMutationFn = Apollo.MutationFunction<SendRentAdComplaint, SendRentAdComplaintVariables>;

/**
 * __useSendRentAdComplaint__
 *
 * To run a mutation, you first call `useSendRentAdComplaint` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendRentAdComplaint` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendRentAdComplaint, { data, loading, error }] = useSendRentAdComplaint({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSendRentAdComplaint(
  baseOptions?: Apollo.MutationHookOptions<SendRentAdComplaint, SendRentAdComplaintVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SendRentAdComplaint, SendRentAdComplaintVariables>(SendRentAdComplaintDocument, options);
}
export type SendRentAdComplaintHookResult = ReturnType<typeof useSendRentAdComplaint>;
export type SendRentAdComplaintMutationResult = Apollo.MutationResult<SendRentAdComplaint>;
export type SendRentAdComplaintMutationOptions = Apollo.BaseMutationOptions<
  SendRentAdComplaint,
  SendRentAdComplaintVariables
>;
