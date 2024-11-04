import React from "react"
import {TwitterShareButton, FacebookShareButton, LinkedinShareButton} from 'react-share'
import Bear from "./bear"

const defaultText = <>Jeśli spodobał Ci się ten wpis, to będę wdzięczny, jeśli podzielisz się nim w social mediach, <span className="click-it">klikając w jeden z poniższych linków:</span></>

const ShareButtons = ({url, title, socialHandle, text}) => {
  return (
    <div className="share-buttons-container">
      <Bear />
      <h2><span>{text || defaultText}<br /></span>

        <span className="share-buttons">
          <TwitterShareButton
            className='share-button'
            url={url}
            title={title}
            via={socialHandle}
          >
            X
          </TwitterShareButton>

          {', '}

          <FacebookShareButton
            className='share-button'
            url={url}
            quote={title}
          >
            Facebook
          </FacebookShareButton>

          {' lub '}

          <LinkedinShareButton
            className='share-button'
            url={url}
            title={title}
          >
            LinkedIn
          </LinkedinShareButton>

          {'.'}
        </span>
      </h2>
      <small>Albo po prostu wrzuć zrzut ekranu na Instagram.</small>
    </div>
  )
}

export default ShareButtons
