import { CenteredH2 } from "@/components/CenteredH2"
import ReactMarkdown from "react-markdown"

const coZnajdzieszMd = `
"Skuteczna Praca w Zespole" to **231 materiałów wideo** podzielonych na **24 moduły**. Łącznie jest to **19 godzin i 10 minut** nagrań podzielone na **10 tygodni** pracy.

Pod każdym modułem znajduje się **lista sugestii, które możesz zaaplikować u siebie**. Dorzucam też sporo materiałów zewnętrznych, które pomagały mi przez te wszystkie lata.

W tym programie nie ma lekcji, nie ma zadań domowych i certyfikatów.
To dlatego, że nie chcę nikogo niańczyć i nie chcę być niczyim nauczycielem.

Chcę po prostu pokazać, co widzę, że działa. **Chcę, żeby każdy mógł zastosować tę wiedzę w swojej pracy i jak najszybciej czerpać płynące z tego korzyści**.
`

export const CoZnajdzieszWSrodku = () => {
  return (
    <>
      <CenteredH2>
        Co znajdziesz w środku?
      </CenteredH2>

      <ReactMarkdown>
        {coZnajdzieszMd}
      </ReactMarkdown>
    </>
  )
}
