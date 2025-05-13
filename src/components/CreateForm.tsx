'use client';

import { usePosts } from '@/hooks/usePosts';
import type { Post } from '@/lib/types';
import { ChangeEvent, useState } from 'react';
import Form from './Form';
import { slugify } from '@/lib/actions';
import { redirect } from 'next/navigation';

export default function CreateForm() {
  const [input, setInput] = useState<Post>({
    id: '',
    title: '',
    content: '',
  });
  const { posts } = usePosts();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const post = {
      ...input,
      id: slugify(input.title),
    };
    posts.push(post);
    console.log(posts[posts.length - 1]);
    localStorage.setItem('posts', JSON.stringify(posts));
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
