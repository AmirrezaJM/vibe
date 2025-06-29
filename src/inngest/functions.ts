import { inngest } from "./client";
import { openai, createAgent } from "@inngest/agent-kit";
export const helloWorld = inngest.createFunction(
    { id: "hello-world" },
    { event: "test/hello.world" },
    async ({ event }) => {
        // Create a new agent with a system prompt (you can add optional tools, too)
        const codeAgent = createAgent({
            name: "code-agent",
            system: "You are an expert next.js developer, you write readable,maintanble code. you write simple Next.js & React snippets.",
            model: openai({ model: "gpt-4o", apiKey: process.env.OPEN_AI_API_KEY }),
        });

        const { output } = await codeAgent.run(
            `summerize this following text : ${event.data.value}`,
        );
        return { output };
    },
);
