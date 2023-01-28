import Image from "next/image";
import getServerSession from "../utils/getServerSession";
import SignIn from "../components/sign-in/signIn.compoent";
import Signout from "../components/sign-out/signout.component";
import { trpc } from "../utils/trpcProvider";

import style from "./page.module.css";
import TrpcMessage from "../components/trpcMessage/trpcMessage";

const HomePage = async () => {
  const session = await getServerSession();

  if (!session || !session.user) {
    return (
      <div className={style.unAuthedMain}>
        <h1 className={style.welcome}>Create T3 Next-13 App</h1>
        <SignIn provider="google" />
        <TrpcMessage />
      </div>
    );
  }

  return (
    <div className={style.authedMain}>
      <div className={style.inset}>
        <div className={style.imageContainer}>
          <Image fill src={session.user.image!} alt="" />
        </div>
      </div>
      <h1 className={style.welcome}>{`Welcome ${session.user.name}`}</h1>
      <Signout />
    </div>
  );
};

export default HomePage;
