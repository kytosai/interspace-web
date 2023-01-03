import { APP_CONFIG } from '@/configs/app';

export const formatPageHeadTitle = (title: string) => {
  return `${title} | ${APP_CONFIG.BRAND_NAME}`;
};
