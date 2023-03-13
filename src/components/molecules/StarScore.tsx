import { Flex } from "@chakra-ui/react";
import StarIcon from "../atoms/StarIcon";

interface StarScoreProps {
  score: number;
}

const StarScore = ({ score }: StarScoreProps) => {
  return (
    <Flex alignItems="center" gap="1.5">
      {Array(score)
        .fill(null)
        .map((_, i) => (
          <StarIcon width="3" height="3" key={i}></StarIcon>
        ))}
      {Array(5 - score)
        .fill(null)
        .map((_, i) => (
          <StarIcon width="3" height="3" fill="gray.400" key={i}></StarIcon>
        ))}
    </Flex>
  );
};

export default StarScore;
