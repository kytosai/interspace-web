import { APP_CONFIG } from '@/configs';
import axios from 'axios';
import { HTTP_HEADER_KEY, HTTP_HEADER_VALUE } from '@/types/http';

const httpClient = axios.create({
  baseURL: APP_CONFIG.API_BASE_URL,
  timeout: 30000,
  headers: {
    [HTTP_HEADER_KEY.CONTENT_TYPE]: HTTP_HEADER_VALUE.APPLICATION_JSON,
  },
});

export async function getHttpClient() {
  return httpClient;
}
