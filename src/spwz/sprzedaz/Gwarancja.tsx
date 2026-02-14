import { CenteredH2 } from '@/components/CenteredH2'
import { MarkdownWithHighlights } from '@/components/MarkdownWithHighlights'

const text = `
**Podchodzę do tego programu bardzo osobiście.** Zależy mi na tym, żeby ta wiedza naprawdę u Ciebie zadziałała.

Dlatego daję Ci podwójną gwarancję.

👉 ===Po pierwsze: 30-dniowa gwarancja satysfakcji.===

Masz 30 dni na zapoznanie się z całym programem bez żadnego ryzyka.

Jeśli w tym czasie uznasz, że to nie dla Ciebie, to zwrócę Ci 100% pieniędzy. Wystarczy jeden mail, nie musisz podawać powodu. Zero problemów.

👉 ===Po drugie: Gwarancja osobistego wsparcia.===

Jeśli po przejściu programu i próbie wdrożenia sugestii poczujesz, że utknąłeś/utknęłaś lub nie widzisz efektów, umówimy się na dodatkową, godzinną konsultację 1-na-1.

Wspólnie przeanalizujemy Twoją sytuację i znajdziemy rozwiązanie. Bez dodatkowych opłat.

Chcę mieć pewność, że wyciągniesz z tego programu jak najwięcej.
`

export const Gwarancja = () => {
  return (
    <>
      <CenteredH2>🤝 Gwarancja satysfakcji i osobistego wsparcia</CenteredH2>

      <MarkdownWithHighlights highlightSmallerpadding>{text}</MarkdownWithHighlights>
    </>
  )
}
