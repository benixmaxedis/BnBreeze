'use client';
import { useState, useEffect } from 'react';

interface ClientOnlyProps {
  children: React.ReactNode;
}

export default function ClientOnly({ children }: ClientOnlyProps) {
  const [hasMounted, sethasMounted] = useState(false);

  useEffect(() => {
    sethasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
}
