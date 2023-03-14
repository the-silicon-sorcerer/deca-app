import { createTRPCRouter, publicProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import z from "zod";

const querySchema = z.object({
  category: z.enum([
    "MARKETING",
    "ENTREPRENEUR",
    "FINANCE",
    "HOSPITIALITY",
    "MANAGMENT",
  ]),
});

export const categoryRouter = createTRPCRouter({
  getCategory: publicProcedure
    .input(querySchema)
    .query(async ({ ctx, input }) => {
      const query = await ctx.prisma.indicatorData.findMany({
        where: {
          Categories: { some: { name: input.category } },
        },
        include: {
          area: {
            include: {
              IndicatorData: true,
            },
          },
        },
      });
      if (!query) throw new TRPCError({ code: "BAD_REQUEST" });
      return query;
    }),
});
