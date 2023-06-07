import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const RootElement = ({ children }) => {
  return <AuthProvider {...oidcConfig}>{children} </AuthProvider>;
};

export default RootElement;
