/**
 *
 * LogoutButton
 *
 */
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button } from 'react-native-paper';
import { useAuthSlice } from '../../slice';

export function LogoutButton() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { actions } = useAuthSlice();

  const logoutUser = () => {
    try {
      dispatch(actions.logoutInit());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button mode="outlined" onPress={logoutUser}>
      {t('auth.signOut')}
    </Button>
  );
}
