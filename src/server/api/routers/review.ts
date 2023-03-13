import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const reviewRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.review.findMany();
  }),
  getAllForListing: publicProcedure
    .input(z.object({ listingId: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.review.findMany({
        where: {
          listingId: input.listingId,
        },
        include: {
          customer: {
            include: {
              user: true,
            },
          },
        },
      });
    }),
  getSingleDeep: publicProcedure
    .input(z.object({ reviewId: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.review.findUnique({
        where: { id: input.reviewId },
        include: {
          customer: {
            include: {
              user: true,
            },
          },
        },
      });
    }),
});
