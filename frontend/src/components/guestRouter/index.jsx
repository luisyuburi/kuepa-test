import { Route, Redirect } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

function GuestRouter({ component, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          <Redirect
            to={{
              pathname: "/stream",
              state: { from: location },
            }}
          />
        ) : (
          component
        )
      }
    />
  );
}

export default GuestRouter;
