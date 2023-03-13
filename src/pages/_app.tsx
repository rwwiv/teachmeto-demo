import { type AppType } from "next/app";
// TODO: Change this to ChakraBaseProvider and define only components used with `extendBaseTheme`
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Nunito } from "next/font/google";

import Layout from "~/components/layout";
import "~/styles/globals.css";
import { api } from "~/utils/api";

const nunito = Nunito({ subsets: ["latin"] });

const fonts = {
  heading: nunito.style.fontFamily,
  body: nunito.style.fontFamily,
};

const theme = extendTheme({
  fonts,
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default api.withTRPC(MyApp);
