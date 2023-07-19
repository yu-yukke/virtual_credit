'use client';

import { Button, VStack, css } from '@kuma-ui/core';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { SectionTitle } from './SectionTitle';
import { Tag } from '@/db/schema';

type TagProps = {
  tags: Tag[];
};

export const Tags = ({ tags }: TagProps) => {
  return (
    <VStack as='section' alignItems={'center'}>
      <SectionTitle title='TAGS' />
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.3, duration: 0.5 },
        }}
        viewport={{ once: true }}
        className={css`
          width: auto;
          max-width: 680px;
          flex-wrap: wrap;
          display: flex;
          align-items: center;
          margin-top: 48px;
          gap: 16px;
        `}
      >
        {tags.map((tag) => (
          <Link href='/' key={tag.id}>
            <Button
              fontSize={'0.875rem'}
              color={'colors.text.secondary'}
              py={4}
              px={12}
              borderRadius={'1rem'}
              border={'1px solid #E8E8E8'}
              _hover={{ color: 'colors.text.primary' }}
            >
              # {tag.name}
            </Button>
          </Link>
        ))}
      </motion.div>
    </VStack>
  );
};
