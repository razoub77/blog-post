import Link from 'next/link';
import { Josefin_Sans } from 'next/font/google';

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Header() {
  return (
    <header
      className={`${josefinSans.className} flex items-center justify-end px-5 py-4 text-white bg-blue-400 `}
    >
      <h1 className="font-bold mr-auto text-4xl">
        <Link href={'/'}>PimBi</Link>
      </h1>
      <nav>
        <ul>
          <li className="inline-block px-5 py-0 list-none">
            <Link href={'/'}>Home</Link>
          </li>
          <li className="inline-block px-5 py-0 list-none">
            <Link href={'/create'}>Create</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
