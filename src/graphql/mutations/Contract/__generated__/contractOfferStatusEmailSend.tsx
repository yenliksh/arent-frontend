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
export type ContractOfferStatusSendEmailVariables = Types.Exact<{
  input: Types.SendOfferStatusEmail;
}>;

export type ContractOfferStatusSendEmail = {
  __typename: 'Mutation';
  contractOfferStatus__sendEmail: { __typename: 'SendContractOfferStatusEmailResponse'; ok: boolean };
};

export const ContractOfferStatusSendEmailDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'ContractOfferStatusSendEmail' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'SendOfferStatusEmail' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'contractOfferStatus__sendEmail' },
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
export type ContractOfferStatusSendEmailMutationFn = Apollo.MutationFunction<
  ContractOfferStatusSendEmail,
  ContractOfferStatusSendEmailVariables
>;

/**
 * __useContractOfferStatusSendEmail__
 *
 * To run a mutation, you first call `useContractOfferStatusSendEmail` within a React component and pass it any options that fit your needs.
 * When your component renders, `useContractOfferStatusSendEmail` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [contractOfferStatusSendEmail, { data, loading, error }] = useContractOfferStatusSendEmail({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useContractOfferStatusSendEmail(
  baseOptions?: Apollo.MutationHookOptions<ContractOfferStatusSendEmail, ContractOfferStatusSendEmailVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<ContractOfferStatusSendEmail, ContractOfferStatusSendEmailVariables>(
    ContractOfferStatusSendEmailDocument,
    options,
  );
}
export type ContractOfferStatusSendEmailHookResult = ReturnType<typeof useContractOfferStatusSendEmail>;
export type ContractOfferStatusSendEmailMutationResult = Apollo.MutationResult<ContractOfferStatusSendEmail>;
export type ContractOfferStatusSendEmailMutationOptions = Apollo.BaseMutationOptions<
  ContractOfferStatusSendEmail,
  ContractOfferStatusSendEmailVariables
>;
