import { HStack } from '@kuma-ui/core';
import { CheckBoxButton } from '@/components/elements/CheckBoxButton';
import { Job } from '@/db/schema';

type JobsProps = {
  jobs: Job[];
};

export const Jobs = async ({ jobs }: JobsProps) => {
  return (
    <HStack as='ul' alignItems={'center'} gap={8}>
      <li>
        <CheckBoxButton id='category_all' value={-1} label='すべて' />
      </li>
      {jobs.map((job) => (
        <li key={job.id}>
          <CheckBoxButton
            id={`job_${job.id}`}
            value={job.id}
            label={job.name}
          />
        </li>
      ))}
    </HStack>
  );
};
