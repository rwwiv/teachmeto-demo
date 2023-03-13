import { AbsoluteCenter, Heading, Link } from "@chakra-ui/react";
import { type NextPage } from "next";
import NextLink from "next/link";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const allListings = api.listing.getAll.useQuery();
  const listing = allListings.data ? allListings.data[0] : undefined; // a missing listing is undefined behavior

  return (
    <>
      <AbsoluteCenter>
        {listing ? (
          <Link as={NextLink} href={`/listing/${listing.id}`}>
            <Heading>🚀 Go to listing</Heading>
          </Link>
        ) : (
          <Heading>⏳ Waiting for listing link...</Heading>
        )}
      </AbsoluteCenter>
    </>
  );
};

export default Home;
