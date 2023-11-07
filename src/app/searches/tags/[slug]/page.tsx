import { Spacer, VStack } from '@kuma-ui/core';
import { WorkList } from './_components';
import { Categories, Tags } from '@/app/works/_components';
import { PageHeadingWrapper } from '@/components/layouts/page-heading-wrapper';

type Props = {
  slug: string;
};

export default function Page({ params }: { params: Props }) {
  return (
    <>
      <PageHeadingWrapper
        title={`# ${decodeURI(params.slug)}`}
        description={`A collection of ${params.slug} works`}
      />
      <Spacer size={1} bg={'colors.borderPrimary'} className='full-bleed' />
      <VStack as='section' mt={20}>
        <Categories />
        <Tags tagName={params.slug} />
      </VStack>
      <WorkList tagName={params.slug} />
    </>
  );
}
