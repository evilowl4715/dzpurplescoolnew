import { API } from '@/app/api';
import { PostsModel } from '@/interface/posts.interface';

export async function getPosts(): Promise<PostsModel[]> {
	console.log('Fetching posts from:', API.posts);
	const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
	if (!res.ok) {
		console.log('Ошибка');
		throw new Error('Ошибка загрузки постов');
	}
    const allPosts = await res.json();
    return allPosts.slice(0, 9);  
}
