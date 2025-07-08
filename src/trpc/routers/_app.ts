import { projectRouter } from '@/modules/projects/server/procedures';
import { createTRPCRouter } from '../init';
import { messageRouter } from '@/modules/messages/server/procedures';
export const appRouter = createTRPCRouter({
  messages: messageRouter,
  projects: projectRouter

  // invoke: baseProcedure.input(z.object({
  //   value: z.string()
  // })).mutation(async({input}) => {
  //   await inngest.send({
  //     name: "test/hello.world",
  //     data: {
  //       value: input.value
  //     }
  //   })
  // }),
});
// export type definition of API
export type AppRouter = typeof appRouter;