'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { routes } from '@/app';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push(routes.accounts);
  }, [router]);
}
