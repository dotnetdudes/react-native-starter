/**
 *
 * LoginButton
 *
 */
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button } from 'react-native-paper';
import { useAuthSlice } from '../../slice';

export function LoginButton() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { actions } = useAuthSlice();

  const login = () => {
    try {
      dispatch(actions.loginInit());
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <Button mode="outlined" onPress={login}>
      {t('auth.signIn')}
    </Button>
  );
}
