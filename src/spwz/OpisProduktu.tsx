import { CenteredH2 } from '@/components/CenteredH2'
import { BenefitsGrid } from './BenefitsGrid'
import { Highlight } from '@/components/Highlight'
import { MarkdownWithHighlights } from '@/components/MarkdownWithHighlights'

const text = `
Przez lata pracy w różnych zespołach zauważyłem, że najlepsi, najbardziej cenieni programiści, czyli ci, którzy mieli realny wpływ, spokój i satysfakcję z pracy, działali według podobnego, powtarzalnego schematu.

To nie była kwestia talentu czy "pasji". To był ===**system**===. Zbiór konkretnych modeli myślowych, nawyków i narzędzi, które pozwalały im pracować mądrzej, a nie ciężej.

Nauczyłem się np. że:

👉 Gdy pojawia się chaos w projekcie i niejasne wymagania, naturalnym odruchem jest rzucenie się w kod z nadzieją, że "jakoś to będzie". Okazuje się jednak, że poświęcenie chwili na ===rozpisanie zadania i zadanie kilku pytań na starcie to największy skrót do celu===. To właśnie ten prosty zabieg eliminuje jakieś 90% stresu na Code Review i pozwala dowieźć właściwe rozwiązanie za pierwszym razem.

👉 Gdy pojawiają się spory techniczne, to naturalnym odruchem jest walka na argumenty. Okazuje się jednak, że wygrywają nie ci najgłośniejsi, ale ci, którzy ===rozumieją prawdziwe potrzeby drugiej strony===. Zamiast forsować swój pomysł, przedstawiają go jako rozwiązanie tych potrzeb, co zamienia całą dyskusję z walki w poszukiwanie wspólnego celu.

👉 Gdy utkniemy w zadaniu, łatwo jest próbować rozwiązać problem w pojedynkę, żeby nie zawracać innym głowy. Paradoksalnie, to właśnie ===regularne informowanie o postępach i trudnościach=== buduje reputację osoby, która panuje nad sytuacją. Ten prosty zabieg sprawia, że inni naturalnie oferują wsparcie, a problem jest rozwiązywany szybciej.

To tylko mały wycinek pełnego systemu. Zebrałem wszystkie jego elementy, przetestowałem na sobie i programistach, z którymi pracowałem, i ułożyłem w **jeden, spójny program**.

To **esencja lat doświadczeń, przefiltrowana i zebrana w jednym miejscu**. Wiedza, której nie znajdziesz w żadnej pojedynczej książce, bo jest wynikiem praktyki i skupienia się na tym, co faktycznie działa w prawdziwych zespołach IT, a nie tylko w teorii.

To nie jest kurs, który oglądasz i zapominasz. To **kompletny system operacyjny**, który zainstalujesz w swojej głowie, a który pozwoli Ci:
`

export const OpisProduktu = () => {
  return (
    <>
      <CenteredH2>
        Moje rozwiązanie:
        <br />
        <Highlight>Program &quot;Skuteczna praca w zespole&quot;</Highlight>
      </CenteredH2>

      <MarkdownWithHighlights>{text}</MarkdownWithHighlights>

      <BenefitsGrid />
    </>
  )
}
