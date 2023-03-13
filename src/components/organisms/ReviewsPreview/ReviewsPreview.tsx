import { Box, Flex, Skeleton, Text } from "@chakra-ui/react";
import { api } from "~/utils/api";
import ReviewCard from "../ReviewCard";
import styles from "./ReviewsPreview.module.css";

interface ReviewsPreviewProps {
  listingId: string | undefined;
}

const ReviewsPreview = ({ listingId }: ReviewsPreviewProps) => {
  const { data: reviews, isLoading } = api.review.getAllForListing.useQuery({
    listingId: listingId ? listingId : "",
  });
  return (
    <Skeleton isLoaded={!isLoading}>
      {reviews ? (
        <>
          <Flex
            className={styles.reviewCard}
            flexDir="row"
            overflow={["scroll", null]}
            pb="2"
          >
            <Box mr="1">
              <ReviewCard review={reviews[0]}></ReviewCard>
            </Box>
            <Box ml="1">
              <ReviewCard review={reviews[1]}></ReviewCard>
            </Box>
          </Flex>
          <Text
            as="span"
            pl="2"
            cursor="pointer"
            _hover={{
              color: "#009DA3",
            }}
            textDecoration="underline"
            onClick={() => alert("Clicked see all reviews")}
          >
            See all reviews
          </Text>
        </>
      ) : (
        <></>
      )}
    </Skeleton>
  );
};

export default ReviewsPreview;
