import { CenteredH2 } from "@/components/CenteredH2"
import ReactMarkdown from "react-markdown"

const dlaKogoMd = `
"Skuteczna Praca w Zespole" to program dla programistów i programistek na poziomie junior oraz regular,
którzy chcą poznać sposoby pracy oraz umiejętności miękkie dobrze opłacanych i wyróżniających się senior developerów,
które pozwolą im w przyszłości bez problemu wypełniać role liderskie na najwyższym poziomie (jeśli będą tego chcieli).

Dla senior developerów, którzy nie mieli wzorów do naśladowania i czują braki w swoich umiejętnościach nietechnicznych, mimo że ich umiejętności techniczne są na wysokim poziomie.

Ogólnie, program jest dla wszystkich, którzy:

- chcą wziąć odpowiedzialność za **wszystkie aspekty tworzenia oprogramowania**, a nie tylko za klikanie w klawiaturę
- wierzą w to, że nie samym kodem człowiek żyje i chcą poprawić swoje warunki zatrudnienia, rozwijając też inne umiejętności
- chcą lepiej wykonywać swoją pracę jako członkowie zespołu
- chcą szybciej rozwiązywać problemy z pracą zespołową, żeby nie odciągały ich od kodzenia

Materiały są pisane z myślą o ludziach, którzy programują, bo sam to robię, ale sprawdzają się też u innych, niezależne od roli.
`

export const DlaKogo = () => {
  return (
    <>
      <CenteredH2>
        Dla kogo?
      </CenteredH2>

      <ReactMarkdown>
        {dlaKogoMd}
      </ReactMarkdown>
    </>
  )
}
