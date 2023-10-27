import { Box } from '@kuma-ui/core';
import Link from 'next/link';

export default function Home() {
  return (
    <Box>
      <div>
        <Link href='/works'>作品一覧</Link>
      </div>
      <div>
        <Link href='/creators'>クリエイター一覧</Link>
      </div>
    </Box>
  );
}
