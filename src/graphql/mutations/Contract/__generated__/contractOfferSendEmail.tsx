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
export type ContractOfferSendEmailVariables = Types.Exact<{
  input: Types.SendOfferEmail;
}>;

export type ContractOfferSendEmail = {
  __typename: 'Mutation';
  contractOffer__sendEmail: { __typename: 'SendContractOfferEmailResponse'; ok: boolean };
};

export const ContractOfferSendEmailDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'ContractOfferSendEmail' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'SendOfferEmail' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'contractOffer__sendEmail' },
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
export type ContractOfferSendEmailMutationFn = Apollo.MutationFunction<
  ContractOfferSendEmail,
  ContractOfferSendEmailVariables
>;

/**
 * __useContractOfferSendEmail__
 *
 * To run a mutation, you first call `useContractOfferSendEmail` within a React component and pass it any options that fit your needs.
 * When your component renders, `useContractOfferSendEmail` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [contractOfferSendEmail, { data, loading, error }] = useContractOfferSendEmail({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useContractOfferSendEmail(
  baseOptions?: Apollo.MutationHookOptions<ContractOfferSendEmail, ContractOfferSendEmailVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<ContractOfferSendEmail, ContractOfferSendEmailVariables>(
    ContractOfferSendEmailDocument,
    options,
  );
}
export type ContractOfferSendEmailHookResult = ReturnType<typeof useContractOfferSendEmail>;
export type ContractOfferSendEmailMutationResult = Apollo.MutationResult<ContractOfferSendEmail>;
export type ContractOfferSendEmailMutationOptions = Apollo.BaseMutationOptions<
  ContractOfferSendEmail,
  ContractOfferSendEmailVariables
>;
