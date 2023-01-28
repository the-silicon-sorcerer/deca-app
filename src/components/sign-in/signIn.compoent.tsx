"use client";

import { signIn } from "next-auth/react";

const SignIn = ({ provider }: { provider: string }) => {
  return (
    <button onClick={() => signIn(provider)}>{`Sign in with ${provider
      .charAt(0)
      .toLocaleUpperCase()
      .concat(provider.slice(1))}`}</button>
  );
};

export default SignIn;
