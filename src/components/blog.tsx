import type { Post } from '@/lib/types';
import Link from 'next/link';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Blog({
  id,
  title,
  author,
  content,
  onDelete,
}: Post & { onDelete: () => void }) {
  return (
    <div className="py-4">
      <h1 className="mb-2 text-4xl text-left">{title}</h1>
      <p className="mb-2">By: {author}</p>
      <p className="mb-3 text-justify">{content}</p>
      <div className="flex gap-2">
        <Link
          href={`/${id}/edit`}
          className="px-1 py-1 transition duration-100 rounded-md hover:bg-amber-500"
        >
          <EditIcon />
        </Link>
        <form action={onDelete}>
          <button
            type="submit"
            className="px-1 py-1 transition duration-100 rounded-md cursor-pointer hover:bg-red-600"
          >
            <DeleteIcon />
          </button>
        </form>
      </div>
    </div>
  );
}
