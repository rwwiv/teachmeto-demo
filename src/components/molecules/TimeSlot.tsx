import { Button, Flex, Text } from "@chakra-ui/react";

interface TimeSlotProps {
  clickHandler?: () => void;
  time: Date;
}

const TimeSlot = ({ time, clickHandler }: TimeSlotProps) => {
  const tOpt: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  let handleClick = clickHandler;

  if (!handleClick) {
    handleClick = () => alert(`${time.toLocaleString()} clicked`);
  }

  return (
    <Flex
      borderBottom="1px"
      borderColor="gray.200"
      justifyContent="space-between"
      alignItems="center"
      py="3"
    >
      <Text pt="1.5" fontSize="sm">
        {time.toLocaleTimeString("en-US", tOpt)}
      </Text>

      <Button
        bgColor="gray.700"
        _hover={{
          bgColor: "gray.900",
        }}
        _active={{
          bgColor: "black",
        }}
        size="md"
        textColor="white"
        fontSize="sm"
        onClick={handleClick}
      >
        Choose
      </Button>
    </Flex>
  );
};

export default TimeSlot;
