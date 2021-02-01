import React from 'react';
import { MailerLiteForm } from './mailerlite'

const Subscribe = () => {
  return (
    <div className="subscribe-form">
      <div>
        <h2>📰 Newsletter</h2>
        <p>Jeśli chcesz pogadać i/lub od czasu do czasu dostać ode mnie wiadomość z nowym artykułem i aktualnymi przemyśleniami, to zostaw swój e-mail.</p>
      </div>
      <MailerLiteForm />
    </div>
  )
}

export default Subscribe
