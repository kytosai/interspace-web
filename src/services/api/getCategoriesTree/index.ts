import { GetCategoriesTreeReponse } from './types';
import { getHttpClient } from '@/helpers/httpClientHelper';

const API_URL = '/categories_tree';

export const getCategoriesTree = async () => {
  try {
    const httpClient = await getHttpClient();

    return await httpClient.get<GetCategoriesTreeReponse>(API_URL);
  } catch (error) {
    return Promise.reject(error);
  }
};
