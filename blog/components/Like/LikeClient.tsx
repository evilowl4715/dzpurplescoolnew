'use client';
import { useState } from 'react';
import { Like } from '../../components';

interface LikeClientProps {
    postId: number;
}

export default function LikeClient({ postId }: LikeClientProps) {
    const [countLike, setCountLike] = useState<number>(0);
    const [isActiveLike, setIsActiveLike] = useState<boolean>(false);

    const handleLikeClick = async (isActive = false, newCount: number) => {
        setIsActiveLike(isActive);
        setCountLike(newCount);
        
    };

    return (
        <Like
            isActive={isActiveLike}
            count={countLike}
            setLike={handleLikeClick}
        >
            {countLike}
        </Like>
    );
}