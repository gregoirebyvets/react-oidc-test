import React, { useState, useEffect, useRef } from "react";

const useAuth = () => {
  const isRun = useRef(false);
  const [token, setToken] = useState(null);
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    if (typeof document === "undefined" || isRun.current) return;

    isRun.current = true;

    import("keycloak-js").then((Keycloak) => {
      const client = new Keycloak({
        url: "https://auth.byvets.be/auth/",
        realm: "Dev",
        clientId: "dev-client",
      });

      client
        .init({
          onLoad: "login-required",
        })
        .then((res) => {
          setLogin(res);
          setToken(client.token);
        });
    });
  }, []);

  return [isLogin, token];
};

export default useAuth;
