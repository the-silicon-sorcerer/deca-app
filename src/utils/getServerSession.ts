import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";

const getServerSession = async () => {
  const session = await unstable_getServerSession(authOptions);
  return session;
};

export default getServerSession;
