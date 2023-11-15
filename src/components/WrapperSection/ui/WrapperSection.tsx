'use client'

import {FC, ReactNode} from 'react'

interface WrapperSectionProps {
  title: string
  desc: string
  children?: ReactNode
  link: string
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
      className="flex w-full flex-col flex-wrap items-center justify-center gap-6 py-12">
      <h3 className="text-2xl  font-bold md:text-4xl">
        {title} <hr className="mt-2 rounded-lg border-2 border-blue-500" />
      </h3>
      <div className="max-w-5xl px-4 text-center text-gray-500 md:px-0">
        <p className="text-base sm:text-lg">{desc}</p>
      </div>
      {children}
    </div>
  )
}
