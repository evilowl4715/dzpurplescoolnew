'use client';
import { Htag, Tag, Date, Like, Ptag, ReadingTime } from '../../components';
import styles from './Card.module.css';
import img from '../../public/img-blog.png';
import Image from 'next/image';
import ArrowRight from '../../public/arrow-more.svg';
import { useEffect, useState } from 'react';

// У МЕНЯ 3 РАЗА ЗАПАРА БЫЛА С ГИТОМ
// ПОЭТОМУ ТУТ ИЗМЕНЕНИЯ ПО ЗАПРОСАМ, КОМЕНТ СТАВЛЮ ЧТО БЫ ЗАПУШИЛОСЬ В ВЕТКУ

export const Card = () => {
	const [countLike, setCountLike] = useState<number>(0);
	const [isActiveLike, setIsActiveLike] = useState<boolean>(false);
	const postId = 1;

	useEffect(() => {
		const fetchLikeState = async () => {
			try {
				const res = await fetch(
					`https://jsonplaceholder.typicode.com/posts/${postId}`
				);
				const data = await res.json();
				const { likeCount, isActive } = data;
				setCountLike(likeCount || 0);
				setIsActiveLike(isActive || false);
			} catch (error) {
				console.error('Ошибка', error);
			}
		};
		fetchLikeState();
	}, [postId]);

	const handleLikeClick = async (isActive = false, newCount: number) => {
		setIsActiveLike(isActive);
		setCountLike(newCount);

		try {
			const res = await fetch(
				`https://jsonplaceholder.typicode.com/posts/${postId}`,
				{
					method: 'PATCH',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						likeCount: newCount,
						isActive: isActive
					})
				}
			);
			if (!res.ok) {
				throw new Error('Ошибка при выполнение');
			}
			console.log('Выполнено', res);
		} catch (error) {
			console.error('Ошибка', error);
		}
	};

	return (
		<div className={styles.card}>
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
								isActive={isActiveLike}
								count={countLike}
								setLike={handleLikeClick}
							>
								{countLike}
							</Like>
						</div>
					</div>
					<Htag htag='h3'>Как работать с CSS Grid</Htag>
					<Ptag size='s'>
						Грид-раскладка (CSS Grid Layout) представляет собой двумерную
						систему сеток в CSS. Гриды подойдут и для верстки основных областей
						страницы..
					</Ptag>
				</div>
				<div className={styles['card-body__bottom']}>
					<ReadingTime>3 минуты</ReadingTime>
					<div className={styles['more']}>
						<a href='#'>
							Читать
							<ArrowRight />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

// тест