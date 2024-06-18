import dynamic from 'next/dynamic';

const AddPaymentMethodResult = dynamic(
  () => import('../../pagesComponents/AddPaymentMethodResult/AddPaymentMethodResult'),
  {
    ssr: false,
  },
);

export default AddPaymentMethodResult;
