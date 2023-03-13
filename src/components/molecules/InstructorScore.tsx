import { StarIcon } from "@chakra-ui/icons";
import { Button, Flex, Skeleton, Stack, Text } from "@chakra-ui/react";
import { api } from "~/utils/api";
interface InstructorScoreProps {
  listingId: string | undefined;
}

const InstructorScore = ({ listingId }: InstructorScoreProps) => {
  const { data: reviews, isLoading } = api.review.getAllForListing.useQuery({
    listingId: listingId ? listingId : "",
  });

  const reviewCount = reviews ? reviews.length : 0;

  let score = "";

  if (reviews && reviewCount > 0) {
    score = (
      reviews.flatMap(({ score }) => score).reduce((a, b) => a + b) /
      reviews.length
    ).toFixed(1);
  }

  return (
    <Skeleton isLoaded={!isLoading}>
      <Flex flexFlow="row wrap" alignItems="center" mx="0" ml="0.5">
        <Stack flexDir="row" alignItems="center" mt="-0.5">
          <StarIcon color="teal.500" width="3" height="3" fontSize="md" />
        </Stack>
        <Flex fontSize="16px" fontWeight="400">
          <Text ml="1" textColor="black">
            {score}
          </Text>
          <Button
            padding="0"
            variant="link"
            alignItems="center"
            onClick={() => alert("Review score clicked")}
          >
            <Text ml={[0, 1]} textColor="gray.500">
              ({reviewCount}
              <Text as="span" display={["none", "inline"]}>
                {" "}
                Reviews
              </Text>
              )
            </Text>
          </Button>
        </Flex>
      </Flex>
    </Skeleton>
  );
};

export default InstructorScore;
