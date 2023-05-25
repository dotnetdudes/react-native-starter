import oidcClient from '@/features/Auth/oidcClient';

export const authConfig = {
  ...oidcClient,
  connectionTimeoutSeconds: 5,
};
