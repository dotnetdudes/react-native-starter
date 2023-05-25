import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.auth || initialState;

export const selectAuth = createSelector([selectSlice], state => state);

export const selectIsAuthenticated = createSelector(
  [selectSlice],
  state => state.isAuthenticated,
);

export const selectUser = createSelector([selectSlice], state => state.user);
