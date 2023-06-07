import * as React from "react";
import useAuth from "../hooks/useAuth";
import Protected from "../components/Protected";
import Public from "../components/Public";

const IndexPage = () => {
  const [isLogin, token] = useAuth();
  return isLogin ? <Protected token={token} /> : <Public />;
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
