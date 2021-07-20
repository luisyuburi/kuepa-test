import React, { useState, useEffect } from "react";

import { Login as loginService } from "../services/auth";

function useProvideAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!user) {
      const loggedUser = localStorage.getItem("user");
      if (loggedUser) {
        setUser(JSON.parse(loggedUser));
      }
    }
  }, [user]);

  const signin = async (userData, cb) => {
    const response = await loginService(userData);
    if (response.status === 200) {
      const userResponse = await response.json();
      const userObject = {
        token: userResponse.token,
        data: userResponse.user,
      };
      localStorage.setItem("user", JSON.stringify(userObject));
      setUser(userObject);
    }
    cb(response);
  };

  const signout = (cb) => {
    localStorage.removeItem("user");
    setUser(null);
    cb();
  };

  return {
    user,
    signin,
    signout,
  };
}

export default useProvideAuth;
