import { CenteredH2 } from '@/components/CenteredH2'
import { MarkdownWithHighlights } from '@/components/MarkdownWithHighlights'
import NextImage from 'next/image'

const text = `
Pracuję w IT od 2013 roku. Zaczynałem w software housie, w wieloletnim legacy, a z czasem trafiłem do startupów.

Byłem programistą, liderem technicznym, architektem i doradcą. Ta droga pokazała mi, że **same umiejętności techniczne nie wystarczą.**

Widziałem projekty, które były ogarnięte technicznie, ale upadały przez złą komunikację.

Obserwowałem świetnych programistów, którzy wypalali się, bo utknęli w dysfunkcyjnych zespołach.

Sam byłem w miejscu, w którym czułem, że mimo wiedzy i zaangażowania, stoję w miejscu, a moja praca jest niedoceniana.

Teraz wiem, że w żadnym projekcie nie jest dobrze. Ale zawsze mogę zrobić coś, żeby temu zaradzić.

**Dlaczego warto dać temu szansę?**

Bo ten program nie jest zbiorem teorii z książek.

To system, który powstał w oparciu o lata praktyki i setki rozmów.

- **Widziałem większość antypatternów.** Pracując w różnych rolach, miałem okazję zobaczyć, co psuje projekty od środka - zarówno w kodzie, jak i w zespołach. Wiem, jak sobie z tym radzić i jakich błędów unikać.
- **Od lat pomagam naprawiać to, co nie działa w zespole.** Praktycznie każdy zespół, w którym pracowałem, w pewnym momencie musiał uporać się z jakimiś dysfunkcjami. Zawsze staram się z tym pomóc, bo inaczej nie da się sensownie pracować. Wiem, co działa, a co jest tylko stratą czasu.
- **Wszystko weryfikuję w praktyce.** Wiedzą z tego programu dzielę się na konferencjach, warsztatach i w codziennej pracy. Każdy model i taktyka zostały przetestowane w boju i przepuszczone przez mój "bullshit detector" - sieć doświadczonych znajomych z branży: od programistów, przez managerów, po założycieli firm.

**Moje podejście:**

Stworzyłem ten program, bo mam dość powierzchownych rozwiązań, które nie mają przełożenia na rzeczywistość. Wierzę, że:

- **Programowanie to rzemiosło, a nie wyścig.** Skupiam się na jakości, świadomym rozwoju i dostarczaniu wartości biznesowej, a nie tylko na "klepaniu tasków".
- **Praktyka jest ważniejsza niż teoria.** Daję Ci konkretne, sprawdzone narzędzia i modele myślowe, a nie akademickie definicje.
- **Szczerość buduje zaufanie.** Mówię wprost o problemach i pułapkach, również tych, w które sam wpadłem.
- **Unikanie problemów to strategia tylko dla wytrwałych**, którzy nie boją się wypalenia i skakania po firmach, a rozwiązywanie problemów jest dla tych, którzy chcą naprawdę mieć spokój.

===Chcę Ci dać system, którego mi brakowało na początku mojej drogi.=== System, który pomoże Ci odzyskać kontrolę, zbudować silną pozycję w zespole i czerpać satysfakcję z pracy.

Jeśli to podejście z Tobą rezonuje, to jesteś we właściwym miejscu.
`

export const OMnie = () => {
  return (
    <>
      <CenteredH2>Kilka słów o mnie</CenteredH2>

      <p>
        <span
          className="image-wrapper"
          style={{ textAlign: 'center' }}
        >
          <NextImage
            src="/spwz/face2.jpg"
            width={320}
            height={400}
            alt="Krzysztof Jendrzyca"
          />
        </span>
      </p>

      <h3 style={{ textAlign: 'center', marginTop: 0 }}>Krzysztof Jendrzyca / @kjendrzyca</h3>

      <MarkdownWithHighlights highlightNopadding>{text}</MarkdownWithHighlights>
    </>
  )
}
