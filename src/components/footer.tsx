export default function Footer() {
  const dateTime = new Date();
  const year = dateTime.getFullYear();
  return (
    <footer className="w-full px-0 py-5 text-center text-white bg-gray-700 min-h-14">
      <p>&copy; {year} Bloggger</p>
    </footer>
  );
}
