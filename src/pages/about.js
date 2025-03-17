import { useEffect } from 'react';
import { useRouter } from 'next/router';

const projects = [
  { name: "Portfolio Website", description: "Built with Next.js and Tailwind CSS" },
  { name: "E-Commerce App", description: "A fully-featured shopping platform" },
  { name: "Blog Platform", description: "A platform for creating and sharing blog posts" },
  { name: "Social Media App", description: "A social media platform with user authentication and posts" },
  { name: "Task Management App", description: "A tool for organizing tasks and projects" },
];

export default function About() {
  const router = useRouter();

  useEffect(() => {
    router.push('/#about');
  }, [router]);

  return null;
}