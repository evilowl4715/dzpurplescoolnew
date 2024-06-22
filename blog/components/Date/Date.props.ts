import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface DateProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode
}