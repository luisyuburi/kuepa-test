import React from "react";

import useProvideAuth from "../hooks/useProvideAuth";

export const authContext = React.createContext();

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default ProvideAuth;
