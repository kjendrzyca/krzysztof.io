import React from 'react'
import { MailerLiteFormConfig } from './mailerLiteFormConfig'
import Link from 'next/link'

export const MailerLiteSuccessFunctionScriptSPWZ = `
  function ml_webform_success_${MailerLiteFormConfig.SPWZ.WrapperId}() {
    document.getElementsByClassName('row-success')[0].style.display = 'block';
    document.getElementsByClassName('row-form')[0].style.display = 'none';
    document.getElementsByClassName('newsletter-info')[0].style.display = 'none';
    document.getElementsByClassName('newsletter-info')[1].style.display = 'none';
  }
`

// export const MailerLiteScriptSrc = `https://static.mailerlite.com/js/w/webforms.min.js?v4a60e9ef938a7fa0240ac9ba567062cb`

export const TrackingImageSPWZ = () => {
  const {WrapperId, FormId, TrackingImageId} = MailerLiteFormConfig.SPWZ

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://track.mailerlite.com/webforms/o/${WrapperId}/${FormId}?${TrackingImageId}`}
      width="1"
      height="1"
      style={{
        maxWidth: '1px',
        maxHeight: '1px',
        visibility: 'hidden',
        padding: 0,
        margin: 0,
        display: 'block',
      }}
      alt="."
      border="0"
    />
  )
}

// eslint-disable-next-line arrow-body-style
export const MailerLiteForm = () => {
  const {WrapperId, FormId} = MailerLiteFormConfig.SPWZ

  return (
    <>
      <div id={`mlb2-${WrapperId}`} className={`ml-form-embedContainer ml-subscribe-form ml-subscribe-form-${WrapperId}`}>
        <div className="ml-form-align-center">
          <div className="ml-form-embedWrapper embedForm">

            <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
              <div className="ml-form-embedContent" style={{ marginBottom: 0 }} />
              <form
                className="ml-block-form"
                action={`https://static.mailerlite.com/webforms/submit/${FormId}`}
                data-code={FormId}
                method="post"
                target="_blank"
              >
                <div className="ml-form-formContent">
                  <div className="ml-form-fieldRow ml-last-item" style={{ marginBottom: '10px' }}>
                    <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                      <input
                        aria-label="email"
                        aria-required="true"
                        type="email"
                        className="form-control"
                        data-inputmask=""
                        name="fields[email]"
                        placeholder="Email"
                        autoComplete="email"
                      />
                    </div>
                  </div>
                  <input type="hidden" name="ml-submit" value="1" />
                  <div className="ml-form-fieldRow ml-form-embedSubmit">
                    <button type="submit" className="primary primary-button">Dołącz</button>
                    <button disabled="disabled" style={{ display: 'none' }} type="button" className="loading primary-button">
                      <div className="ml-form-embedSubmitLoad" /> <span className="sr-only">Loading...</span>
                    </button>
                  </div>
                </div>

              </form>
            </div>

          </div>
        </div>
      </div>
      <TrackingImageSPWZ />
    </>
  )
}

export const SubscribeSPWZToggleButton = ({ togglePopup }) => (
  <button
    type="button"
    className="primary-button"
    style={{maxWidth: '232px', textTransform: 'uppercase'}}
    onClick={togglePopup}
  >
    Dołącz do mailingu
  </button>
)
export const SubscribeSPWZScrollButton = ({ scrollToSection: scrollToJoin }) => (
  <button
    type="button"
    className="primary-button"
    style={{maxWidth: '232px', textTransform: 'uppercase'}}
    onClick={scrollToJoin}
  >
    Dołącz
  </button>
)

export const SubscribeSPWZ = ({ showPopup, togglePopup }) => {
  return (
    <>
      <div
        className="popup-wrapper"
        style={{
          position: 'fixed',
          top: -90,
          left: 0,
          bottom: 0,
          right: 0,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 999,

          display: showPopup ? 'flex' : 'none',
        }}
      >
        <div style={{border: '1px solid var(--color-accent)', backgroundColor: 'var(--color-background)', maxWidth: '720px'}}>
          <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <button
              type="button"
              style={{
                border: 0,
                background: 'transparent',
                cursor: 'pointer',
                fontWeight: 'bold',
                color: '#ccc',
                padding: '10px',
              }}
              onClick={togglePopup}
            >
              ×
            </button>
          </div>

          <div style={{padding: '0 1.275rem'}}>
            <h2 className="newsletter-info" style={{marginTop: 0}}>
              Podaj email, na który wysłać Ci materiały
            </h2>

            <div className="newsletter-info" style={{marginTop: '1.55rem'}}>
              <MailerLiteForm />
              <p style={{marginTop: '1.55rem', textAlign: 'center'}}>
                <small>Informacje związane z przetwarzaniem Twoich danych znajdziesz w <Link href="/polityka-prywatnosci/">polityce prywatności</Link>.</small>
              </p>
            </div>

            <div className="ml-form-successBody row-success" style={{ display: 'none' }}>
              <div className="ml-form-successContent" style={{textAlign: 'center'}}>
                <h2 style={{textAlign: 'center', marginTop: 0}}>Poszło 👍</h2>
                <p>
                  <strong>Ważne:</strong> Dostaniesz za chwilę maila, w którym musisz potwierdzić swój adres.{` `}
                  Tylko wtedy będziesz dostawać kolejne wiadomości.
                </p>
                <p>Jeśli nie widzisz maila, to sprawdź folder Spam i Oferty.</p>
                <p>
                  Polecam dodać adres <strong>krzysztof@skutecznyprogramista.pl</strong>{` `}
                  do swojej listy kontaktów, żeby upewnić się, że wiadomości zawsze będą docierać.
                </p>
                <p>Do zobaczenia 👋</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )

}
