'use client';

import { usePosts } from '@/hooks/usePosts';
import type { Post } from '@/lib/types';
import { useState } from 'react';

export default function CreateForm() {
  const [input, setInput] = useState<Post>({
    title: '',
    content: '',
  });
  const { posts } = usePosts();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const post = {
      id: Date.now(),
      ...input,
    };
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
    setInput({ title: '', content: '' });
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="flex flex-col w-full gap-4 sm:w-1/2"
    >
      <input
        onChange={(e) => setInput({ ...input, title: e.target.value })}
        name="Title"
        value={input.title}
        type="text"
        placeholder="Title"
        className="p-2 border border-gray-300 rounded"
      />
      <textarea
        onChange={(e) => setInput({ ...input, content: e.target.value })}
        name="Content"
        value={input.content}
        placeholder="Content"
        className="p-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="w-full p-2 text-white bg-blue-500 rounded items sm:w-1/3 lg:w-1/4"
      >
        Submit
      </button>
    </form>
  );
}
