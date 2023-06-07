import React, { useEffect, useState } from "react";
import Keycloak from "keycloak-js";

const Auth = ({ children }) => {
  const [keycloak, setKeycloak] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const keycloak = new Keycloak("/keycloak.json");
    keycloak.init({ onLoad: "login-required" }).then((authenticated) => {
      setKeycloak(keycloak);
      setAuthenticated(authenticated);
    });
  }, []);

  if (keycloak) {
    if (authenticated) {
      return (
        <div className="my-12 grid place-items-center">
          <p> You are logged in.</p>
          <div>
            <img src="https://random.imagecdn.app/500/250" />
          </div>
        </div>
      );
    } else {
      return <div className="my-12">Unable to initiate auth!</div>;
    }
  }

  return (
    <>
      <div className="my-12">Keycloak initializing in a moment...</div>
    </>
  );
};

export default Auth;
