import {
  Box,
  Button,
  Flex,
  Heading,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { api } from "~/utils/api";
import DateSection from "../molecules/DateSection";
import TimeSlot from "../molecules/TimeSlot";

type TimeSelectProps = {
  instructorId: string | undefined;
  sessionLength: number | undefined;
} & Record<string, unknown>;

const TimeSelect = (props: TimeSelectProps) => {
  const { data: instructor, isLoading } = api.instructor.getSingle.useQuery({
    instructorId: props.instructorId ? props.instructorId : "",
  });

  const sections = [];
  if (instructor) {
    // stand in for actual data fetch
    const openingMap = instructor.openings.reduce(
      (entryMap: Map<string, Date[]>, e) =>
        entryMap.set(`${e.getFullYear()}-${e.getMonth()}-${e.getDate()}`, [
          ...(entryMap.get(
            `${e.getFullYear()}-${e.getMonth()}-${e.getDate()}`
          ) ?? []),
          e,
        ]),
      new Map()
    );
    for (const [k, v] of openingMap) {
      const times = [];
      for (const d of v) {
        times.push(<TimeSlot key={d.toLocaleString()} time={d} />);
      }
      const fOpt: Intl.DateTimeFormatOptions = {
        weekday: "short",
        month: "short",
        day: "numeric",
      };
      sections.push(
        <DateSection key={k} header={v[0]?.toLocaleDateString("en-US", fOpt)}>
          {times}
        </DateSection>
      );
    }
  }
  return (
    <Box w="full" flexGrow="1">
      <Flex
        flexDir="column"
        gap="8"
        border="1px"
        rounded="lg"
        borderColor="gray.300"
        shadow="xl"
      >
        <Flex flexDir="column" alignItems="center" gap="1" pt="6">
          <Heading fontSize="2xl">Pick a Time</Heading>
          <Text fontSize="xs" textColor="gray.500">
            {props.sessionLength} minute sessions
          </Text>
        </Flex>
        {isLoading ? (
          <Stack p="6" gap="3">
            <Skeleton height="80px" />
            <Skeleton height="80px" />
            <Skeleton height="80px" />
          </Stack>
        ) : (
          <Flex flexDir="column" gap="4" px="6" pb="8">
            {sections}
          </Flex>
        )}
        <Flex
          justifyContent="center"
          borderTop="1px"
          borderColor="gray.100"
          w="full"
          px="6"
          py="4"
          style={{ boxShadow: "0px -5px 15px -3px rgba(0,0,0,0.1)" }}
        >
          <Button
            w="full"
            variant="outline"
            onClick={() => alert("View more dates clicked")}
          >
            View more dates
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default TimeSelect;
