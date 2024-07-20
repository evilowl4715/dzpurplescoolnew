import { getPosts } from '@/api/posts';
import { API } from '@/app/api';
import { DetailPost } from '@/components/DetailPost/DetailPost';
import { PostsModel } from '@/interface/posts.interface';

// Функция для генерации статических параметров
export async function generateStaticParams() {
	const posts = await getPosts();
	return posts.map(post => ({
		id: post.id.toString()
	}));
}

// Функция для получения данных поста
async function getPostData(id: string): Promise<PostsModel> {
	const res = await fetch(`${API.posts}/${id}`);
	if (!res.ok) {
		throw new Error('Ошибка загрузки поста');
	}
	const post = await res.json();
	return post;
}

interface PostProps {
	params: { id: string };
}

export default async function Post({ params }: PostProps) {
	const post = await getPostData(params.id);
	return (
		<DetailPost post={post}/>
		// <div className="">
		// 	<h3>{post.title}</h3>
		// 	{post.body}
		// </div>
	);
}
