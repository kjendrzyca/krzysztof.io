import { CenteredH2 } from "@/components/CenteredH2"
import ReactMarkdown from "react-markdown"

const dlaKogoMd = `
**Dla juniorów i regularów**, którzy chcą przejąć kontrolę nad swoją karierą i zacząć działać jak **ogarnięci seniorzy**.

**Dla seniorów**, którzy czują **braki w umiejętnościach nietechnicznych** i chcą je poprawić, żeby nie było przypału.

Dla tych, którzy chcą wziąć **odpowiedzialność za cały proces tworzenia oprogramowania**, zostać **kluczowymi członkami zespołu** i mieć wpływ na to, jak realizowane są projekty.
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
