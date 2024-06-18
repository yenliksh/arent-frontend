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
export type GetCardsVariables = Types.Exact<{ [key: string]: never }>;

export type GetCards = {
  __typename: 'Query';
  innopay__my_cards: Array<{
    __typename: 'InnopayCardModel';
    appointmentType: Types.InnopayAppointmentCardType;
    cardType: Types.InnopayCardType;
    cnpCardId: number;
    createdAt: string;
    deletedAt?: string | null;
    id: string;
    panMasked: string;
    updatedAt: string;
  }>;
};

export const GetCardsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetCards' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'innopay__my_cards' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'appointmentType' } },
                { kind: 'Field', name: { kind: 'Name', value: 'cardType' } },
                { kind: 'Field', name: { kind: 'Name', value: 'cnpCardId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'deletedAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'panMasked' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;

/**
 * __useGetCards__
 *
 * To run a query within a React component, call `useGetCards` and pass it any options that fit your needs.
 * When your component renders, `useGetCards` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCards({
 *   variables: {
 *   },
 * });
 */
export function useGetCards(baseOptions?: Apollo.QueryHookOptions<GetCards, GetCardsVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCards, GetCardsVariables>(GetCardsDocument, options);
}
export function useGetCardsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCards, GetCardsVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCards, GetCardsVariables>(GetCardsDocument, options);
}
export type GetCardsHookResult = ReturnType<typeof useGetCards>;
export type GetCardsLazyQueryHookResult = ReturnType<typeof useGetCardsLazyQuery>;
export type GetCardsQueryResult = Apollo.QueryResult<GetCards, GetCardsVariables>;
