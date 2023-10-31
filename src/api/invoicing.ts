import { Invoicing } from '../models/invoicing';
import { delay, mockInvoicing, mockInvoicings } from './_mock';

// ----------------------------------------------------------------------

/* export const getInvoicings = (): Promise<AxiosResponse<Invoicing[]>> => {
  return axiosInstance.get<Invoicing[]>(`${import.meta.env.VITE_ENDPOINT_INVOICING}`);
}; */

export const getInvoicingItems = async (): Promise<Invoicing[]> => {
  await delay(2000);
  return Promise.resolve(mockInvoicings);
};

export const getInvoicingItem = async (id: string): Promise<Invoicing> => {
  await delay(5000);
  return Promise.resolve(mockInvoicing);
};
