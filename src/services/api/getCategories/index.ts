import { GetCategoriesRequest, GetCategoriesReponse } from './types';
import { getHttpClient } from '@/helpers/httpClientHelper';

const API_URL = '/categories';

export const getCategories = async (request?: GetCategoriesReponse) => {
  try {
    const httpClient = await getHttpClient();

    return await httpClient.get<GetCategoriesRequest>(API_URL, {
      params: request,
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
