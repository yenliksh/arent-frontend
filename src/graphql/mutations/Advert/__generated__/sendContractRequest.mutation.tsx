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
export type SendContractRequestVariables = Types.Exact<{
  input: Types.SendRequest;
}>;

export type SendContractRequest = {
  __typename: 'Mutation';
  contract_request__send: {
    __typename: 'ContractRequestResponse';
    problem?:
      | { __typename: 'ChosenDatesIsNotAvailableProblem'; message: string }
      | { __typename: 'ContractRequestAlreadyExistsProblem'; message: string }
      | { __typename: 'ReduceTheNumberOfGuestsProblem'; message: string }
      | { __typename: 'SpecifyPaymentMethodProblem'; message: string }
      | null;
    contractRequest?: {
      __typename: 'ContractRequestModel';
      id: string;
      apartmentAdId?: string | null;
      apartmentRentPeriodType: Types.ApartmentRentPeriodType;
      arrivalDate?: string | null;
      createdAt: string;
      deletedAt?: string | null;
      departureDate?: string | null;
      status: Types.ContractRequestStatus;
      tenantId?: string | null;
      updatedAt: string;
      apartmentAd: {
        __typename: 'ApartmentAdViewModel';
        id: string;
        contractRequests?: Array<{
          __typename: 'ContractRequestModel';
          id: string;
          status: Types.ContractRequestStatus;
        }> | null;
      };
      guests: {
        __typename: 'ApartmentGuestsModel';
        numberOfChildren: number;
        numberOfAdult: number;
        numberOfPets: number;
      };
      tenant: { __typename: 'UserModel'; firstName: string; id: string; lastName: string };
    } | null;
  };
};

export const SendContractRequestDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SendContractRequest' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'SendRequest' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'contract_request__send' },
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
                  name: { kind: 'Name', value: 'problem' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'ChosenDatesIsNotAvailableProblem' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{ kind: 'Field', name: { kind: 'Name', value: 'message' } }],
                        },
                      },
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'ReduceTheNumberOfGuestsProblem' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{ kind: 'Field', name: { kind: 'Name', value: 'message' } }],
                        },
                      },
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'ContractRequestAlreadyExistsProblem' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{ kind: 'Field', name: { kind: 'Name', value: 'message' } }],
                        },
                      },
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'ReduceTheNumberOfGuestsProblem' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{ kind: 'Field', name: { kind: 'Name', value: 'message' } }],
                        },
                      },
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'SpecifyPaymentMethodProblem' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{ kind: 'Field', name: { kind: 'Name', value: 'message' } }],
                        },
                      },
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'ContractRequestAlreadyExistsProblem' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{ kind: 'Field', name: { kind: 'Name', value: 'message' } }],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'contractRequest' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'apartmentAdId' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'apartmentRentPeriodType' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'arrivalDate' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'deletedAt' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'departureDate' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'apartmentAd' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'contractRequests' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'guests' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'numberOfChildren' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'numberOfAdult' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'numberOfPets' } },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tenant' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'tenantId' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export type SendContractRequestMutationFn = Apollo.MutationFunction<SendContractRequest, SendContractRequestVariables>;

/**
 * __useSendContractRequest__
 *
 * To run a mutation, you first call `useSendContractRequest` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendContractRequest` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendContractRequest, { data, loading, error }] = useSendContractRequest({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSendContractRequest(
  baseOptions?: Apollo.MutationHookOptions<SendContractRequest, SendContractRequestVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SendContractRequest, SendContractRequestVariables>(SendContractRequestDocument, options);
}
export type SendContractRequestHookResult = ReturnType<typeof useSendContractRequest>;
export type SendContractRequestMutationResult = Apollo.MutationResult<SendContractRequest>;
export type SendContractRequestMutationOptions = Apollo.BaseMutationOptions<
  SendContractRequest,
  SendContractRequestVariables
>;
