import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@/utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from '@/utils/redux-injectors';
import { authSaga } from './saga';
import type { AuthState, UserType } from './types';

export const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    startApp(state) {
      state.loading = true;
      state.error = null;
    },
    loginInit(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action: PayloadAction<UserType>) {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    loginFailure(state, action: PayloadAction<any>) {
      state.isAuthenticated = false;
      state.user = null;
      state.loading = false;
      state.error = action.payload;
    },
    logoutSuccess(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.loading = false;
      state.error = null;
    },
    logoutInit(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.loading = true;
      state.error = null;
    },
    logoutFailure(state, action: PayloadAction<any>) {
      state.isAuthenticated = false;
      state.user = null;
      state.loading = false;
      state.error = action.payload;
    },
    refreshInit(state) {
      state.loading = true;
      state.error = null;
    },
    refreshSuccess(state, action: PayloadAction<UserType>) {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    refreshFailure(state, action: PayloadAction<any>) {
      state.isAuthenticated = false;
      state.user = null;
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { actions: authActions } = slice;

export const useAuthSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: authSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useAuthSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
