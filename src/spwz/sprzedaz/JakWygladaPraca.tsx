import { CenteredH2 } from '@/components/CenteredH2'
import { MarkdownWithHighlights } from '@/components/MarkdownWithHighlights'

const text = `
**🤝 Krok 1: Otrzymujesz dostęp i zaczynasz od razu**

Po dołączeniu natychmiast otrzymujesz dostęp do wszystkich modułów, bonusów i grupy na Discordzie. Możesz zacząć naukę w dowolnym momencie, 24/7.

**👨‍💻 Krok 2: Instalujesz nowy "system operacyjny" do pracy**

Zaczynasz przerabiać materiały i wdrażać nowy sposób działania. Moduł po module, poznajesz konkretne modele myślowe i taktyki - od tego, jak planujesz zadania, przez to, jak komunikujesz się w zespole, aż po to, jak podchodzisz do rozmów o pieniądzach.

Każda kolejny materiał to kolejny element Twojego systemu, który od razu testujesz w praktyce dzięki sugestiom załączonym pod każdym modułem.

**💬 Krok 3: Ciągłe wsparcie, gdy go potrzebujesz**

Masz szybkie pytanie lub chcesz przegadać jakąś myśl? Wrzucasz je na Discorda.

Utknąłeś/utknęłaś z czymś grubszym lub bardzo specyficznym w Twoim zespole i trzeba to przegadać? Omawiamy to na cyklicznych spotkaniach Q&A na żywo.

**🏛️ Krok 4: Efekt - stajesz się filarem zespołu**

Krok po kroku wdrażasz kompletny system, który daje Ci kontrolę, spokój i pewność siebie. Zaczynasz być postrzegany/postrzegana jako ekspert i dojrzały członek zespołu - osoba, która wie, jak "ogarnąć" każdy, nawet najtrudniejszy temat.
`

export const JakWygladaPraca = () => {
  return (
    <>
      <CenteredH2>Jak wygląda praca w programie krok po kroku</CenteredH2>

      <MarkdownWithHighlights>{text}</MarkdownWithHighlights>
    </>
  )
}
