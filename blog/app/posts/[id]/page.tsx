import { getPosts } from '@/api/posts';
import { API } from '@/app/api';
import { PagePostDetail } from '@/components/PagePostDetail/PagePostDetail';
import { CommentsModel } from '@/interface/comments.interface';
import { PostsModel } from '@/interface/posts.interface';

export async function generateStaticParams() {
	const posts = await getPosts();
	return posts.map(post => ({
		id: post.id.toString()
	}));
}

// Функция для получения данных поста и комментариев
async function getPostData(id: string): Promise<{ post: PostsModel, comments: CommentsModel[] }> {
	const [postRes, commentsRes] = await Promise.all([
		fetch(`${API.posts}/${id}`),
		fetch(`${API.posts}/${id}/comments`)
	]);

	if (!postRes.ok || !commentsRes.ok) {
		throw new Error('Ошибка загрузки поста или комментариев');
	}

	const post = await postRes.json();
	const comments = await commentsRes.json();
	return { post, comments };
}

interface PostProps {
	params: { id: string };
}

export default async function Post({ params }: PostProps) {
	const { post, comments } = await getPostData(params.id);
	return (
		<>
			<PagePostDetail post={post} comments={comments}/>
			{/* <DetailPost post={post} />
			<Comments comments={comments} /> */}
		</>
	);
}
