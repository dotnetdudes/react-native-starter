import type { AuthorizeResult } from 'react-native-app-auth';

class AuthManager {
  private static instance: AuthManager;
  public authState: AuthorizeResult | null;

  private constructor() {
    this.authState = null;
  }

  public static getInstance(): AuthManager {
    if (!AuthManager.instance) {
      AuthManager.instance = new AuthManager();
    }
    return AuthManager.instance;
  }
}

export default AuthManager;
