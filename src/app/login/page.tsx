'use client';

import { Grid } from '@kuma-ui/core';
import { useSession, signOut } from 'next-auth/react';

import { GoogleButton } from '@/components/elements/buttons/auth';

export default function Login() {
  const { data: session } = useSession();

  return (
    <Grid gridTemplateColumns={'1fr min(1240px, calc(100% - 60px)) 1fr'}>
      {session && session.user ? (
        <>
          Signed in as {session.user.name} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <>
          <GoogleButton />
        </>
      )}
    </Grid>
  );
}
