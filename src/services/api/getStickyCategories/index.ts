import { GetStickyCategoriesRequest, GetStickyCategoriesReponse } from './types';
import { getHttpClient } from '@/helpers/httpClientHelper';

const API_URL = '/sticky_categories';

export const getStickyCategories = async (request?: GetStickyCategoriesReponse) => {
  try {
    const httpClient = await getHttpClient();

    return await httpClient.get<GetStickyCategoriesReponse>(API_URL, {
      params: request,
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
