import { CenteredH2 } from "@/components/CenteredH2"
import ReactMarkdown from "react-markdown"

const dlaKogoMd = `
**Dla juniorów i regularów**, którzy chcą przejąć kontrolę nad swoją karierą i zacząć działać jak **ogarnięci seniorzy**.

**Dla seniorów**, którzy czują **braki w umiejętnościach nietechnicznych**.

Dla tych, którzy chcą wziąć **odpowiedzialność za cały proces tworzenia oprogramowania**, rozwijać się zawodowo i wpływać na **jakość projektów**.

Dla tych, którzy **chcą działać sprawniej**, żeby nic nie odciągało ich od kodu.
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
