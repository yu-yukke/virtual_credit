'use client';

import { signIn } from 'next-auth/react';

export const GoogleButton = () => {
  return <button onClick={() => signIn('google')}>Login With Google</button>;
};
