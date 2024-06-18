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
export type SetInnopayCardStartVariables = Types.Exact<{ [key: string]: never }>;

export type SetInnopayCardStart = {
  __typename: 'Mutation';
  innopay_card__save: {
    __typename: 'SaveCardStartResponse';
    ok: boolean;
    url?: string | null;
    problem?: { __typename: 'InnopayServiceBadRequestProblem'; message: string } | null;
  };
};

export const SetInnopayCardStartDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SetInnopayCardStart' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'innopay_card__save' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'ok' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'problem' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'message' } }],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export type SetInnopayCardStartMutationFn = Apollo.MutationFunction<SetInnopayCardStart, SetInnopayCardStartVariables>;

/**
 * __useSetInnopayCardStart__
 *
 * To run a mutation, you first call `useSetInnopayCardStart` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetInnopayCardStart` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setInnopayCardStart, { data, loading, error }] = useSetInnopayCardStart({
 *   variables: {
 *   },
 * });
 */
export function useSetInnopayCardStart(
  baseOptions?: Apollo.MutationHookOptions<SetInnopayCardStart, SetInnopayCardStartVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SetInnopayCardStart, SetInnopayCardStartVariables>(SetInnopayCardStartDocument, options);
}
export type SetInnopayCardStartHookResult = ReturnType<typeof useSetInnopayCardStart>;
export type SetInnopayCardStartMutationResult = Apollo.MutationResult<SetInnopayCardStart>;
export type SetInnopayCardStartMutationOptions = Apollo.BaseMutationOptions<
  SetInnopayCardStart,
  SetInnopayCardStartVariables
>;
