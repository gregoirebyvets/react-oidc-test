import React from "react";
import Keycloak from "keycloak-js";
let initOptions = {
  url: "http://auth.byvets.be/",
  realm: "Dev",
  clientId: "dev-client",
  onLoad: "login-required",
  KeycloakResponseType: "code",
};
export var keycloak = new Keycloak(initOptions);

keycloak
  .init({ onLoad: initOptions.onLoad, KeycloakResponseType: "code" })
  .then((auth) => {
    console.log("auth", auth);
    if (!auth) {
      window.location.reload();
    } else {
      console.info("Authenticated");
    }
    setTimeout(() => {
      keycloak
        .updateToken(70)
        .then((refreshed) => {
          if (refreshed) {
            console.debug("Token refreshed" + refreshed);
          } else {
            console.warn(
              "Token not refreshed, valid for " +
                Math.round(
                  keycloak.tokenParsed.exp +
                    keycloak.timeSkew -
                    new Date().getTime() / 1000
                ) +
                " seconds"
            );
          }
        })
        .catch(() => {
          console.error("Failed to refresh token");
        });
    }, 60000);
  })
  .catch(() => {
    console.error("Authenticated Failed");
  });
const Login = () => {
  return <></>;
};
export default Login;
