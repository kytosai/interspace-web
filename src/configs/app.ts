import { ENV_TYPE } from '@/types/env';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? '';
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? '';
const APP_ENV = process.env.NEXT_PUBLIC_APP_ENV ?? ENV_TYPE.DEVELOPEMENT;
const BLUR_IMAGE_BASE64 =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN0qQcAAQ0AxblT1HMAAAAASUVORK5CYII=';

export const APP_CONFIG = {
  APP_ENV,
  BASE_URL,
  API_BASE_URL,
  BLUR_IMAGE_BASE64,
};
