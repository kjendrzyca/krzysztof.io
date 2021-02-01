import React from 'react'

const WrapperId = '3107702'
const FormId = 'f0v8u0'

export const MailerLiteSuccessFunctionScript = `
  function ml_webform_success_${WrapperId}() {
    document.getElementsByClassName('row-success')[0].style.display = 'block';
    document.getElementsByClassName('row-form')[0].style.display = 'none';
  }
`

export const MailerLiteScriptSrc = `https://static.mailerlite.com/js/w/webforms.min.js?v52c1aad546f96d894e3716ba78e7fa42`

export const TrackingImage = () => (
  <img
    src={`https://track.mailerlite.com/webforms/o/3107702/${FormId}?v1612195690`}
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

export const MailerLiteForm = () => {
  return (
    <>
      <div id={`mlb2-${WrapperId}`} className={`ml-form-embedContainer ml-subscribe-form ml-subscribe-form-${WrapperId}`}>
        <div className="ml-form-align-center">
          <div className="ml-form-embedWrapper embedForm">

            <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
              <div className="ml-form-embedContent" style={{marginBottom: 0}}></div>
              <form
                className="ml-block-form"
                action={`https://static.mailerlite.com/webforms/submit/${FormId}`}
                data-code={FormId}
                method="post"
                target="_blank"
              >
                <div className="ml-form-formContent">
                  <div className="ml-form-fieldRow">
                    <div className="ml-field-group ml-field-name ml-validate-required">
                      <input
                        aria-label="name"
                        aria-required="true"
                        type="text"
                        className="form-control"
                        data-inputmask=""
                        name="fields[name]"
                        placeholder="Imię"
                        autoComplete="name"
                      />
                    </div>
                  </div>
                  <div className="ml-form-fieldRow ml-last-item">
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
                </div>

                <input type="hidden" name="ml-submit" value="1" />

                <div className="ml-form-embedSubmit">
                  <button type="submit" className="primary">Zapisz się</button>
                  <button disabled="disabled" style={{display: 'none'}} type="button" className="loading">
                    <div className="ml-form-embedSubmitLoad"></div> <span className="sr-only">Loading...</span>
                  </button>
                </div>
              </form>
            </div>

            <div className="ml-form-successBody row-success" style={{display: 'none'}}>
              <div className="ml-form-successContent">
                <h4>Poszło 👍</h4>
                <p>Sprawdź swoją skrzynkę, żeby potwierdzić zapisanie się do newslettera.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <TrackingImage />
    </>
  )
}
