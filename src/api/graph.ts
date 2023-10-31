import { AxiosResponse } from 'axios';

import { User } from '../models/user';
import axiosInstance from './axiosInstance';

// ----------------------------------------------------------------------

export const getUserApi = (msLocalAccountId: string): Promise<AxiosResponse<User>> => {
  return axiosInstance.get<User>(`${import.meta.env.VITE_ENDPOINT_GRAPH}/${msLocalAccountId}`);
};
