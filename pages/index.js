import { Button } from "../global/GlobalStyle";
import { NextHead } from "../global/NextHead";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  };

  return (
    <>
      <NextHead title="E-Commerce - Login" />

      <div>
        <Button onClick={() => signOut}>Sign out</Button>
        <Button onClick={() => signIn()}>Login</Button>
      </div>
    </>
  );
};