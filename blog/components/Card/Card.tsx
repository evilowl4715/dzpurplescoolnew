import { getPosts } from '@/api/posts';
import { CardClient } from './CardClient';

export async function Card() {
  const posts = await getPosts();
  return <CardClient posts={posts} />;
}