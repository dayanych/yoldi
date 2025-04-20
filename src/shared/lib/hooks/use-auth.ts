import { useContext } from "react";

import { AuthContext } from "@/app";
import { api } from "@/shared/api";

export const useAuth = () => {
  const authContext = useContext(AuthContext);

  const setAuth = (value: string) => {
    localStorage.setItem('value', value);

    api.interceptors.request.use((config) => {
      config.headers['X-API-KEY'] = value;
      return config;
    });

    authContext?.setAuth(value);
  }

  return {
    auth: authContext?.auth,
    setAuth,
  };
};
