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
export type SendToApproveRentAdvertVariables = Types.Exact<{
  input: Types.SendToApproveApartmentAdRequest;
}>;

export type SendToApproveRentAdvert = {
  __typename: 'Mutation';
  rentAd__send_to_approve: {
    __typename: 'ApartmentAdResponse';
    apartmentAd: { __typename: 'ApartmentAdModel'; id: string };
  };
};

export const SendToApproveRentAdvertDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SendToApproveRentAdvert' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'SendToApproveApartmentAdRequest' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rentAd__send_to_approve' },
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
} as unknown as DocumentNode;
export type SendToApproveRentAdvertMutationFn = Apollo.MutationFunction<
  SendToApproveRentAdvert,
  SendToApproveRentAdvertVariables
>;

/**
 * __useSendToApproveRentAdvert__
 *
 * To run a mutation, you first call `useSendToApproveRentAdvert` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendToApproveRentAdvert` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendToApproveRentAdvert, { data, loading, error }] = useSendToApproveRentAdvert({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSendToApproveRentAdvert(
  baseOptions?: Apollo.MutationHookOptions<SendToApproveRentAdvert, SendToApproveRentAdvertVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SendToApproveRentAdvert, SendToApproveRentAdvertVariables>(
    SendToApproveRentAdvertDocument,
    options,
  );
}
export type SendToApproveRentAdvertHookResult = ReturnType<typeof useSendToApproveRentAdvert>;
export type SendToApproveRentAdvertMutationResult = Apollo.MutationResult<SendToApproveRentAdvert>;
export type SendToApproveRentAdvertMutationOptions = Apollo.BaseMutationOptions<
  SendToApproveRentAdvert,
  SendToApproveRentAdvertVariables
>;
