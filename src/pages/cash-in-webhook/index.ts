import dynamic from 'next/dynamic';

const CashInWebhook = dynamic(() => import('../../pagesComponents/CashInWebhook/CashInWebhook'), {
  ssr: false,
});

export default CashInWebhook;
