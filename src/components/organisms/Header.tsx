import { Avatar, Box, Flex, Heading, Link, Spacer } from "@chakra-ui/react";
import NextLink from "next/link";
import LogoIcon from "../atoms/LogoIcon";

const Header = () => {
  return (
    <Flex p="4" flexDir="row" boxShadow={["none", "lg"]}>
      <Box>
        <Link
          as={NextLink}
          href="/"
          _hover={{
            textColor: "teal.400",
            textDecoration: "none", // override underline on hover
          }}
        >
          <Flex flexDir="row" alignItems="center">
            <LogoIcon height="8" width="8" />
            <Heading size="md" ml="2">
              teachme.to
            </Heading>
          </Flex>
        </Link>
      </Box>
      <Spacer />
      {/* Avatar would be linked to current user in a real app */}
      <Avatar
        bg="gray.200"
        size="sm"
        cursor="pointer"
        _hover={{
          bg: "gray.300",
        }}
        _active={{
          bg: "gray.500",
        }}
        onClick={() => alert("Profile picture clicked")}
      />
    </Flex>
  );
};
export default Header;
