import { caller } from '@/trpc/server';

export default async function Home() {
  const greeting = await caller.hello({text: "hello"});

  return (
    <div>
      <p>{JSON.stringify(greeting)}</p>
    </div>
  );
}
