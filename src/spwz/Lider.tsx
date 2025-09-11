import { CenteredH2 } from '@/components/CenteredH2'
import { MarkdownWithHighlights } from '@/components/MarkdownWithHighlights'

const text = `
**👉 "Czy ten program jest dla mnie, jeśli ===nie chcę=== zostać liderem?"**

Świetne pytanie i ważna obawa, która dotyczy wielu osób.

Krótka odpowiedź: **tak**.

Ten program nie jest o tym, jak zostać liderem. Jest o tym, jak rozwiązać problemy i poradzić sobie z wyzwaniami, które kopią nas w tyłek, dopóki czegoś z nimi nie zrobimy.

Umiejętne planowanie i realizacja zadań to nie jest "bycie liderem" - jest to praca w spokoju i dowożenie wysokiej jakości rozwiązań, z których jesteśmy dumni.

Konstruktywna komunikacja to nie jest "bycie liderem" - jest to rozwiązywanie sporów technicznych w taki sposób, że wszyscy są zadowoleni i żeby nie było dram.

Umiejętność pracy w zespole to nie jest "bycie liderem" - jest to sposób na unikanie 90% niepotrzebnych problemów w zespole.

Mylenie tych umiejętności, z "byciem liderem" to **jeden z największych błędów w naszej branży**.

Dlaczego?

Bo na pewnym etapie rozwoju, największe problemy, które nas spowalniają, **nie są techniczne** i mierzy się z nimi każdy, niezależnie od stanowiska.

Są to np.:

- Spory, które ciągną się w nieskończoność i niczego nie wnoszą.
- Niejasne wymagania, przez które musimy przepisywać kod.
- Poczucie, że nasze zdanie jest ignorowane, mimo że jest najbardziej logicznym wyborem.
- Brak sensownego feedbacku.
- Niejasna ścieżka rozwoju.
- Nieefektywne, nudne spotkania, które marnują nasz czas.
- itd.

Liderzy są często przeciążeni lub brakuje im kompetencji, żeby usunąć te problemy z naszej drogi. Pomagając je rozwiązać, budujemy autorytet w zespole i zdobywamy wdzięczność lidera.

W programie pokazuję system, który pomaga radzić sobie z całą tą otoczką wokół kodu i nikt tu nie będzie Cię namawiał do zarządzania ludźmi.

To, czy kiedyś wykorzystasz nabyte kompetencje, by zostać liderem, to **zupełnie inna historia i Twoja osobista decyzja**.

W takim razie:

**👉 "Czy ten program jest dla mnie, jeśli ===chcę=== zostać liderem?"**

Krótka odpowiedź: **zdecydowanie tak**. Mamy w programie tech leadów, scrum masterów, team leaderów i engineering managerów. Każdy znalazł coś dla siebie.

Osoby, które stosują ten system, **zostają liderem "przy okazji"**.

Sam pełniłem funkcję lidera technicznego i wykorzystywałem wszystkie umiejętności, które tutaj opisuję. Różnica polega na tym, że w tej roli kładziemy większy nacisk na rzeczy miękkie i na wspieranie innych.

Co najbardziej przyda się liderom?

1) Moduły o **dysfunkcjach w zespole**, **konstruktywnej komunikacji**, **feedbacku** czy **propagowaniu wiedzy** (moduły 8, 10, 11, 13), to narzędzia, które pozwalają krok po kroku zwiększać dojrzałość ludzi w naszym zespole. Zamiast samemu gasić pożary, dajemy im narzędzia, które uczą samodzielności.

2) **Prawdziwe przywództwo nie wynika z nazwy stanowiska, tylko z autorytetu**. Budujemy go, między innymi ogarniając trudniejsze aspekty pracy z klientem. Do tego przydadzą się moduły o tym, jak  **pracować z klientem i biznesem** (moduły 17, 18, bonusowy).

3) Kluczowymi umiejętnościami lidera jest też **prowadzenie efektywnych spotkań** i **rozsądnie podejście do estymacji** (moduły 14, 15). Do spotkań dostaniesz szablon, a do estymacji podejście, które eliminuje "wróżenie z fusów".

W skrócie: ten program to **esencja wiedzy, która pozwala naturalnie wejść w rolę lidera, jeśli tego chcesz**. Nie poprzez "zarządzanie ludźmi", ale poprzez bycie osobą, która podnosi jakość, rozwiązuje problemy i sprawia, że cały zespół zaczyna lepiej pracować.

Przykład:

Mam znajomą, która zna i stosuje to, co opisuję w programie. Dostała kiedyś awans na lidera technicznego. Popracowała tak przez jakiś czas, a potem najzwyczajniej zrezygnowała, bo uznała, że to nie dla niej. Tak po prostu.

Wejście w tę rolę było możliwe, bo dobrze ogarniała, miała wystarczające umiejętności i autorytet. Te same rzeczy pozwoliły jej potem bez problemu wyjść z tej roli, bo ludzie mają do niej zaufanie i wiedzą, że nadal będzie robić tak samo dobrą robotę, niezależnie od stanowiska.

Więc tak naprawdę **wybór należy do Ciebie**.
`

export const Lider = () => {
  return (
    <>
      <CenteredH2 id="nie-chce-byc-liderem">A co jeśli (nie) chcę zostać liderem?</CenteredH2>
      <MarkdownWithHighlights>{text}</MarkdownWithHighlights>
    </>
  )
}
