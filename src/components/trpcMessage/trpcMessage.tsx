"use client";

import { trpc } from "../../utils/trpcProvider";

const TrpcMessage = () => {
  const message = trpc.example.hello.useQuery({ text: "from TRPC" });
  return (
    <>
      {message.isLoading ? (
        <p>Loading Message...</p>
      ) : (
        <p>{message.data?.greeting}</p>
      )}
    </>
  );
};

export default TrpcMessage;
