import { GetKeywordsReponse, GetKeywordsRequest } from './types';
import { getHttpClient } from '@/helpers/httpClientHelper';

const API_URL = '/keywords';

export const getKeywords = async (request?: GetKeywordsRequest) => {
  try {
    const httpClient = await getHttpClient();

    return await httpClient.get<GetKeywordsReponse>(API_URL, {
      params: request,
    });
  } catch (error) {
    return Promise.reject(error);
  }
};

export * from './types';
