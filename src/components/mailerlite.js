import React from 'react'

const WrapperId = '3904681'
const FormId = 'f6w6r0'
const TrackingImageId = 'v1618160292'

export const MailerLiteSuccessFunctionScript = `
  function ml_webform_success_${WrapperId}() {
    document.getElementsByClassName('row-success')[0].style.display = 'block';
    document.getElementsByClassName('row-form')[0].style.display = 'none';
  }
`

export const MailerLiteScriptSrc = `https://static.mailerlite.com/js/w/webforms.min.js?v0c75f831c56857441820dcec3163967c`

export const TrackingImage = () => (
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

                  <div className="ml-form-fieldRow ml-form-embedSubmit">
                    <button type="submit" className="primary">Zapisz się</button>
                    <button disabled="disabled" style={{display: 'none'}} type="button" className="loading">
                      <div className="ml-form-embedSubmitLoad"></div> <span className="sr-only">Loading...</span>
                    </button>
                  </div>
                </div>

                <input type="hidden" name="ml-submit" value="1" />
              </form>
            </div>

            <div className="ml-form-successBody row-success" style={{display: 'none'}}>
              <div className="ml-form-successContent">
                <h4>Poszło 👍</h4>
                <p>Dostaniesz za chwilę email, w którym musisz potwierdzić zapisanie się do newslettera. Tylko wtedy będziesz dostawać kolejne wiadomości.</p>
                <p>Polecam dodać adres <strong>krzysztof@krzysztof.io</strong> do swojej listy kontaktów, żeby upewnić się, że wiadomości zawsze będą docierać.</p>
                <p>Do zobaczenia!</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <TrackingImage />
    </>
  )
}
