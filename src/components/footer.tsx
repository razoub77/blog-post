export default function Footer() {
  const dateTime = new Date();
  const year = dateTime.getFullYear();
  return (
    <footer className="flex items-center justify-center p-12 text-center text-white bg-gray-700 min-h-20">
      <div className="w-full md:w-3/4 md:mx-auto">
        <p>&copy; {year} PimBi</p>
      </div>
    </footer>
  );
}
