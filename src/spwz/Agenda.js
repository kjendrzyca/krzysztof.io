import { CenteredH2 } from "@/components/CenteredH2"
import ReactMarkdown from "react-markdown"

const agendaMd = `
### Wstęp

👉 Jak traktować swoją karierę jak biznes.

👉 Model budowania kapitału zawodowego – bez mitów o „pasji”.

👉 Budowanie reputacji i dlaczego umiejętności miękkie są kluczowe.

### Ustawienie mindsetu

👉 Jak zdobywać informacje potrzebne do wejścia na wyższy poziom.

👉 Dlaczego nigdy nie nazywałem się "juniorem" i dlaczego nie warto.

👉 Jak mieć wpływ na swoją pracę i wykorzystać to na swoją korzyść.

### Praca z zadaniami

👉 Sprawdzony proces planowania i realizacji zadań.

👉 Jak zadawać pytania, raportować postępy i radzić sobie z opóźnieniami.

👉 Jak pracować, żeby nikt nie miał Ci nic do zarzucenia (jak nie robić bagna w kodzie).

👉 Radzenie sobie z trudnymi zadaniami, z blokadą i intuicja w kodowaniu.

👉 Code Review – jak robić to dobrze.

👉 Najważniejsze elementy pracy z Jira, Linear i innymi narzędziami.

👉 Dlaczego oraz kiedy stosować TDD. Gdzie i jak najszybciej się go nauczyć.

### Praca w zespole (największy i najważniejszy moduł)

👉 Dlaczego programowanie to zawsze praca zespołowa.

👉 Jak szybko wykazać się w projekcie i ogarnąć onboarding.

👉 Dlaczego niektóre zespoły działają jak grupa komandosów, a inne, jak grupa gęsi.

👉 Komunikacja – jak mówić jasno i konkretnie.

👉 Jak dogadać się z ludźmi w sytuacjach konfliktowych lub gdy ktoś jest wrogo nastawiony.

👉 Jak mówić „tak” i „nie” w odpowiednich momentach.

👉 Jak prosić o pomoc i komunikować swoje potrzeby.

👉 Jak radzić sobie z presją i nadgodzinami.

👉 Jak wyglądają spotkania, na których nikt nie zasypia, które szybko się kończą, a jednocześnie przynoszą rezultaty.

👉 Co zrobić, gdy planowania są nudne, a retra to spotkania-wydmuszki, po których nic się nie zmienia.

👉 Jak, gdzie, kiedy i kogo informować o problemach w zespole, które wymagają eskalacji?

👉 Jak zbierać i dawać feedback.

👉 Jak propagować wiedzę w zespole.

👉 Jak skutecznie estymować pracę.

👉 Jak dobrze poustawiać pracę zdalną i asynchroniczną.

👉 Offboarding – jak wychodzić z projektu, zostawiając dobre wrażenie.

### Praca z klientem

👉 Jak klient postrzega Twoją rolę i czego naprawdę oczekuje.

👉 Jak prezentować się przed klientem jako ktoś, kogo warto zapamiętać.

👉 Jak przekonać klienta do większej ilości testów, do refactoringu lub innego z Twoich pomysłów.

👉 Jak przygotować się do demo i spotkań.

👉 Jak wyciągać od klienta potrzebne informacje.

### Praca z pracodawcą

👉 Jak budować dobrą relację, która działa dla obu stron.

👉 Niezawodne podejście do rozmów o podwyżce i awansie.

👉 Jak inwestować w siebie i budować reputację niezależną od firmy.

### Pułapki odpowiedzialności

👉 Gdzie kończy się dobra robota, a zaczyna wykorzystywanie.

👉 Dlaczego nie zawsze warto awansować za wszelką cenę.

👉 Jak nie wpaść w pułapkę „zbyt dużej odpowiedzialności” i się nie wypalić.

### ⭐ Bonus - typy osobowości klienta

👉 Jak dostosować się do różnych typów osobowości klienta.
`
export const Agenda = () => {
  return (
    <>
      <CenteredH2>
        Agenda 📋
      </CenteredH2>

      <ReactMarkdown className="small-spacing">
        {agendaMd}
      </ReactMarkdown>
    </>
  )
}
