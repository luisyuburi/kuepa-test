import React, { useContext } from "react";

import { authContext } from "../context/authContext";

function useAuth() {
  return useContext(authContext);
}

export default useAuth;
