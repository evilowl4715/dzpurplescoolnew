'use client';
import styles from './Like.module.css';
import { LikeProps } from './Like.props';
import cn from 'classnames';
import LikeIcon from '../../public/like.svg';
import { useEffect, useState } from 'react';

export const Like = ({
	isActive = false,
	count = 0,
	setLike,
	disableButton = false,
	showCount = false,
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
		if (disableButton) return;
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
				[styles.active]: isActive && !disableButton,
				[styles.circle]: !showCount
			})}
			{...props}
			onClick={clickLike}
		>
			{showCount && likeCount}
			<LikeIcon />
		</div>
	);
};
