import { createTRPCRouter } from "./trpc";
import { seedRouter } from "./routers/seed";

export const appRouter = createTRPCRouter({
  seed: seedRouter,
});

export type AppRouter = typeof appRouter;
