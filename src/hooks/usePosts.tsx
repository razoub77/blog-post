import { Post } from '@/lib/types';
import { useEffect, useState } from 'react';

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    }
  }, []);

  const deletePost = (id: number) => {
    const updatedPosts = posts.filter((_, index) => index !== id);
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  return { posts, deletePost };
}
