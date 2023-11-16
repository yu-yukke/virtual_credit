'use client';

import { Pagination as MuiPagination } from '@mui/material';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

type Props = { page: number; pageCount: number };

export const Pagination = ({ page, pageCount }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(Array.from(searchParams.entries()));
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );
  const handleChange = (_e: React.ChangeEvent<unknown>, value: number) => {
    const queryString = createQueryString('page', value.toString());

    router.replace(pathname + '?' + queryString);
  };

  return (
    <MuiPagination
      page={page}
      count={pageCount}
      showFirstButton
      showLastButton
      onChange={handleChange}
    />
  );
};
