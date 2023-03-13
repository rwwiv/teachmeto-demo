import { createTRPCRouter } from "~/server/api/trpc";
import { instructorRouter } from "./routers/instructor";
import { listingRouter } from "./routers/listing";
import { reviewRouter } from "./routers/review";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  listing: listingRouter,
  instructor: instructorRouter,
  review: reviewRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
