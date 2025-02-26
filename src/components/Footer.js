export default function Footer() {
  return (
    <footer className="py-6 text-center text-sm font-mono text-lighter/60">
      <p>Built with Next.js & Tailwind CSS</p>
      <p>© {new Date().getFullYear()} Frank L. All Rights Reserved.</p>
    </footer>
  );
}