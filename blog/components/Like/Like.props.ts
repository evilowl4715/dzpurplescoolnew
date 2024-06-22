import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface LikeProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isActive?: boolean,
    count?: number,
    children: ReactNode,
    setLike?: (isActive: boolean, newCount: number) => void;
}