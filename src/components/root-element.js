import React from "react";
// import { AuthProvider } from "react-oidc-context";
// import { AuthProvider } from "oidc-react";

import { OidcProvider } from "@axa-fr/react-oidc";

const onSigninCallback = (_user) => {
  window.history.replaceState({}, document.title, window.location.pathname);
};
// const oidcConfig = {
//   authority: "https://auth.byvets.be/auth/realms/Dev",
//   client_id: "dev-client",
//   redirect_uri: "https://dev.byvets.be",
//   onSigninCallback,
// };

const oidcConfig = {
  onSignIn: async (user) => {
    alert("You just signed in, congratz! Check out the console!");
    console.log(user);
    window.location.hash = "";
  },
  authority: "https://auth.byvets.be/auth/realms/Dev",
  clientId: "dev-client",
  redirectUri: "http://localhost:8003/",
  onSigninCallback,
};

const configuration = {
  client_id: "dev-client",
  redirect_uri: window.location.origin + "/authentication/callback",
  silent_redirect_uri:
    window.location.origin + "/authentication/silent-callback", // Optional activate silent-signin that use cookies between OIDC server and client javascript to restore the session
  scope: "openid profile email api offline_access",
  authority: "https://auth.byvets.be/auth/realms/Dev",
  service_worker_relative_url: "/OidcServiceWorker.js",
  service_worker_only: true,
};

const RootElement = ({ children }) => {
  return <OidcProvider configuration={configuration}>{children}</OidcProvider>;
};

export default RootElement;
