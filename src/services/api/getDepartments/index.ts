import { getHttpClient } from '@/helpers/httpClientHelper';
import { GetDepartmentsReponse, GetDepartmentsRequest } from './types';

const API_URL = '/departments';

export const getDepartments = async (request?: GetDepartmentsRequest) => {
  try {
    const httpClient = await getHttpClient();

    return await httpClient.get<GetDepartmentsReponse>(API_URL, {
      params: request,
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
