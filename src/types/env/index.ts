export const ENV_TYPE = {
  PRODUCTION: 'production',
  DEVELOPEMENT: 'development',
} as const;

export type EnvType = typeof ENV_TYPE.DEVELOPEMENT | typeof ENV_TYPE.PRODUCTION;
