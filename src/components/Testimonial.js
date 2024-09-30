import React from 'react'
import NextImage from 'next/image'

export const Testimonial = ({ imageSrc, quote, author, title }) => {
  return (
    <div className="testimonial">
      <div className="testimonial-content">
        <blockquote>&quot;{quote}&quot;</blockquote>
        <div className="testimonial-author-info">
          <div className="testimonial-avatar">
            <NextImage
              src={imageSrc}
              width={50}
              height={50}
              alt={`${author} portrait`}
              objectFit="cover"
            />
          </div>
          <div className="testimonial-author-details">
            <p className="testimonial-author">{author}</p>
            <p className="testimonial-title">{title}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
