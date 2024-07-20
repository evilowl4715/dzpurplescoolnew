import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface LikeProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isActive?: boolean,
    count?: number,
    setLike?: (isActive: boolean, newCount: number) => void;
    disableButton: boolean;
    showCount: boolean;
}