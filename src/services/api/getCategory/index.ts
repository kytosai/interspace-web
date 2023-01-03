import { GetCategoryRequest, GetCategoryReponse } from './types';
import { getHttpClient } from '@/helpers/httpClientHelper';

const API_URL = '/categories';

export const getCategory = async (request: GetCategoryRequest) => {
  try {
    const httpClient = await getHttpClient();

    return await httpClient.get<GetCategoryReponse>(API_URL + `/${request.id}`);
  } catch (error) {
    return Promise.reject(error);
  }
};
