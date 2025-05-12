import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-end px-5 py-4 text-white bg-blue-400 ">
      <h1 className="mr-auto">Bloggger</h1>
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
