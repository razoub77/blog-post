'use client';

import Blog from '@/components/Blog';
import { usePosts } from '@/hooks/usePosts';

export default function Home() {
  const { posts, deletePost } = usePosts();

  return (
    <main className="flex flex-col items-center w-full min-h-screen p-12 md:w-3/4 md:mx-auto">
      <div className="flex flex-col gap-4">
        {posts ? (
          posts.map((post, index) => (
            <Blog key={index} {...post} onDelete={() => deletePost(index)} />
          ))
        ) : (
          <h1>Create your first blog</h1>
        )}
      </div>
    </main>
  );
}
