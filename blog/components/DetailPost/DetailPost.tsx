'use client';
import { Tag, Date } from '../../components';
import styles from './DetailPost.module.css';
import { DetailPostProps } from './DetailPost.props';
import { Like } from '../Like/Like';
import parse from 'html-react-parser';
import { useState } from 'react';

export const DetailPost = ({ post }: DetailPostProps) => {
	const [countLike, setCountLike] = useState<number>(0);
	const [isActiveLike, setIsActiveLike] = useState<boolean>(false);

	const handleLikeClick = (isActive: boolean, newCount: number) => {
		setIsActiveLike(isActive);
		setCountLike(newCount);
	};

	return (
		<div className={styles.postDetail}>
			<div className={styles.post}>
				<div className={styles.top}>
					<div className={styles.title}>
						<h1>{post.title}</h1>
					</div>
					<div className={styles.info}>
						<Tag>Front-end</Tag>
						<span>·</span>
						<Date>1 месяц назад</Date>
						<span>·</span>
						<Date>3 минуты</Date>
						<span>·</span>
						<Like
							postId={post.id}
							countLike={countLike}
							isActiveLike={isActiveLike}
							handleLikeClick={handleLikeClick}
							disableButton={true}
							showCount={true}
						/>
					</div>
				</div>
				<div className={styles.img}>
					<img
						src='https://steemitimages.com/DQmYU7u9kSFzpo3GoRjDcTs59k1wXNrD1CWz13RmXXsKzJE/Murale%20Ron%20English.jpg'
						alt='hh'
					/>
				</div>
				<div className={styles.content}>{parse(post.body)}</div>
				<div className={styles.postLike}>
					<p>Понравилось? Жми</p>
					<Like
						postId={post.id}
						countLike={countLike}
						isActiveLike={isActiveLike}
						handleLikeClick={handleLikeClick}
						disableButton={false}
						showCount={false}
					/>
				</div>
			</div>
		</div>
	);
};
