import type { AuthorizeResult, RefreshResult } from 'react-native-app-auth';

export function mapRefreshToAuth(
  refreshState: RefreshResult,
  authState: AuthorizeResult,
): AuthorizeResult {
  const newAuthState: AuthorizeResult = {
    ...authState,
    ...refreshState,
    refreshToken: refreshState.refreshToken!,
    scopes: authState?.scopes!,
    authorizationCode: authState?.authorizationCode!,
  };
  return newAuthState;
}
