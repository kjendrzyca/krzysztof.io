import React from 'react'
import { BookCover } from './BookCover'

export const SPWZEbook = () => {
  // width: 282, height: 400

  return (
    <div className="spwzebook-wrapper">
      <div className="spwzebook-img-wrapper">
        <BookCover src="/spwz/spwz-ebook-cover-medium.png" />
      </div>

      <div className="spwzebook-text-wrapper">
        <p>
          W pierwszym mailu wyślę Ci dokument, w którym opisuję mój{` `}
          <strong>proces planowania oraz realizacji zadań.</strong>
        </p>
        <p>
          Podejście, które tam opisuję, stosuję od kilku lat, bo okazało się być prawie całkowicie kuloodporne.
        </p>
        <p>
          Pozwala mi przejąć pełną kontrolę nad tym, co robię i szybciej dowozić zadania.
        </p>
      </div>
    </div>
  )
}
