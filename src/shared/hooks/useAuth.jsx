import { useSelector } from 'react-redux';

export const useAuth = () => {
  const { isEmpty, isLoaded, email } = useSelector(
    (state) => state.firebase.auth
  );

  const isAuth = !isEmpty && isLoaded;

  return { isAuth, email };
};
