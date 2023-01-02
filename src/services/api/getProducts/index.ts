import { GetProductsReponse, GetProductsRequest } from './types';
import { getHttpClient } from '@/helpers/httpClientHelper';

const API_URL = '/products';

export const getProducts = async (request?: GetProductsRequest) => {
  try {
    const httpClient = await getHttpClient();
    const soryByObj = (() => {
      switch (request?.sort_by) {
        case 'created_at':
          return {
            _sort: 'created_at',
            _order: 'desc',
          };
        case 'price_asc':
          return {
            _sort: 'product_price',
            _order: 'asc',
          };
        default:
          return;
      }
    })();

    return await httpClient.get<GetProductsReponse>(API_URL, {
      params: {
        ...request,
        ...soryByObj,
        sort_by: undefined,
      },
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
