"use client";

import { FC, ReactNode } from "react";

interface WrapperSectionProps {
  title: string;
  desc: string;
  children?: ReactNode;
  link: string;
}
export const WrapperSection: FC<WrapperSectionProps> = ({
  desc,
  title,
  children,
  link,
}) => {
  return (
    <div
      id={link}
      className="py-12 flex items-center w-full flex-wrap justify-center flex-col gap-6"
    >
      <h3 className="text-2xl  md:text-4xl font-bold">
        {title} <hr className="border-blue-500 border-2 mt-2 rounded-lg" />
      </h3>
      <div className="max-w-5xl px-4 md:px-0 text-gray-500 text-center">
        <p className="text-base sm:text-lg">{desc}</p>
      </div>
      {children}
    </div>
  );
};
