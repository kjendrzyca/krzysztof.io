import { CenteredH2 } from "@/components/CenteredH2"
import ReactMarkdown from "react-markdown"
import { SPWZEbook } from "./SPWZEbook"
import { forwardRef } from "react"

const coKiedyMd = `
Obecnie skończyłem pierwszą edycję programu i przygotowuję się do drugiej.

Dużą ilość materiałów udostępniam teraz w formie cotygodniowego mailingu, na który możesz się tutaj zapisać.

Dotychczas dołączyło do niego już **ponad 1000 osób**, których opinie możesz zobaczyć poniżej.

Przy okazji dopiszę Cię do listy oczekujących na kolejne otwarcie programu.

Otrzymasz **najlepszą ofertę dołączenia do jego pełnej wersji**, gdy znowu będzie dostępny.
`

export const CoKiedy = forwardRef((_, ref) => {
  return (
    <>
      <CenteredH2 ref={ref}>
        Co i kiedy?
      </CenteredH2>

      <ReactMarkdown>
        {coKiedyMd}
      </ReactMarkdown>

      <SPWZEbook />
    </>
  )
})

CoKiedy.displayName = 'CoKiedy'
