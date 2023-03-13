import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const listingRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.listing.findMany();
  }),
  getSingle: publicProcedure
    .input(z.object({ listingId: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.listing.findUnique({
        where: { id: input.listingId },
      });
    }),
  getSingleDeep: publicProcedure
    .input(z.object({ listingId: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.listing.findUnique({
        where: { id: input.listingId },
        include: {
          reviews: {
            include: {
              customer: {
                include: {
                  user: true,
                },
              },
            },
          },
          instructor: {
            include: {
              user: true,
            },
          },
        },
      });
    }),
});
