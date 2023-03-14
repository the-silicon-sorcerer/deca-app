import { createTRPCRouter } from "./trpc";
import { seedRouter } from "./routers/seed";
import { categoryRouter } from "./routers/categoryRouter";

export const appRouter = createTRPCRouter({
  seed: seedRouter,
  category: categoryRouter,
});

export type AppRouter = typeof appRouter;
