import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { makeServer } from "services/mirage";
import { QueryClient, QueryClientProvider } from "react-query";
import { theme } from "../styles/theme";
import SidebarDrawerProvider from "contexts/SidebarDrawerContext";

// ambiente development é setado pelo next automaticamente
if (process.env.NODE_ENV === "development") {
  makeServer();
}

// client react-query - QueryClientProvider
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
