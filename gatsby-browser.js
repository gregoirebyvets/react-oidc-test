import React from "react";
import { AuthProvider } from "react-oidc-context";
import "./src/styles/global.css";
const onSigninCallback = (_user) => {
  window.history.replaceState({}, document.title, window.location.pathname);
};
const oidcConfig = {
  authority: "https://auth.byvets.be/auth/realms/Dev",
  client_id: "dev-client",
  redirect_uri: "https://dev.byvets.be",
  onSigninCallback,
};

export const wrapRootElement = ({ element }) => {
  return <AuthProvider {...oidcConfig}>{element}</AuthProvider>;
};
