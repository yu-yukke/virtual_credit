import { Work, WorkHistory } from '@prisma/client';
import { Merge } from '../merge';

export type Work = Merge<
  Work,
  {
    histories: WorkHistory[];
  }
>;
