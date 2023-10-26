import {
  AnonymousUser,
  AnonymousUserCopyright,
  Copyright,
  User,
  UserCopyright,
  Work as PrismaWork,
  WorkHistory,
  WorkImage,
} from '@prisma/client';
import { Merge } from '../merge';

export type Work = Merge<
  PrismaWork,
  {
    histories: WorkHistory[];
    workImages: WorkImage[];
    copyrights: Merge<
      Copyright,
      {
        userCopyrights: Merge<
          UserCopyright,
          {
            user: User;
          }
        >[];
        anonymousUserCopyrights: Merge<
          AnonymousUserCopyright,
          { anonymousUser: AnonymousUser }
        >[];
      }
    >[];
  }
>;
