import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { selectIsAuthenticated } from '../slice/selectors';

function useRequireAuth(redirectUrl = '/') {
  const auth = useSelector(selectIsAuthenticated);
  // const history = useHistory();
  // If auth is false that means we're not
  // logged in and should redirect.
  useEffect(() => {
    if (auth) {
      console.log(redirectUrl);
      // history.push(redirectUrl); - navigation.navigate('AuthRequired')
    }
  });

  return auth;
}

export default useRequireAuth;
