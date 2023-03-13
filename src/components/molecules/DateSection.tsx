import { Box, Flex, Heading } from "@chakra-ui/react";

interface DateSectionProps {
  header: string | undefined;
  children: React.ReactNode;
}

const DateSection = ({ header, children }: DateSectionProps) => {
  return (
    <Box>
      <Heading fontSize="xl" py="1">
        {header}
      </Heading>
      <Flex flexDir="column" gap="2" pb="6">
        {children}
      </Flex>
    </Box>
  );
};

export default DateSection;
