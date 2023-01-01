import { GetDepartmentsRequest, GetDepartmentsReponse } from './types';
import { getHttpClient } from '@/helpers/httpClientHelper';

const API_URL = '/departments';

export const getDepartments = async (request?: GetDepartmentsReponse) => {
  try {
    const httpClient = await getHttpClient();

    return await httpClient.get<GetDepartmentsRequest>(API_URL, {
      params: request,
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
