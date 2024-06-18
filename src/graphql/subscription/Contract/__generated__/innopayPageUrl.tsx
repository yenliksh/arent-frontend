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
export type InnopayPageUrlVariables = Types.Exact<{ [key: string]: never }>;

export type InnopayPageUrl = {
  __typename: 'Subscription';
  innopayPageUrl: {
    __typename: 'InnopayPageUrlSubscriptionResponse';
    contractId?: string | null;
    startUrlDate: string;
    url: string;
  };
};

export const InnopayPageUrlDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'subscription',
      name: { kind: 'Name', value: 'InnopayPageUrl' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'innopayPageUrl' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'contractId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'startUrlDate' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;

/**
 * __useInnopayPageUrl__
 *
 * To run a query within a React component, call `useInnopayPageUrl` and pass it any options that fit your needs.
 * When your component renders, `useInnopayPageUrl` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInnopayPageUrl({
 *   variables: {
 *   },
 * });
 */
export function useInnopayPageUrl(
  baseOptions?: Apollo.SubscriptionHookOptions<InnopayPageUrl, InnopayPageUrlVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<InnopayPageUrl, InnopayPageUrlVariables>(InnopayPageUrlDocument, options);
}
export type InnopayPageUrlHookResult = ReturnType<typeof useInnopayPageUrl>;
export type InnopayPageUrlSubscriptionResult = Apollo.SubscriptionResult<InnopayPageUrl>;
