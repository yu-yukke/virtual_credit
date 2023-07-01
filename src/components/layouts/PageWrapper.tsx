'use client';

import { motion, AnimatePresence } from 'framer-motion';

type PageProps = {
  children: React.ReactNode;
};

export const PageWrapper = ({ children }: PageProps) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ delay: 0.3 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};
