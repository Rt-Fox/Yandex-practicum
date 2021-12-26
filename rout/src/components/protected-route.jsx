import { useAuth } from '../services/auth';
import { Redirect, Route } from 'react-router-dom';

export function ProtectedRoute({ children, ...rest }) {
  let auth = useAuth();
  return <Route {...rest}
                render={({ location })=>
      auth.user?
        children
      :
      <Redirect
        to={{
          pathname: '/login',
          state: { from: location }
        }}
      />
      } />;
}