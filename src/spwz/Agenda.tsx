import { CenteredH2 } from '@/components/CenteredH2'
import { MarkdownWithHighlights } from '@/components/MarkdownWithHighlights'

const text = `
Program jest podzielony na logiczne części, które krok po kroku przeprowadzą Cię przez cały system.

### ===CZĘŚĆ I: FUNDAMENTY I MINDSET===

**👉 Moduł 1: Wstęp + model działania**

Pokażę Ci, dlaczego warto myśleć o swojej pracy jak o biznesie i jak budować "kapitał zawodowy", który wymienisz na to, czego chcesz - większy wpływ, spokój czy lepszą kasę. Zrozumiesz, dlaczego "pogoń za pasją" to często pułapka.

✅ Rezultat: Zyskujesz sprawdzony model myślenia o rozwoju, który daje Ci jasny kierunek i chroni przed frustracją.

**👉 Moduł 2: Ustawienie mindsetu**

Dowiesz się, jak skrócić pętlę feedbackową, żeby uczyć się szybciej i dlaczego postawa "zawsze mogę coś zrobić" jest Twoją tajną bronią.

✅ Rezultat: Przestajesz czekać, aż ktoś Cię zauważy. Zaczynasz przejmować kontrolę nad swoją pracą, co jest pierwszym krokiem do zmiany sposobu, w jaki postrzegają Cię inni.

### ===CZĘŚĆ II: PRACA Z ZADANIAMI===

**👉 Moduł 3: Proces planowania i realizacji zadań**

Przedstawię Ci mój sprawdzony proces dowożenia zadań. Od planowania, przez zadawanie pytań, po testowanie i raportowanie.

✅ Rezultat: Masz system, który eliminuje chaos i stres. Zaczynasz dowozić rozwiązania pewnie i przewidywalnie, budując reputację osoby, na której można polegać.

**👉 Moduł 4: Taktyki pracy z zadaniami**

Poznasz konkretne taktyki, które ułatwiają pracę: jak podejść do trudnych i nudnych zadań, jak nie tworzyć długu technicznego i jak wyrobić sobie "Spidey-Sense", który podpowiada dobre rozwiązania.

✅ Rezultat: Masz w ręku zestaw narzędzi na codzienne wyzwania. Zaczynasz podejmować lepsze decyzje techniczne w bardziej intuicyjny sposób.

**👉 Moduł 5: Zbieranie feedbacku do zadania (Code Review i nie tylko)**

Nauczysz się, jak podchodzić do Code Review bez ego, jak dawać i przyjmować feedback, żeby podnosić jakość i nie psuć relacji w zespole.

✅ Rezultat: Code Review przestaje być przykrym obowiązkiem, a staje się narzędziem do podnoszenia jakości kodu i budowania silnych relacji w zespole. A przy okazji przyspieszasz swój rozwój.

### ===CZĘŚĆ III: PRACA W ZESPOLE===

**👉 Moduł 6: Wstęp do pracy w zespole**

Zrozumiesz, dlaczego programowanie to gra zespołowa i jak myślenie w kategoriach "my", a nie "ja", staje się Twoją największą przewagą.

✅ Rezultat: Zmieniasz perspektywę z osoby, która skupia się tylko na swoim kawałku kodu, na świadomego gracza zespołowego. To fundamentalna zmiana, która może stać się Twoją kartą przetargową na kolejnych rozmowach okresowych.

**👉 Moduł 7: Jak szybko zacząć grać zespołowo**

Konkretne rady na start: jak szybko zrozumieć kontekst biznesowy, poznać drogę kodu na produkcję i jak małym wysiłkiem zbudować zaufanie od pierwszych dni w projekcie.

✅ Rezultat: Dostajesz plan działania, który pozwala Ci błyskawicznie wdrożyć się w każdy nowy projekt i od początku budować zaufanie jako osoba, która "ogarnia" nie tylko kod, ale i cały kontekst.

**👉 Moduł 8: Dysfunkcje w pracy zespołowej**

Poznasz 5 dysfunkcji, które niszczą każdy zespół od środka, i zrozumiesz, dlaczego niektóre zespoły osiągają świetne wyniki, a inne grzęzną w chaosie.

✅ Rezultat: Zyskujesz zdolność diagnozowania, dlaczego w zespole "coś nie działa". Przestajesz być ofiarą chaosu i zaczynasz rozumieć, jak inicjować zmiany, które poprawiają atmosferę i efektywność.

**👉 Moduł 9: Jak skutecznie pracować z innymi**

Dowiesz się, jak zrozumieć swoje mocne strony oraz mocne strony innych, jak współpracować z ludźmi o innych rolach (lider, BA, QA) i dlaczego pomaganie innym może być najlepszą inwestycją w siebie.

✅ Rezultat: Rozumiesz perspektywę innych, co zwiększa szansę, że Twoje pomysły zostaną przyjęte, a praca pójdzie znacznie płynniej.

**👉 Moduł 10: Komunikacja w pracy zespołowej**

Pokażę Ci model konstruktywnej komunikacji (NVC), który opiera się na faktach i potrzebach, a nie na emocjach. Dzięki niemu zaczniesz skutecznie rozwiązywać konflikty i przekonywać do swoich racji.

✅ Rezultat: Opanowujesz narzędzia komunikacyjne, dzięki którym Twoje słowa zaczynają mieć siłę. Potrafisz przekonywać do swoich racji, rozwiązywać konflikty i unikać nieporozumień.

**👉 Moduł 11: Zbieranie i udzielanie feedbacku**

Nauczysz się, jak prosić o bezlitosny feedback, żeby faktycznie się czegoś dowiedzieć, i jak go udzielać, żeby ludzie chcieli Cię słuchać.

✅ Rezultat: Zmieniasz feedback z bezużytecznej oceny w najszybszą ścieżkę rozwoju. Uczysz się prosić o informacje zwrotne tak, by faktycznie wiedzieć, co poprawić, i udzielać ich w sposób, który buduje, a nie niszczy relacje.

**👉 Moduł 12: Praca zdalna i asynchroniczna**

Pokażę Ci, jak ważne jest dokumentowanie, proaktywność i świadome zarządzanie komunikatorami. Poznasz zasady, które pozwalają unikać nieporozumień i budować zaufanie, nawet gdy nie widzicie się w biurze.

✅ Rezultat: Zdobywasz system, który pozwala Ci być równie (a nawet bardziej) skutecznym i widocznym, jak w biurze. Unikasz pułapek pracy zdalnej i budujesz zaufanie, nawet gdy nikt nie patrzy Ci przez ramię.

**👉 Moduł 13: Dokumentacja i propagowanie wiedzy**

Dowiesz się, jak tworzyć dokumentację, która faktycznie pomaga (podejście "just enough documentation") i dlaczego kod to nie wszystko.

✅ Rezultat: Uczysz się tworzyć i dzielić się wiedzą w sposób, który pomaga innym, a Ciebie pozycjonuje jako osobę podnoszącą kompetencje całego zespołu. Twoja praca zaczyna przynosić wartość na długo po jej ukończeniu.

**👉 Moduł 14: Szybkie i wartościowe spotkania**

Pokażę Ci, jak prowadzić i uczestniczyć w spotkaniach (Daily, Retro, Planning), żeby nie były stratą czasu, tylko pchały projekt do przodu.

✅ Rezultat: Przestajesz tracić czas na bezproduktywnych spotkaniach. Zyskujesz narzędzia, by każde spotkanie - od daily po retro - miało jasny cel i kończyło się konkretnymi decyzjami. Odzyskujesz czas na faktyczną pracę.

**👉 Moduł 15: Estymacje bez wróżenia z fusów**

Pokażę Ci, jak podejść do estymacji, żeby miało to sens. Zrozumiesz, jakich metryk używać, żeby opierać się na faktach, a nie na zgadywaniu.

✅ Rezultat: Zastępujesz zgadywanie i stres związany z estymacjami podejściem opartym na monitorowaniu postępów. Zaczynasz dostarczać przewidywalne estymacje, co jest fundamentem do budowania zaufania biznesu i uwalnia Cię od presji nierealistycznych terminów.

### ===CZĘŚĆ IV: KONTEKST BIZNESOWY I TWÓJ ROZWÓJ===

**👉 Moduł 16: Zmiana projektu i offboarding**

Dowiesz się, jak profesjonalnie zmienić projekt lub odejść z firmy, dbając o płynne przekazanie obowiązków i zostawiając po sobie porządek.

✅ Rezultat: Wiesz, jak kończyć współpracę w sposób, który nie pali za sobą mostów, a wręcz buduje Twoją reputację i zostawia dobre wrażenie. Zwiększasz szanse, że drzwi do przyszłej współpracy pozostają otwarte.

**👉 Moduł 17: Praca z klientem**

Zrozumiesz, że w relacji z klientem to Ty jesteś od tego, żeby zadbać o dobrą współpracę. Dowiesz się, jak budować ją na zaufaniu, odkrywając prawdziwe potrzeby klienta.

✅ Rezultat: Zmieniasz swoją rolę z "randomowego programisty z Polski" na "zaufanego doradcę". Rozumiesz, że za zachowaniem nawet "trudnego" klienta stoją niezaspokojone potrzeby, a Twoim zadaniem jest je odkryć i zaadresować.

**👉 Moduł 18: Praca z klientem - taktyki komunikacji**

Konkretne taktyki komunikacyjne (m.in. taktyczna empatia), które pozwolą Ci radzić sobie w trudnych sytuacjach, prezentować swoje pomysły i unikać nieporozumień.

✅ Rezultat: Zdobywasz pewność siebie, by prowadzić nawet najtrudniejsze rozmowy z klientem bez niepotrzebnych spięć.

**👉 Moduł 19: Praca z pracodawcą**

Pokażę Ci, jak rozmawiać o podwyżce i awansie w oparciu o "rejestr osiągnięć" i dlaczego to zwykła rozmowa biznesowa, a nie walka.

✅ Rezultat: Zastępujesz nadzieję na podwyżkę lub awans konkretnym, opartym na dowodach systemem. Uczysz się rozmawiać o pieniądzach i rozwoju w sposób, który sprawia, że Twój przełożony staje się Twoim sojusznikiem.

**👉 Moduł 20: Pułapki odpowiedzialności**

Zrozumiesz, dlaczego sukces może prowadzić prosto do wypalenia (tzw. paradoks sukcesu) i jak świadomie nakreślić granice, żeby rozwijać się w zrównoważony sposób.

✅ Rezultat: Uczysz się rozpoznawać pułapki, w które sam wpadłem. Zaczynasz świadomie stawiać granice, co pozwala Ci czerpać satysfakcję z pracy przez lata, a nie tylko przez kilka sprintów.

**⭐ Bonus: Typy osobowości klienta**

Pokażę Ci prosty model, który pozwoli w kilka minut "zdiagnozować" klienta i zrozumieć, czy masz do czynienia z nastawionym na szybkie efekty wizjonerem, dbającym o relacje idealistą, potrzebującym danych analitykiem, czy konkretnym strategiem.

✅ Rezultat: Przestajesz działać na czuja. Zamiast zastanawiać się, dlaczego klient jest "trudny", dostajesz konkretną instrukcję obsługi do każdego z nich. Wiesz, jakich argumentów użyć, jakich unikać i jak budować zaufanie, dopasowując się do jego naturalnego stylu pracy.
`

export const Agenda = () => {
  return (
    <>
      <CenteredH2>📋 Agenda:</CenteredH2>

      <MarkdownWithHighlights highlightSmallerpadding>{text}</MarkdownWithHighlights>
    </>
  )
}
