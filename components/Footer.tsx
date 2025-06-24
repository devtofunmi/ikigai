'use client';

export default function Footer() {
  return (
    <footer className="mt-20 text-center text-sm text-gray-400">
      © {new Date().getFullYear()} Crafted with purpose ✨ by{' '}
      <a className="hover:underline font-bold" href="https://www.tofunmi.xyz">
        Tofunmi
      </a>.
    </footer>
  );
}
