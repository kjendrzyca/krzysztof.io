import { CenteredH2 } from "@/components/CenteredH2"
import ReactMarkdown from "react-markdown"
import { BenefitsGrid } from "./BenefitsGrid"

const text = `
Przez lata pracy w różnych zespołach zauważyłem, że najlepsi, najbardziej cenieni programiści - ci, którzy mieli realny wpływ, spokój i satysfakcję z pracy - działali według podobnego, powtarzalnego schematu.

To nie była kwestia talentu czy "pasji". To był **system** - zbiór konkretnych modeli myślowych, nawyków i narzędzi, które pozwalały im pracować mądrzej, a nie ciężej.

Zebrałem te wszystkie elementy, przetestowałem na sobie i setkach programistów, z którymi pracowałem, i ułożyłem w jeden, spójny program.

To esencja lat doświadczeń, przefiltrowana i zebrana w jednym miejscu. Wiedza, której nie znajdziesz w żadnej pojedynczej książce, bo jest wynikiem praktyki i skupienia się na tym, co faktycznie działa w prawdziwych zespołach IT – a nie tylko w teorii.

To nie jest kurs, który oglądasz i zapominasz. To kompletny system operacyjny, który zainstalujesz w swojej głowie, a który pozwoli Ci:
`

export const OpisProduktu = () => {
  return (
    <>
      <CenteredH2>
        Program szkoleniowy "Skuteczna praca w zespole"
      </CenteredH2>

      <ReactMarkdown>
        {text}
      </ReactMarkdown>

      <BenefitsGrid />
    </>
  )
}
