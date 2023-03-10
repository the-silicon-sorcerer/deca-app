import { prisma } from "../db";

const createInnerTRPCContext = () => {
  return {
    prisma,
  };
};

export const createTRPCContext = () => {
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
