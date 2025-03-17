import { useEffect } from 'react';
import { useRouter } from 'next/router';

const projects = [
    { name: "Portfolio Website", description: "Built with Next.js and Tailwind CSS" },
    { name: "E-Commerce App", description: "A fully-featured shopping platform" },
  ];
  
  export default function Projects() {
    const router = useRouter();

    useEffect(() => {
      router.push('/#projects');
    }, [router]);

    return null;
  }