'use client';

import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';

type Props = {
  client: string;
};

export const SignInButton = ({ client }: Props) => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  return (
    <button onClick={() => signIn(client, { callbackUrl })}>
      Login With Google
    </button>
  );
};
