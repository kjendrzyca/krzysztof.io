import React from 'react'
import type { ContentLanguage } from '@/lib/content-language'

type SubscribeKIOProps = {
  language?: ContentLanguage
}

const subscribeCopy: Record<ContentLanguage, { text: string; button: string }> = {
  pl: {
    text: 'Jeśli chcesz od czasu do czasu dostać ode mnie informacje o nowych wpisach, notatkach lub projektach, to zapisz się do newslettera.',
    button: 'Zapisz się',
  },
  en: {
    text: 'If you want to occasionally hear from me about new posts, notes, or projects, subscribe to the newsletter.',
    button: 'Subscribe',
  },
}

export const SubscribeKIO = ({ language = 'pl' }: SubscribeKIOProps) => {
  const copy = subscribeCopy[language]

  return (
    <div className="subscribe-form">
      <div>
        <p>
          <b>P.S.</b> {copy.text}
        </p>
      </div>

      <div className="subscribe-button-wrapper">
        <button
          className="primary-button"
          onClick={() => {
            window.open('https://landing.mailerlite.com/webforms/landing/r5b2n3', '_blank')
          }}
          data-umami-event="kio-subscribe-button-clicked"
        >
          {copy.button}
        </button>
      </div>
    </div>
  )
}
