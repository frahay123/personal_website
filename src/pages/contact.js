import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Contact() {
  const router = useRouter();

  useEffect(() => {
    router.push('/#contact');
  }, [router]);

  return null;
}