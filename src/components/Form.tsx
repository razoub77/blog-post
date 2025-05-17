import { ChangeEvent } from 'react';

export default function Form({
  title,
  author,
  content,
  onChange,
  onSubmit,
}: {
  title: string;
  author: string;
  content: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <form
      onSubmit={onSubmit}
      autoComplete="off"
      className="flex flex-col w-full gap-4"
    >
      <input
        onChange={onChange}
        name="title"
        value={title}
        type="text"
        placeholder="Title"
        className="p-2 border border-gray-300 rounded"
      />
      <input
        onChange={onChange}
        name="author"
        value={author}
        type="text"
        placeholder="Author"
        className="p-2 border border-gray-300 rounded"
      />
      <textarea
        onChange={onChange}
        name="content"
        value={content}
        placeholder="Content"
        className="p-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="w-full p-2 text-white bg-blue-500 rounded items md:w-1/4"
      >
        Submit
      </button>
    </form>
  );
}
