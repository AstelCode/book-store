"use client";
import { InputHTMLAttributes } from "react";

type TextAreaProps = InputHTMLAttributes<HTMLTextAreaElement>;

export const TextArea = (props: TextAreaProps) => {
  return (
    <textarea
      {...props}
      className={`pt-2 bg-card border border-border-dark rounded-card min-h-10 outline-none pl-3 ${props.className}`}
    />
  );
};
