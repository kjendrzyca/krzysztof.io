import React from 'react'
import NextImage from 'next/image'

type BookCoverProps = {
  src: string
}

export const BookCover = ({ src }: BookCoverProps) => (
  <div className="book-cover">
    <NextImage
      src={src}
      width={282}
      height={400}
      alt="ebook"
      className="book-cover-image"
    />
  </div>
)
