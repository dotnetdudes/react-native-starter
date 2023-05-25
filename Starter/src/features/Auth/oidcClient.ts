import { Config } from '@/config';

const oidcClient = {
  issuer: Config.REACT_APP_ISSUER!,
  clientId: Config.REACT_APP_CLIENTID!,
  scopes: ['openid', 'profile', 'email', 'offline_access', 'api1'],
  redirectUrl: Config.REACT_APP_REDIRECT,
  dangerouslyAllowInsecureHttpRequests: true,
};

export default oidcClient;
