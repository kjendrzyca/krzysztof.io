export const SubscribeSPWZToggleButton = ({ togglePopup }) => (
  <button
    type="button"
    className="primary-button"
    style={{maxWidth: '232px', textTransform: 'uppercase'}}
    onClick={togglePopup}
    data-umami-event="spwz-subscribe-button-clicked"
  >
    Dołącz do mailingu
  </button>
)

export const SPWZScrollButton = ({ scrollToSection: scrollToJoin }) => (
  <button
    type="button"
    className="primary-button"
    style={{maxWidth: '232px', textTransform: 'uppercase'}}
    onClick={scrollToJoin}
  >
    Dołącz
  </button>
)

export const BuySPWZButton = () => (
  <button
    type="button"
    className="primary-button"
    style={{maxWidth: '232px', textTransform: 'uppercase'}}
    onClick={() => {
      window.location.href = 'https://edu.krzysztof.io/spwz-kup/'
    }}
    data-umami-event="spwz-buy-button-clicked"
  >
    Dołączam do programu
  </button>
)
