import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-end w-full p-12 text-white md:w-3/4 md:mx-auto">
      <h1 className="mr-auto text-4xl font-bold">
        <Link href={'/'}>PimBi</Link>
      </h1>
      <nav>
        <ul>
          <li className="inline-block px-5 py-0 list-none">
            <Link
              href={'/'}
              className="transition duration-100 hover:text-gray-300"
            >
              Home
            </Link>
          </li>
          <li className="inline-block px-5 py-0 list-none">
            <Link
              href={'/create'}
              className="transition duration-100 hover:text-gray-300"
            >
              Create
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
