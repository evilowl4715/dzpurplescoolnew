import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface TextareaProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    placeholder: string;
}