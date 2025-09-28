import React from 'react'

export const SubscribeKIO = () => {
  return (
    <div className="subscribe-form">
      <div>
        <p>
          <b>P.S.</b> Jeśli chcesz od czasu do czasu dostać ode mnie informacje o nowych wpisach,
          notatkach lub projektach, to zostaw tutaj swój e-mail.
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
          Zapisz się
        </button>
      </div>
    </div>
  )
}
