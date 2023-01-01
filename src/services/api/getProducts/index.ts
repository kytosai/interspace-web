import { GetProductsReponse, GetProductsRequest } from './types';
import { getHttpClient } from '@/helpers/httpClientHelper';

const API_URL = '/products';

export const getProducts = async (request?: GetProductsRequest) => {
  try {
    const httpClient = await getHttpClient();

    return await httpClient.get<GetProductsReponse>(API_URL, {
      params: request,
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
