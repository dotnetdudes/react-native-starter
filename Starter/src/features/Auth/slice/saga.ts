import { call, put, takeLatest } from 'redux-saga/effects';
import { authorize, logout, refresh } from 'react-native-app-auth';
import * as Keychain from 'react-native-keychain';
import jwt_decode from 'jwt-decode';
import AuthManager from '@/features/Auth/AuthManager';
import { authConfig } from '../objects/authConfig';
import oidcClient from '@/features/Auth/oidcClient';
import type { AuthorizeResult, RefreshResult } from 'react-native-app-auth';
import { mapRefreshToAuth } from '../utils';
import { UserType } from './types';
import { authActions as actions } from '.';
import type { EndSessionResult } from 'react-native-app-auth';

// get from storage at startup
export function* getInitialAuthState() {
  try {
    const credentials: Keychain.UserCredentials = yield call(
      Keychain.getGenericPassword,
    );
    if (credentials) {
      // use refresh token to get new auth state
      const refreshConfig = { refreshToken: credentials.password };
      const auth: AuthManager = AuthManager.getInstance();
      const refreshState: RefreshResult = yield call(
        refresh,
        authConfig,
        refreshConfig,
      );
      auth.authState = mapRefreshToAuth(refreshState, auth.authState!);
      const decoded: UserType = jwt_decode(auth.authState?.idToken!);
      // save refresh token to secure storage
      yield Keychain.setGenericPassword(
        decoded.email,
        auth.authState.refreshToken,
      );
      // save user to redux store
      yield put(actions.loginSuccess(decoded));
    }
  } catch (error) {
    // dont really care about recording this one
    // yield put(actions.refreshFailure(JSON.stringify(error)));
  }
}

export function* refreshUser() {
  try {
    const auth: AuthManager = AuthManager.getInstance();
    const refreshConfig = { refreshToken: auth.authState?.refreshToken! };
    const refreshState: RefreshResult = yield call(
      refresh,
      authConfig,
      refreshConfig,
    );
    auth.authState = mapRefreshToAuth(refreshState, auth.authState!);
    const decoded: UserType = jwt_decode(auth.authState.idToken);
    // save authstate to secure storage
    yield call(
      Keychain.setGenericPassword,
      decoded.email,
      auth.authState.refreshToken,
    );
    yield put(actions.loginSuccess(decoded));
  } catch (error) {
    yield put(actions.refreshFailure(JSON.stringify(error)));
  }
}

export function* loginUser() {
  try {
    const auth: AuthManager = AuthManager.getInstance();
    // login
    const newAuthState: AuthorizeResult = yield call(authorize, authConfig);
    auth.authState = newAuthState;
    const decoded: UserType = jwt_decode(auth.authState.idToken);
    // save authstate to secure storage
    yield call(
      Keychain.setGenericPassword,
      decoded.email,
      newAuthState.refreshToken,
    );
    // save user to redux store
    yield put(actions.loginSuccess(decoded));
  } catch (error) {
    yield put(actions.loginFailure(JSON.stringify(error)));
  }
}

export function* logoutUser() {
  try {
    const auth: AuthManager = AuthManager.getInstance();
    const logoutConfig = {
      idToken: auth.authState?.idToken!,
      postLogoutRedirectUrl: oidcClient.redirectUrl,
    };
    // logout
    const sessionEnd: EndSessionResult = yield call(
      logout,
      oidcClient,
      logoutConfig,
    );
    console.log(sessionEnd);
    auth.authState = null;
    // remove authState from secure storage
    const result: boolean = yield call(Keychain.resetGenericPassword);
    console.log(result);
    yield put(actions.logoutSuccess());
  } catch (error) {
    console.log(error);
    yield put(actions.logoutFailure(JSON.stringify(error)));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* authSaga() {
  yield takeLatest(actions.loginInit.type, loginUser);
  yield takeLatest(actions.logoutInit.type, logoutUser);
  yield takeLatest(actions.refreshInit.type, refreshUser);
  yield takeLatest(actions.startApp.type, getInitialAuthState);
}
