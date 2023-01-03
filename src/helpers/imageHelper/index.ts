import { APP_CONFIG } from '@/configs';

export function buildImageUrlFromApi(imageUrl: string) {
  return APP_CONFIG.API_BASE_URL + imageUrl;
}
