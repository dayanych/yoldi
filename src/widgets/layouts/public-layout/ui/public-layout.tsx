'use client';

import { usePublicLayout } from '../lib/use-public-layout';

export const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  usePublicLayout();

  return children;
};
