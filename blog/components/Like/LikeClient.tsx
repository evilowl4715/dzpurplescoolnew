'use client';
import { Like } from '../../components';

interface LikeClientProps {
	postId: number;
	countLike: number;
	isActiveLike: boolean;
	handleLikeClick: (isActive: boolean, newCount: number) => void;
	disableButton?: boolean;
	showCount?: boolean;
}

export default function LikeClient({
	countLike,
	isActiveLike,
	handleLikeClick,
	disableButton = false,
	showCount = true
}: LikeClientProps) {

	return (
		<Like
			isActive={isActiveLike}
			count={countLike}
			setLike={handleLikeClick}
			disableButton={disableButton}
			showCount={showCount}
		/>
	);
}
