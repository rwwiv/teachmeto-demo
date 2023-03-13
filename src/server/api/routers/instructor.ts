import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const instructorRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.instructor.findMany();
  }),
  // this is unused, but would be useful for url slugs where the listing id is part of the path
  getSingle: publicProcedure
    .input(z.object({ instructorId: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.instructor.findUnique({
        where: { id: input.instructorId },
        include: {
          user: true,
        },
      });
    }),
});
