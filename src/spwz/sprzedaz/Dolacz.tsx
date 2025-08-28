import { forwardRef } from 'react'
import ReactMarkdown from 'react-markdown'
import { CenteredH2 } from '@/components/CenteredH2'
import { Countdown } from '@/components/Countdown'

export const Dolacz = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref}>
      <CenteredH2>
        Dołącz teraz za{' '}
        <span style={{ color: 'var(--color-success)', fontWeight: 'bold' }}>769 zł</span>
      </CenteredH2>

      <ReactMarkdown>
        {`**Dostajesz**:

**✅ 231 materiałów wideo, czyli około 10 tygodni pracy (19 godzin i 10 minut)** - dostajesz dostęp do wszystkich materiałów od razu. Zachęcam jednak do przerabiania ich po kolei i wdrażania w praktyce, bo jest tego naprawdę sporo.

**✅ 10 grupowych spotkań live** - co tydzień będziemy mieli okazję porozmawiać na spotkaniu live, przedyskutować materiały z poprzednich tygodni, lepiej się poznać, rozwiązać konkretne problemy w Twoim zespole i odpowiedzieć na pytania.

**✅ Listę sugestii, które możesz zaaplikować u siebie.**

**✅ Dożywotni dostęp do wszystkich materiałów.**

**✅ Dostęp do wszystkich aktualizacji.**

**✅ Zamknięta grupa uczestników programu na serwerze Discord** - możesz zadawać pytania, wymieniać się doświadczeniami, podzielić się swoją wiedzą.

**✅ Gwarancja satysfakcji** - jeśli z jakiegoś powodu program Ci nie podejdzie, to wystarczy, że do mnie napiszesz i **zwrócę Ci 100% wpłaconej kwoty**. Masz na to **30 dni** i nie musisz się w żaden sposób tłumaczyć.

👉 Za tę cenę dostajesz wiedzę wyniesioną z wielu różnych projektów, firm, konferencji, książek, rozmów, porażek oraz zdobytą przez długą obserwację doświadczonych programistów. To wszystko dodatkowo przefiltrowane przez 10 lat doświadczeń, testów i eksperymentowania.

👉 Na chwilę obecną, nie znalazłem lepszej opcji i **jest to jedyny taki program na rynku**.

👉 **Program w tej cenie dostępny jest tylko przez kilka dni**. Potem zamykam sprzedaż, zajmuję się obsługą i ruszamy z pracą.`}
      </ReactMarkdown>

      <CenteredH2>
        <span style={{ borderBottom: '2px dashed var(--color-primary)', lineHeight: '2.5rem' }}>
          Koniec sprzedaży: wtorek, 8 października 2024 o 20:00
        </span>
      </CenteredH2>

      <p style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold' }}>
        <Countdown date={new Date('2024-10-08T20:00:00+02:00')} />
      </p>
    </div>
  )
})

Dolacz.displayName = 'Dolacz'
