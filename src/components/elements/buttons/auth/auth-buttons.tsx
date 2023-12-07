import { HStack } from '@kuma-ui/core';
import { AuthButton } from './auth-button';

export const AuthButtons = () => {
  return (
    <HStack mt={24} gap={12}>
      <AuthButton provider='google' />
      <AuthButton provider='twitter' />
    </HStack>
  );
};
