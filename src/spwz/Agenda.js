import { CenteredH2 } from "@/components/CenteredH2"
import ReactMarkdown from "react-markdown"

const agendaMd = `
### Wstęp

👉 Dlaczego warto traktować swoją karierę jako biznes.

👉 Jak działa model oparty o budowanie kapitału zawodowego i dlaczego pasja w pracy jest niepotrzebna, a czasem nawet szkodliwa.

👉 Jak budować reputację.

👉 Dlaczego umiejętności miękkie (które wcale nie są takie miękkie) odgrywają w tym kluczową rolę.

### Ustawienie mindsetu

👉 W jaki sposób szybciej zdobywać informacje potrzebne do wejścia na wyższy poziom.

👉 Dlaczego nigdy nie nazywałem się "juniorem" i polecam to samo innym.

👉 Masz wpływ praktycznie na każdy aspekt swojej pracy i jak wykorzystać to na swoją korzyść.

👉 Jak się rozwijać na własną rękę.

### Praca z zadaniami

👉 Sprawdzony w bojach proces planowania i realizacji zadań, którego używam od lat.

👉 Zadawanie pytań i zbieranie informacji o tym, co trzeba zrobić.

👉 Raportowanie, informowanie o problemach i radzenie sobie z opóźnieniami.

👉 Radzenie sobie z blokadą (writer's block).

👉 Zbieranie feedbacku do zadania.

👉 Dlaczego warto i jak wymasterować narzędzia, których używasz.

👉 Jak pracować, żeby nikt nie miał Ci nic do zarzucenia, jak radzić sobie z bagnem w kodzie i jak nie tworzyć nowego.

👉 Jak radzić sobie z trudnymi zadaniami oraz jak przekuć nudne zadania w coś pozytywnego.

👉 Jak wyrobić sobie intuicję, która będzie Ci automatycznie podpowiadać dobre i złe rozwiązania.

👉 Na czym tak naprawdę polega Code Review i jak robić to dobrze.

👉 Jak sobie radzić, gdy czujesz, że brakuje Ci doświadczenia.

👉 Dlaczego oraz kiedy stosować TDD. Gdzie i jak najszybciej się go nauczyć.

👉 Najważniejsze elementy pracy z narzędziami do zarządzania pracą zespołu (Jira, Linear itp.).

### Praca w zespole

**Serce tego programu**. Największy i najważniejszy moduł.

👉 Dlaczego programowanie to zawsze praca zespołowa.

👉 Kilka szybkich taktyk, żeby wykazać się w projekcie. Do zastosowania od zaraz.

👉 Jak wchodzić na grubo do projektu w trakcie trwania onboardingu.

👉 Ekstremalnie trafny model, który opisuje, dlaczego niektóre zespoły działają jak grupa komandosów, a inne, jak grupa nieporadnych gęsi.

👉 Co możesz dać od siebie, żeby stopniowo przesuwać swój zespół w stronę tego pierwszego.

👉 **Gruby moduł o komunikacji.**

👉 Jak przekazywać to, co chcesz powiedzieć w jasny, zrozumiały i klarowny sposób.

👉 Jak dogadać się z ludźmi, w różnych sytuacjach, również konfliktowych, gdy każdy ma odmienne zdanie lub jest wrogo nastawiony.

👉 Jak to robić, żeby dosadnie przekazać wszystko, co chcesz przekazać, a jednocześnie zminimalizować ryzyko, że kogoś urazisz.

👉 Jak i kiedy mówić "nie".

👉 Jak i kiedy mówić "tak".

👉 Jak prosić o pomoc i komunikować swoje potrzeby.

👉 Jak w tym wszystkim nie triggerować ludzi ;).

👉 Jak rozwiązywać konflikty i kłótnie oraz jak podejmować decyzje w zespole tak, żeby zminimalizować narzekanie i sabotowanie podjętych decyzji.

👉 Jak skutecznie pracować z innymi i jak być dobrym współpracownikiem dla analityków biznesowych, QA, liderów i wszystkich innych, z którymi wchodzisz na co dzień w relacje.

👉 Jak wyglądają spotkania, na których nikt nie zasypia, które szybko się kończą, a jednocześnie przynoszą rezultaty.

👉 Co zrobić, gdy planowania są nudne, a retra to spotkania-wydmuszki, po których nic się nie zmienia.

👉 Jak propagować wiedzę w zespole.

👉 Jak zbierać i dawać feedback.

👉 Jak radzić sobie z presją i nadgodzinami.

👉 Jak odnaleźć się w zespole, gdzie wszystkim wszystko wydaje się oczywiste, gdzie czujesz dużą różnicę poziomów i brakuje ludzi skorych do pomocy.

👉 Jak poradzić sobie z nieogarniętym seniorem, który nie robi swojej roboty, jak należy?

👉 Jak, gdzie, kiedy i kogo informować o problemach w zespole, które wymagają eskalacji?

👉 Czy da się sensownie estymować. Jak to robić.

👉 Jak dobrze poustawiać sobie pracę zdalną i asynchroniczną.

👉 Offboarding - jak wyjść z projektu nie paląc za sobą mostów i zostawiając dobre wrażenie.

### Praca z klientem

👉 Punkt widzenia klienta, kim on jest w zależności od tego, w jakiego rodzaju firmie pracujesz.

👉 Co tak naprawdę myśli klient, czego potrzebuje i jaka jest w tym rola zespołu deweloperskiego.

👉 Jak dobrze zaprezentować się przed klientem i być kimś więcej niż losowym programistą z Polski, którego imienia nawet nie pamięta.

👉 Jak przekonać klienta do większej ilości testów, do refactoringu lub innego z Twoich pomysłów.

👉 Co należy zrobić, gdy pomysły klienta wydają się bezsensowne i nie ma on wg Ciebie prawa działać dobrze, a on niekoniecznie słucha Twojego feedbacku.

👉 Jak wyciągać od klienta potrzebne informacje i co zrobić, gdy nie wywiązuje się ze swoich zobowiązań.

👉 Jak stopniowo poprawiać komunikację z klientem.

👉 Jak przygotować się do demo oraz innych spotkań, na których musisz coś zaprezentować przed klientem.

👉 Jak podchodzę do nadgodzin, żeby się nie wypalić.

### Praca z pracodawcą

👉 Na czym polega dobra relacja z pracodawcą i jak to zrobić, żeby obydwie strony skorzystały na niej jak najwięcej.

👉 Niezawodne podejście do awansów, podwyżek oraz "negocjacji". Czym tak naprawdę są negocjacje.

👉 Za jakie dodatkowe działania ceni nas większość pracodawców.

👉 Dodatkowe sposoby inwestowania w siebie i budowania reputacji, która zostanie z Tobą nawet wtedy, gdy zmienisz pracę.

### Pułapki odpowiedzialności

👉 Najbardziej powszechne pułapki, które czekają na wszystkich, którzy robią dobrą robotę.

👉 Jak sobie z nimi poradzić i nie dać się wykorzystać.

👉 Dlaczego branie zbyt wielu odpowiedzialności i zbyt szybki awans, mogą być błędem.

👉 Jak szukać balansu w zależności od tego, co chcesz osiągnąć w swojej pracy.
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
