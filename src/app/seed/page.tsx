"use client";

import { trpc } from "../../utils/trpcProvider";
import { data } from "../../../public/data/cleanerData";
import { wait } from "../../utils/wait";

const Seed = () => {
  const mutation = trpc.seed.seedIndicators.useMutation();
  const onClick = async () => {
    for (const obj of data) {
      mutation.mutate(obj);
      await wait(25);
    }
  };

  return <div onClick={() => onClick()}>Test</div>;
};

export default Seed;
