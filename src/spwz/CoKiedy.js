import { CenteredH2 } from "@/components/CenteredH2"
import ReactMarkdown from "react-markdown"
import { SPWZEbook } from "./SPWZEbook"
import { forwardRef } from "react"

const coKiedyMd = `
Materiały z programu udostępniam obecnie w formie cotygodniowego mailingu, który czyta już **ponad 1000 osób**. Ich opinie możesz zobaczyć trochę niżej.

Możesz się do niego zapisać podając swój email, a ja przy okazji dopiszę Cię do listy oczekujących na pełny program.

Dostaniejsz najlepszą ofertę dołączenia, gdy znowu będzie dostępny.

Przykładowy email znajdziesz [tutaj](https://emails.skutecznyprogramista.pl/u4b0b0).
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
