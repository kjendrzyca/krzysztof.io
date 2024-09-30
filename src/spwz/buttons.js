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
  >
    Dołączam do programu
  </button>
)
