'use client';
import { Htag, Tag, Date, Ptag, ReadingTime, Like } from '../../components';
import styles from './Card.module.css';
import img from '../../public/img-blog.png';
import Image from 'next/image';
import ArrowRight from '../../public/arrow-more.svg';
import { PostsModel } from '@/interface/posts.interface';
import Link from 'next/link';
import { useState } from 'react';

interface CardClientProps {
	posts: PostsModel[];
}

export function CardClient({ posts }: CardClientProps) {
	const [likes, setLike] = useState<{
		[key: number]: { count: number; isActive: boolean };
	}>({});

	const handleLikeClick = (
		postId: number,
		isActive: boolean,
		newCount: number
	) => {
		setLike(prevLikes => ({
			...prevLikes,
			[postId]: { isActive, count: newCount }
		}));
	};
	return (
		<>
			{posts.map(p => (
				<div key={p.id} className={styles.card}>
					<div className={styles['card__img']}>
						<Image src={img} alt='Превьюшка' />
					</div>
					<div className={styles['card-body']}>
						<div className={styles['card-body__content']}>
							<div className={styles['card-body__top']}>
								<div className={styles['card-body-top__left']}>
									<Tag>Front-end</Tag>
									<span>·</span>
									<Date>1 месяц назад</Date>
								</div>
								<div>
									<Like
										postId={p.id}
										countLike={likes[p.id]?.count || 0}
										isActiveLike={likes[p.id]?.isActive || false}
										handleLikeClick={(isActive, newCount) =>
											handleLikeClick(p.id, isActive, newCount)
										}
									/>
								</div>
							</div>
							<Htag htag='h3'>{p.title}</Htag>
							<Ptag size='s'>{p.body}</Ptag>
						</div>
						<div className={styles['card-body__bottom']}>
							<ReadingTime>3 минуты</ReadingTime>
							<div className={styles.more}>
								<Link href={`/posts/${p.id}`}>
									Читать
									<ArrowRight />
								</Link>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
}
