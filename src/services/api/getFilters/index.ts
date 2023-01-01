import { GetFiltersRequest, GetFiltersReponse } from './types';
import { getHttpClient } from '@/helpers/httpClientHelper';

const API_URL = '/filters';

export const getFilters = async (request?: GetFiltersReponse) => {
  try {
    const httpClient = await getHttpClient();

    return await httpClient.get<GetFiltersRequest>(API_URL, {
      params: request,
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
