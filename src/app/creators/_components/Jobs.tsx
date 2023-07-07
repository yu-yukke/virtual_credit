import { css } from '../../../../styled-system/css';

import { CheckBoxButton } from '@/components/elements/CheckBoxButton';
import { Job } from '@/db/schema';

type JobList = Job[];

async function getJobs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/jobs`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export const Jobs = async () => {
  const jobs: JobList = await getJobs();

  return (
    <ul
      className={css({
        display: 'flex',
        alignItems: 'center',
        gap: 8,
      })}
    >
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
    </ul>
  );
};
