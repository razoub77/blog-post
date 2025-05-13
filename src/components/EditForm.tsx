'use client';

import { usePosts } from '@/hooks/usePosts';
import { Post } from '@/lib/types';
import { ChangeEvent, useEffect, useState } from 'react';
import Form from './Form';
import { slugify } from '@/lib/actions';
import { redirect } from 'next/navigation';

export default function EditForm({ id }: { id: string }) {
  const { posts } = usePosts();
  const post = posts.find((post) => post.id === id);
  const [input, setInput] = useState<Post>({
    id: '',
    title: '',
    content: '',
  });
  useEffect(() => {
    if (post) {
      setInput({
        id: post.id,
        title: post.title,
        content: post.content,
      });
    }
  }, [post]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
    console.log(name, value);
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
    const filtered = posts.filter((post) => post.id !== id);
    const updated: Post = {
      ...input,
      id: slugify(input.title),
      [name]: value,
    };
    filtered.push(updated);
    localStorage.setItem('posts', JSON.stringify(filtered));
    setInput({ id: '', title: '', content: '' });
    redirect('/');
  };

  return (
    <Form
      title={input.title}
      content={input.content}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
