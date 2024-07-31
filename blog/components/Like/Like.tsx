import {LikeСlient} from './LikeClient';
interface LikeClientProps {
	postId: number;
	countLike?: number;
	isActiveLike?: boolean;
	handleLikeClick?: (isActive: boolean, newCount: number) => void;
	disableButton?: boolean;
	showCount?: boolean;
}

export function Like({
	countLike,
	isActiveLike,
	handleLikeClick,
	disableButton = false,
	showCount = true
}: LikeClientProps) {

	return (
		<LikeСlient
			isActive={isActiveLike}
			count={countLike}
			setLike={handleLikeClick}
			disableButton={disableButton}
			showCount={showCount}
		/>
	);
}
