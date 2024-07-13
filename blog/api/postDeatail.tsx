import { API } from '@/app/api';
import { PostsModel } from '@/interface/posts.interface';

export async function postDetail(id: number): Promise<PostsModel[]> {
	const res = await fetch(API.posts + '/' + id);
	if (!res.ok) {
		console.log('Ошибка');
		throw new Error('Ошибка загрузки постов');
	}
    return res.json();  
}
