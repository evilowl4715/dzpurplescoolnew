import { ReactNode } from "react";

export interface HtagProps {
    htag: 'h1' | 'h2' | 'h3',
    children: ReactNode
}