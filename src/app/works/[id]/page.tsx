import { VStack } from '@kuma-ui/core';
import { desc, eq } from 'drizzle-orm';

import { Assets } from './_components/Assets';
import { Description } from './_components/Description';
import { KeyVisual } from './_components/KeyVisual';
import { Overview } from './_components/Overview';
import { Tags } from './_components/Tags';
import { WorkImages } from './_components/WorkImages';
import { ReportView } from '@/components/common/ReportView';

type PageProps = {
  params: {
    id: number;
  };
};

export default async function Page({ params }: PageProps) {
  return (
    <>

    </>
  );
}
