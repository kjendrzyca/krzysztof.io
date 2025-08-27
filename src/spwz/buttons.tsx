type ToggleButtonProps = {
  togglePopup: () => void
}

export const SubscribeSPWZToggleButton = ({ togglePopup }: ToggleButtonProps) => (
  <button
    type="button"
    className="primary-button"
    style={{ maxWidth: '232px', textTransform: 'uppercase' }}
    onClick={togglePopup}
    data-umami-event="spwz-subscribe-button-clicked"
  >
    Dołączam do mailingu
  </button>
)

export const ListaOczekujacychButton = () => (
  <button
    type="button"
    className="primary-button"
    style={{ maxWidth: '232px', textTransform: 'uppercase' }}
    onClick={() => (window.location.href = '/spwz#co-i-kiedy')}
    data-umami-event="spwz-waiting-list-button-clicked"
  >
    Dołączam do mailingu
  </button>
)

type ScrollButtonProps = {
  scrollToSection: () => void
}

export const SPWZScrollButton = ({ scrollToSection: scrollToJoin }: ScrollButtonProps) => (
  <button
    type="button"
    className="primary-button"
    style={{ maxWidth: '232px', textTransform: 'uppercase' }}
    onClick={scrollToJoin}
  >
    Dołączam
  </button>
)

export const BuySPWZButton = () => (
  <button
    type="button"
    className="primary-button"
    style={{ maxWidth: '232px', textTransform: 'uppercase' }}
    onClick={() => {
      window.location.href = 'https://edu.krzysztof.io/spwz-kup/'
    }}
    data-umami-event="spwz-buy-button-clicked"
  >
    Dołączam do programu
  </button>
)
