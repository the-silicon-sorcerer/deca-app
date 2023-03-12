import { TRPCError } from "@trpc/server";
import { createTRPCRouter, publicProcedure } from "../trpc";
import z from "zod";

const indicatorSchema = z.object({
  indicator: z.string(),
  text: z.string(),
  category: z
    .enum(["MANAGMENT", "MARKETING", "FINANCE", "HOSPITIALITY", "ENTREPRENEUR"])
    .array(),
  area: z.string(),
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
          areaId: input.area,
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
  seedAreas: publicProcedure
    .input(
      z.enum([
        "Instructional Area: Business Law ",
        "Instructional Area: Communication Skills ",
        "Instructional Area: Customer Relations ",
        "Instructional Area: Economics ",
        "Instructional Area: Emotional Intelligence ",
        "Instructional Area: Entrepreneurship ",
        "Instructional Area: Financial Analysis ",
        "Instructional Area: Human Resources Management ",
        "Instructional Area: Marketing ",
        "Instructional Area: Information Management ",
        "Instructional Area: Operations ",
        "Instructional Area: Professional Development ",
        "Instructional Area: Strategic Management ",
        "Instructional Area: Knowledge Management ",
        "Instructional Area: Project Management ",
        "Instructional Area: Quality Management ",
        "Instructional Area: Risk Management ",
        "Instructional Area: Innovation Management ",
        "Instructional Area: Product/Service Management ",
        "Instructional Area: Channel Management ",
        "Instructional Area: Marketing-Information Management ",
        "Instructional Area: Market Planning ",
        "Instructional Area: Pricing ",
        "Instructional Area: Promotion ",
        "Instructional Area: Selling ",
        "Instructional Area: Financial-Information Management ",
        "Instructional Area: Risk Analysis ",
      ])
    )
    .mutation(async ({ ctx, input }) => {
      const mutation = await ctx.prisma.area.create({
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
        area: true,
      },
    });
    if (!query) throw new TRPCError({ code: "BAD_REQUEST" });
    return query;
  }),
});
