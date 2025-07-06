"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTRPC } from '@/trpc/client';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { toast } from 'sonner';

export default function Home() {
  const [value, setValue] = useState("")
  const trpc = useTRPC();
  const {data: messages} = useQuery(trpc.messages.getMany.queryOptions())
  const createdMessage = useMutation(trpc.messages.create.mutationOptions({
    onSuccess: () => {
      toast.success("Message created")
    }
  }))

  return (
    <div>
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button disabled={createdMessage.isPending} onClick={() => createdMessage.mutate({ value: value })}>Invoke Jobs</Button>
    </div>
  );
}
