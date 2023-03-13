import { Box, Flex } from "@chakra-ui/react";
import Head from "next/head";
import Header from "./organisms/Header";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Teachme.to Listing Demo</title>
        <meta name="description" content="Coding showcase for teachme.to" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Flex flexDirection="column" minH="100vh">
          <Header />
          <Box flexGrow="1" pb="10">
            {children}
          </Box>
          {/* <Footer /> */}
        </Flex>
      </main>
    </>
  );
};

export default Layout;
