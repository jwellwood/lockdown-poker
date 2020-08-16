import { useSelector, RootStateOrAny } from 'react-redux';

export const useAuth = () => {
  const { isEmpty, isLoaded, email } = useSelector(
    (state: RootStateOrAny) => state.firebase.auth
  );

  const isAuth = !isEmpty && isLoaded;

  return { isAuth, email };
};
