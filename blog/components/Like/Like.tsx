'use client';
import styles from './Like.module.css';
import { LikeProps } from './Like.props';
import cn from 'classnames';
import LikeIcon from '../../public/like.svg';
import { useEffect, useState } from 'react';

// У МЕНЯ 3 РАЗА ЗАПАРА БЫЛА С ГИТОМ 
// ПОЭТОМУ ТУТ ИЗМЕНЕНИЯ ПО ЛАЙКАМ, КОМЕНТ СТАВЛЮ ЧТО БЫ ЗАПУШИЛОСЬ В ВЕТКУ

export const Like = ({
	children,
	isActive = false,
	count = 0,
	setLike,
	className,
	...props
}: LikeProps): JSX.Element => {
	const [active, setActive] = useState<boolean>(isActive);
	const [likeCount, setLikeCount] = useState<number>(count);

	useEffect(() => {
		setActive(isActive);
		setLikeCount(count);
	}, [isActive, count]);

	const clickLike = () => {
		const newActive = !active;
		const newCount = newActive ? likeCount + 1 : likeCount - 1;
		setActive(newActive);
		setLikeCount(newCount);
		if (setLike) {
			setLike(newActive, newCount);
		}
	};

	return (
		<div
			className={cn(styles.like, className, {
				[styles.active]: isActive
			})}
			{...props}
			onClick={clickLike}
		>
			{children}
			<LikeIcon />
		</div>
	);
};
