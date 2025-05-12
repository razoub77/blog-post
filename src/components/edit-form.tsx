'use client';

import { usePosts } from '@/hooks/usePosts';
import { Post } from '@/lib/types';
import { useEffect, useState } from 'react';

export default function EditForm({ id }: { id: number }) {
  const { posts } = usePosts();
  const post = posts.find((post) => post.id === id);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [post]);

  const [input, setInput] = useState<Post>({
    id: id,
    title: title,
    content: content,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
    const filtered = posts.filter((post) => post.id !== id);
    const updated: Post = {
      ...input,
      [name]: value,
    };
    filtered.push(updated);
    localStorage.setItem('posts', JSON.stringify(filtered));
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
        value={title}
        type="text"
        placeholder="Title"
        className="p-2 border border-gray-300 rounded"
      />
      <textarea
        onChange={(e) => setInput({ ...input, content: e.target.value })}
        name="Content"
        value={content}
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
