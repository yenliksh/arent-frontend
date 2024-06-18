import Script from 'next/script';
import { FC } from 'react';

const AnalyticGoogleTag: FC = () => {
  return (
    <>
      <Script id="google-tag-analytic-script" async src="https://www.googletagmanager.com/gtag/js?id=G-8VFEQ45S5E" />
      <Script id="google-tag-analytic">
        {`
        window.dataLayer = window.dataLayer || []; 
        function gtag(){dataLayer.push(arguments);} 
        gtag('js', new Date()); 
 
        gtag('config', 'G-8VFEQ45S5E');
        `}
      </Script>
    </>
  );
};

export default AnalyticGoogleTag;
