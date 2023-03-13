import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { type Customer, type Review, type User } from "@prisma/client";
import StarScore from "../molecules/StarScore";

interface ReviewCardProps {
  review: (Review & { customer: Customer & { user: User } }) | undefined;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  const user = review?.customer.user;

  return (
    <Box
      width={["300px", "auto"]}
      border="1px"
      borderColor="gray.300"
      rounded="lg"
      padding="5"
    >
      <Box mb="4">
        {review ? (
          <>
            <Text fontWeight="bold" mb="2">
              {review.title}
            </Text>
            <Text fontSize="sm">{review.content}</Text>
          </>
        ) : (
          <></>
        )}
      </Box>
      <Flex justifyContent="space-between" alignItems="center">
        <Flex alignItems="center">
          {user ? (
            <Avatar
              size="sm"
              src={user.profileImg ? user.profileImg : ""}
              name={`${user.firstName} ${user.lastName.charAt(0)}`}
            ></Avatar>
          ) : (
            <></>
          )}
          {review ? (
            <Box
              ml="2"
              textTransform="uppercase"
              fontSize="xs"
              textColor="gray.600"
            >
              {`${
                review.customer.user.firstName
              } ${review.customer.user.lastName.charAt(0)}.`}
            </Box>
          ) : (
            <></>
          )}
        </Flex>
        {review ? <StarScore score={review.score} /> : <></>}
      </Flex>
    </Box>
  );
};
export default ReviewCard;
