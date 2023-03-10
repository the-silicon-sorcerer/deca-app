import { type CreateNextContextOptions } from "@trpc/server/adapters/next";

import { prisma } from "../db";

const createInnerTRPCContext = () => {
  return {
    prisma,
  };
};

export const createTRPCContext = async (opts: CreateNextContextOptions) => {
  return createInnerTRPCContext();
};

import { initTRPC } from "@trpc/server";
import superjson from "superjson";

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape;
  },
});

export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;
