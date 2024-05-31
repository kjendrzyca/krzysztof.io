import React from 'react';
import { MailerLiteForm } from './mailerlite'

export const Subscribe = () => {
  return (
    <div className="subscribe-form">
      <div>
        <h2>📰 Newsletter</h2>
        <p>
          Jeśli chcesz pogadać i/lub od czasu do czasu dostać ode mnie informacje{' '}
          o nowych wpisach, notatkach, projektach,{' '}
          nad którymi pracuję oraz o postępach pracy nad sobą, to zostaw tutaj swój e-mail.</p>
      </div>
      <MailerLiteForm />
    </div>
  )
}
