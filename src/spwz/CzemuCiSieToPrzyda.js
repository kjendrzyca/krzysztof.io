import React from 'react'
import ReactMarkdown from 'react-markdown'
import { CenteredH2 } from '@/components/CenteredH2'

const czemuCiSieToPrzydaMd = `
Gdy stawiałem swoje pierwsze kroki jako Software Engineer, to nie wiedziałem, **jak stwierdzić, czy robię dobrą robotę**
i jak moja praca zostanie oceniona przez zespół i pracodawcę.

Nie chciałem być jednym z tych bezbronnych płatków śniegu, na których nie można polegać,
trzeba ciągle pilnować i od których nie można ogólnie zbyt wiele wymagać.

Dlatego zacząłem obserwować najbardziej kompetentne osoby, które udało mi się znaleźć,
a potem rozkładałem na czynniki pierwsze, wdrażałem w życie i testowałem ich sposoby pracy.

Szukałem sposobów, które pozwolą mi zrozumieć, spełnić i przekroczyć stawiane przede mną oczekiwania.

Szukałem elementów wspólnych, które pozwolą mi nabić punkty splendoru i odblokować korzyści
w postaci lepszych projektów, większej swobody w robieniu rzeczy po swojemu oraz lepszego wynagrodzenia.

Nauczyłem się, że **nikt nie musi czekać, żeby zacząć zachowywać się jak doświadczony programista.**
Można zacząć od razu - od zmiany mindsetu.

Wpisowe polega na tym, żeby **wziąć odpowiedzialność nie tylko za pisanie kodu**,
ale też za dobrą współpracę z zespołem, z klientem, z pracodawcą i za stopniowe zwiększanie jakości dowożonych zadań.

Okazało się, że znajomość umiejętności miękkich jest niezbędna, bo pomaga eliminować wszelkie przeszkody, które napotykam w pracy.
Zauważyłem też, że te umiejętności są cenione wśród pracodawców i ludzi, z którymi pracuję.

Dzięki wsparciu wielu doświadczonych osób udało mi się wypracować podejście do pracy,
które przekazuję od kilku lat wszystkim zainteresowanym - indywidualnie i w każdym kolejnym projekcie, do którego dołączam.

Po jakimś czasie zauważyłem, że ci, którzy je stosują, **stopniowo zaczynają być uważani za najbardziej ogarnięte osoby w projekcie,
przestają mieć problemy na rozmowach o kasę i często naturalnie wchodzą w role liderskie w swoich zespołach**.

Tych sprawdzonych w boju, uporządkowanych informacji, które można szybko zaaplikować u siebie, brakuje w Internecie,
a niektórzy nie mają w swoim otoczeniu osób, od których można się uczyć.

Dlatego postanowiłem zebrać to, czego się nauczyłem, a potem przefiltrowałem, zostawiłem to, co w mojej ocenie jest najważniejsze i wziąłem się za tworzenie tego programu.

Zebrane doświadczenia chcę podać Ci w przystępnej formie, bez coachingu, bez wciskania kitu na siłę i bez mówienia o tym, co "musisz" i co "powinieneś".

**Dostajesz tylko to, co działa** u mnie i u ludzi, których znam.
Nakreślam też kontekst, który podpowie Ci jak zaaplikować tę wiedzę u siebie i zmodyfikować podejście w razie potrzeby.

Moim celem jest pokazać Ci jak zostać dojrzałym, godnym zaufania, cenionym członkiem zespołu.
`

export const CzemuCiSieToPrzyda = () => {
  return (
    <>
      <CenteredH2>
        Czemu Ci się to przyda?
      </CenteredH2>

      <ReactMarkdown>
        {czemuCiSieToPrzydaMd}
      </ReactMarkdown>
    </>
  )
}
