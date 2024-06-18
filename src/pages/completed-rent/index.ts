import dynamic from 'next/dynamic';

const CompletedRent = dynamic(() => import('../../pagesComponents/CompletedRent/CompletedRent'), {
  ssr: false,
});

export default CompletedRent;
