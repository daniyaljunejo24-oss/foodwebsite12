import { useEffect } from 'react';
import { useRouter } from '@/context/Router';

export function ScrollToTop() {
  const { path } = useRouter();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [path]);
  return null;
}
