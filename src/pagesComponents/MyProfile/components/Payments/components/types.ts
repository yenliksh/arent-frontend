import { GetHistoryInvoice } from 'graphql/queries/User/__generated__/getHistoryInvoice.query';
import { ArrElement } from 'types';

export type CustomPaymentInvoiceModel = ArrElement<GetHistoryInvoice['paymentTransaction_historyInvoice']['data']>;
