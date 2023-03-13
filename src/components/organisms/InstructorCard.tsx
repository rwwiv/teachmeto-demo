import {
  Avatar,
  Box,
  Button,
  Flex,
  Grid,
  Skeleton,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { api } from "~/utils/api";
import VerifiedIcon from "../atoms/VerifiedIcon";
import InstructorScore from "../molecules/InstructorScore";

interface InstructorCardProps {
  title: string | undefined;
  listingId: string | undefined;
  instructorId: string | undefined;
}

const InstructorCard = ({
  listingId,
  instructorId,
  title,
}: InstructorCardProps) => {
  const { data: instructor, isLoading: instructorLoading } =
    api.instructor.getSingle.useQuery({
      instructorId: instructorId ? instructorId : "",
    });

  return (
    <Box bg="#EDF2F7" rounded="lg" p="6">
      <Grid gap="4">
        <Flex alignItems="center">
          <Avatar
            size="md"
            mr="3"
            src={instructor?.user.profileImg ? instructor.user.profileImg : ""}
          />
          <Skeleton isLoaded={!instructorLoading}>
            <Text fontWeight="800" fontSize="xl">
              {instructor?.user.firstName}
            </Text>
          </Skeleton>
        </Flex>
        <Skeleton isLoaded={!instructorLoading}>
          <Box fontSize="2xl" fontWeight="800">
            {title}
          </Box>
        </Skeleton>
        <Flex
          flexDirection={["column", "row"]}
          alignItems={["initial", "center"]}
          mt={[0, 6]}
        >
          <Flex flexDir={["column", "row"]}>
            <InstructorScore listingId={listingId} />
            <Spacer my={[2, 0]} ml={[0, 4]} />
            {instructor?.verified ? (
              <Skeleton isLoaded={!instructorLoading}>
                <Flex alignItems="center">
                  <VerifiedIcon height="4" width="4" textColor="#009DA3" />
                  <Text ml="1">Identity Verified</Text>
                </Flex>
              </Skeleton>
            ) : (
              <></>
            )}
          </Flex>
          <Spacer my={[2, 0]} />
          <Button
            bg="white"
            fontSize={["md", "xs"]}
            fontWeight="600"
            onClick={() => alert("Clicked ask a question")}
          >
            Ask a question
          </Button>
        </Flex>
      </Grid>
    </Box>
  );
};

export default InstructorCard;
