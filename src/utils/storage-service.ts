import { InnopayPageUrl } from 'graphql/subscription/Contract/__generated__/innopayPageUrl';

export enum StorageKeys {
  ARENT_ID = 'arent_id_',
}

export const getStorageById = (id: string): InnopayPageUrl => {
  const jsonItemFromLocaleStorage = localStorage.getItem(`${StorageKeys.ARENT_ID}${id}`);
  return jsonItemFromLocaleStorage && JSON.parse(jsonItemFromLocaleStorage);
};

export const setStorageById = (id: string, payload: InnopayPageUrl) => {
  return localStorage.setItem(`${StorageKeys.ARENT_ID}${id}`, JSON.stringify(payload));
};

export const resetStorageById = (id: string) => {
  return localStorage.removeItem(`${StorageKeys.ARENT_ID}${id}`);
};
