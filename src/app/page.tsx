"use client";

import { trpc } from "../utils/trpcProvider";
import { data } from "../../public/data/data";

const Page = () => {
  const mutation = trpc.seed.seedIndicators.useMutation();
  const query = trpc.seed.pullData.useQuery();

  const wait = (time: number) => {
    return new Promise((res) => {
      setTimeout(() => {
        res(null);
      }, time);
    });
  };

  const onClick = async () => {
    // for (let obj of data) {
    //   mutation.mutate(obj);
    //   await wait(50);
    // }
  };

  const onClick2 = () => {
    console.log(data.length);
    if (query.data) {
      console.log(query.data[532]?.text);
    }
  };

  return (
    <>
      <div onClick={() => onClick()}>input</div>
      <div onClick={() => onClick2()}>read</div>
    </>
  );
};

export default Page;
