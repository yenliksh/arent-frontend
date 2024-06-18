import '../styles/general/fonts.css';

import { ApolloProvider } from '@apollo/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import UserProvider from 'hocs/userProvider';
import { use100vhHeight } from 'hooks';
import { client } from 'libs/apollo-client/client';
import { tokenVar } from 'libs/apollo-client/react-variables';
import type { AppContext, AppProps } from 'next/app';
import NextApp from 'next/app';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import { StyledToastContainer } from 'styles/components/styledToastContainer';
import { GlobalStyle } from 'styles/general/global';
import { theme } from 'styles/themes';
import { CookieKeys, getCookie } from 'utils/cookie';

import nextI18nConfig from '../../next-i18next.config';
import favicon from '../../public/img/favicon.ico';
import { AppConfig } from '../constains';

function MyApp({ Component, pageProps }: AppProps) {
  const token = pageProps.token as string;

  useEffect(() => {
    tokenVar(token);
  }, [token]);

  use100vhHeight();

  return (
    <>
      <GlobalStyle />
      <GoogleOAuthProvider clientId={AppConfig.REACT_APP_GOOGLE_OAUTH_CLIENT_ID ?? ''}>
        <HelmetProvider>
          <ThemeProvider theme={theme.default}>
            <ApolloProvider client={client}>
              <UserProvider>
                <StyledToastContainer />
                <Head>
                  <link rel="icon" href={favicon.src} type="image/x-icon" />
                  <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
                  <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
                  />
                  <meta name="title" content="Аренда жилья в Казахстане по лучшим ценам от владельцев | aRent" />
                  <meta
                    name="description"
                    content="На aRent.app вы можете снять и сдать жилье в долгосрочную и краткосрочную аренду в любом городе Казахстана ✔ Ежедневное обновление ✔ Проверка владельцев."
                  />
                </Head>
                <Component {...pageProps} />
              </UserProvider>
            </ApolloProvider>
          </ThemeProvider>
        </HelmetProvider>
      </GoogleOAuthProvider>
    </>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const { ctx } = appContext;
  const appProps = await NextApp.getInitialProps(appContext);

  let accessToken;
  let fromSkeleton;

  if (ctx.req) {
    accessToken = getCookie(CookieKeys.TOKEN, ctx.req);
    fromSkeleton = getCookie('fromSkeleton', ctx.req);
  }

  return { ...appProps, pageProps: { ...appProps.pageProps, token: accessToken || '', fromSkeleton } };
};

export default appWithTranslation(MyApp, nextI18nConfig);
