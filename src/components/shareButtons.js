import React from "react"
import {TwitterShareButton, FacebookShareButton, LinkedinShareButton} from 'react-share'
import Bear from "./bear"

const ShareButtons = ({url, title, socialHandle}) => {
  return (
    <div className="share-buttons-container">
      <Bear />
      <h2>
        <span>Jeśli spodobał Ci się ten wpis,to będę wdzięczny, jeśli <span className="click-it">klikniesz w jeden z poniższych linków</span> i podzielisz się nim w social mediach: <br /></span>

        <span className="share-buttons">
          {`na `}
          <TwitterShareButton
            className='share-button'
            url={url}
            title={title}
            via={socialHandle}
          >
            Twitterze
          </TwitterShareButton>

          {', '}

          <FacebookShareButton
            className='share-button'
            url={url}
            quote={title}
          >
            Facebooku
          </FacebookShareButton>

          {' lub '}

          <LinkedinShareButton
            className='share-button'
            url={url}
            title={title}
          >
            LinkedInie
          </LinkedinShareButton>

          {'.'}
        </span>
      </h2>
      <small>Albo po prostu wrzuć zrzut ekranu na Instagram.</small>
    </div>
  )
}

export default ShareButtons
