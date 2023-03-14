/* eslint-disable @next/next/no-img-element */
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { withRouter, type NextRouter } from "next/router";
import { useState } from "react";
import GridIcon from "~/components/atoms/GridIcon";
import ListingVideo from "~/components/molecules/ListingVideo";
import InstructorCard from "~/components/organisms/InstructorCard";
import ReviewsPreview from "~/components/organisms/ReviewsPreview/ReviewsPreview";
import TimeSelect from "~/components/organisms/TimeSelect";
import { api } from "~/utils/api";

interface WithRouterProps {
  router: NextRouter;
}

type ListingPageProps = WithRouterProps;

const ListingPage = ({ router }: ListingPageProps) => {
  const { id } = router.query;
  const { data: listing, isLoading } = api.listing.getSingle.useQuery({
    listingId: id ? (id as string) : "",
  });

  const descCutoffInit = 240;

  const [descCutoff, setDescCutoff] = useState(descCutoffInit);

  return (
    <Flex
      flexDirection={["column", null, null, "row"]}
      gap="6"
      pt={["2", "16"]}
      px="4"
      justifyContent={["start", "center"]}
      alignItems={[null, "center", null, "start"]}
    >
      <Flex
        flexDirection={"column"}
        gap="3"
        maxW={["full", "85%", "65%", "615px"]}
      >
        <Flex gap="3" justifyContent="center">
          {/* Stand in for video */}
          <ListingVideo thumbSrc="/vid-thumb.png" videoSrc="/surf-123523.mp4" />
          <Box flexDir="column" display={["none", "flex"]} gap="3" width="1/2">
            <Image
              rounded="lg"
              objectFit="cover"
              w="325px"
              h="200px"
              alt="surfer"
              src="https://images.unsplash.com/photo-1551524358-f34c0214781d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
            />
            <Box pos="relative" width="1/2" textAlign="center" h="200px">
              <Image
                rounded="lg"
                objectFit="cover"
                w="325px"
                h="full"
                alt="surfer"
                src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
              />
              <Box pos="absolute" bottom="3" right="3">
                <Button onClick={() => alert("View all clicked")}>
                  <Flex gap="3" alignItems="center">
                    <GridIcon />
                    <Text textTransform="uppercase" fontSize="sm" pt="0.5">
                      View all
                    </Text>
                  </Flex>
                </Button>
              </Box>
            </Box>
          </Box>
        </Flex>
        <Box>
          <InstructorCard
            title={listing?.title}
            listingId={listing?.id}
            instructorId={listing?.instructorId}
          />
        </Box>
        <Box pb="8" pt="4" borderBottom="1px" borderColor="gray.200">
          <ReviewsPreview listingId={listing?.id} />
        </Box>
        <Box py="4">
          <Heading pb="4">What You&apos;ll Learn</Heading>
          {listing ? (
            <Box>
              {listing.description.substring(0, descCutoff)}
              {listing.description.length > descCutoff ? (
                <Text as="span">
                  {"... "}
                  <Text
                    as="span"
                    textDecoration="underline"
                    _hover={{
                      color: "#009DA3",
                    }}
                    cursor="pointer"
                    onClick={() => setDescCutoff(100000)}
                  >
                    Read more
                  </Text>
                </Text>
              ) : (
                <Text
                  textDecoration="underline"
                  _hover={{
                    color: "#009DA3",
                  }}
                  cursor="pointer"
                  onClick={() => setDescCutoff(descCutoffInit)}
                >
                  Read less
                </Text>
              )}
            </Box>
          ) : (
            <></>
          )}
        </Box>
      </Flex>
      <Flex w={["full", "85%", "65%", "sm"]}>
        <TimeSelect
          instructorId={listing?.instructorId}
          sessionLength={listing?.sessionLengthMin}
        />
      </Flex>
    </Flex>
  );
};

export default withRouter(ListingPage);
