import fetch from 'isomorphic-fetch';
import { CookieKeys, getCookie, setCookie } from 'utils/cookie';

// eslint-disable-next-line import/no-cycle
import { logout } from './client';

const UNAUTHENTICATED = 'UNAUTHENTICATED';

const getResult = (json: any, response: any) => ({
  ...response,
  ok: true,
  // eslint-disable-next-line no-promise-executor-return
  json: () => new Promise((resolve) => resolve(json)),
  // eslint-disable-next-line no-promise-executor-return
  text: () => new Promise<string>((resolve) => resolve(JSON.stringify(json) as string)),
});

const updateTokenByRefreshToken = async () => {
  const refreshToken = getCookie(CookieKeys.REFRESH_TOKEN);

  if (!refreshToken) {
    return null;
  }

  const refreshTokenUrl = 'user/refresh-token';

  try {
    const initialRequest = await fetch(refreshTokenUrl, {
      method: 'GET',
      credentials: 'include',
      headers: { Authorization: `Bearer ${refreshToken}` },
    });
    const json = await initialRequest.json();

    if (!json.token || !json.refreshToken) {
      throw new Error('Refresh token was not updated');
    }
    setCookie(CookieKeys.TOKEN, json?.token);
    setCookie(CookieKeys.REFRESH_TOKEN, json?.refreshToken);

    return json?.token;
  } catch (error) {
    console.error(JSON.stringify(error, null, 2));
    throw new Error('Refresh token was not updated');
  }
};

export const customFetch = async (uri: string, options?: any) => {
  const accessToken = getCookie(CookieKeys.TOKEN);
  const registerToken = getCookie(CookieKeys.REGISTRATION_TOKEN);
  if (registerToken) {
    options.headers.authorization = `Bearer ${registerToken}`;
  } else {
    options.headers.authorization = `Bearer ${accessToken}`;
  }
  const initialRequest = fetch(uri, options);
  return initialRequest.then(async (response) => {
    const json = await response.json();

    const error = json?.errors?.[0];
    const errorStatus = error?.extensions?.exception?.status;

    console.log(error?.extensions?.code, 'error by UNAUTHENTICATED');

    if (error?.extensions?.code === UNAUTHENTICATED) {
      try {
        const token = await updateTokenByRefreshToken();

        if (token) {
          options.headers.authorization = `Bearer ${token}`;
          const refreshResponse = await fetch(uri, options);
          const refreshJson = await refreshResponse.json();

          return getResult(refreshJson, refreshResponse);
        }
        console.error("Refresh token doesn't exist");
        logout();
      } catch (error) {
        logout();
      }
    } else if (errorStatus === 422) {
      console.error('Something went wrong');
      logout();
    }

    return getResult(json, response);
  });
};
