import "@/styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { mainnet, sepolia } from "@starknet-react/chains";
import { argent, braavos, publicProvider, StarknetConfig, useInjectedConnectors, voyager } from "@starknet-react/core";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

export const theme = extendTheme({
  components: {
    Tabs: {
      baseStyle: {
        tab: {
          _disabled: {
            background: '#676D9A1A',
            opacity: '100%',
            cursor: 'pointer',
          },
          '> *:first-of-type': {
            background: '#676D9A1A',
            opacity: '100%',
          },
        },
      },
    },
    Checkbox: {
      baseStyle: {
        icon: {
          bg: '#4D59E8',
          color: 'white',
          borderWidth: '0px',
          _disabled: {
            borderWidth: '0px',
            padding: '0px',
            color: '#4D59E8',
            bg: '#4D59E8',
            colorScheme: '#4D59E8',
          },
        },
        control: {
          borderRadius: 'base',
          _disabled: {
            borderWidth: '2px',
            borderColor: '#2B2F35',
            padding: '0px',
            color: 'black',
            bg: 'transparent',
          },
        },
      },
    },
  },

  colors: {
    customBlue: {
      500: '#0969DA',
    },
    customPurple: {
      500: '#4D59E8',
    },
  },
  fonts: {
    body: 'Inter, sans-serif',
  },
})

export default function App({ Component, pageProps }: AppProps) {
  const { connectors } = useInjectedConnectors({
    // Show these connectors if the user has no connector installed.
    recommended: [
      argent(),
      braavos(),
    ],
    // Hide recommended connectors if the user has any connector installed.
    includeRecommended: "onlyIfNoConnectors",
    // Randomize the order of the connectors.
    order: "random"
  });
  
  return(
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}>
      <SessionProvider>
        <ChakraProvider theme={theme}>
          <StarknetConfig
          chains={[mainnet, sepolia]}
          provider={publicProvider()}
          connectors={connectors}
          explorer={voyager}
        >
          <Component {...pageProps} />
        </StarknetConfig>
        </ChakraProvider>
      </SessionProvider>
    </GoogleOAuthProvider>
  )
}
