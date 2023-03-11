import { TRPCError } from "@trpc/server";
import { createTRPCRouter, publicProcedure } from "../trpc";
import z from "zod";

const indicatorSchema = z.object({
  area: z.string(),
  indicator: z.string(),
  text: z.string(),
  category: z
    .enum(["MANAGMENT", "MARKETING", "FINANCE", "HOSPITIALITY", "ENTREPRENEUR"])
    .array(),
});

type Category =
  | "MANAGMENT"
  | "MARKETING"
  | "FINANCE"
  | "HOSPITIALITY"
  | "ENTREPRENEUR";

export const seedRouter = createTRPCRouter({
  seedIndicators: publicProcedure
    .input(indicatorSchema)
    .mutation(async ({ ctx, input }) => {
      const generateCategories = (arr: Category[]) => {
        const gen = [];
        for (let cat of arr) {
          gen.push({ id: cat });
        }
        return gen;
      };

      const mutation = await ctx.prisma.indicatorData.create({
        data: {
          indicator: input.indicator,
          text: input.text,
          area: input.area,
          Categories: {
            connect: generateCategories(input.category),
          },
        },
      });
      if (!mutation) throw new TRPCError({ code: "BAD_REQUEST" });
      console.log(mutation);
      return mutation;
    }),
  seedCategories: publicProcedure
    .input(
      z.enum([
        "MANAGMENT",
        "MARKETING",
        "FINANCE",
        "HOSPITIALITY",
        "ENTREPRENEUR",
      ])
    )
    .mutation(async ({ ctx, input }) => {
      const mutation = ctx.prisma.category.create({
        data: {
          id: input,
          name: input,
        },
      });
      if (!mutation) throw new TRPCError({ code: "BAD_REQUEST" });
      return mutation;
    }),
  pullData: publicProcedure.query(async ({ ctx }) => {
    const query = await ctx.prisma.indicatorData.findMany({
      include: {
        Categories: true,
      },
    });
    if (!query) throw new TRPCError({ code: "BAD_REQUEST" });
    return query;
  }),
});
