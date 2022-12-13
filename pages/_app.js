import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "../components/themes";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Component {...pageProps} />
    </ChakraProvider>
    
  );
}

export default MyApp;
