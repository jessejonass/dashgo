import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ChakraProvider } from "@chakra-ui/react";
import SidebarDrawerProvider from "contexts/SidebarDrawerContext";
import { makeServer } from "services/mirage";
import { theme } from "../styles/theme";

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

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
