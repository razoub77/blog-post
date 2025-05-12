'use client';

import Blog from '@/components/blog';
import { usePosts } from '@/hooks/usePosts';

export default function Home() {
  const { posts, deletePost } = usePosts();

  return (
    <>
      <main className="flex flex-col items-center min-h-screen p-12">
        <div className="flex flex-col w-full gap-4 md:w-3/4">
          {posts ? (
            posts.map((post, index) => (
              <Blog
                key={index}
                id={index}
                {...post}
                onDelete={() => deletePost(index)}
              />
            ))
          ) : (
            <h1>Create your first blog</h1>
          )}
        </div>
      </main>
    </>
  );
}
