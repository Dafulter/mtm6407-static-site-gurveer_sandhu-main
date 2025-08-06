import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'My Static Site',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  );
}
