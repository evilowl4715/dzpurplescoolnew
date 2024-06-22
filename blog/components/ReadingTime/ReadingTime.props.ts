import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ReadingTimeProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode
}