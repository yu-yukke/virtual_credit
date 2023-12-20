import { VStack } from '@kuma-ui/core';

import { AuthButton } from './auth-button';

type Props = {
  isAgreement?: boolean;
};

export const AuthButtons = ({ isAgreement }: Props) => {
  return (
    <VStack mt={24} gap={16}>
      <AuthButton provider='google' isAgreement={isAgreement} />
      <AuthButton provider='twitter' isAgreement={isAgreement} />
      <AuthButton provider='discord' isAgreement={isAgreement} />
    </VStack>
  );
};
