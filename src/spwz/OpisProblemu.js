import React from 'react'
import ReactMarkdown from 'react-markdown'
import { CenteredH2 } from '@/components/CenteredH2'

const text = `
**Masz wrażenie, że nikt Cię nie docenia?** Mimo że się starasz, rozwijasz technicznie i dowozisz zadania, to podwyżki i ciekawsze role Cię omijają. Awanse dostają inni, często ci, którzy po prostu "lepiej gadają".

**Męczy Cię chaos w zespole?** Brak testów, wieczny dług technologiczny, niejasne wymagania i ciągłe gaszenie pożarów wysysają z Ciebie energię. Masz dość tłumaczenia się z nie swoich błędów.

**Praca przestała sprawiać Ci przyjemność?** To, co kiedyś było pasją, staje się źródłem stresu. Presja, poczucie braku wpływu i zmęczenie materiałem to pierwsze sygnały wypalenia, którego doświadczyło ponad 70% programistów w Polsce.

**Dopiero zaczynasz, może jest to Twoja pierwsza praca i chcesz uniknąć błędów, które spowalniają innych?** Widzisz chaos w starszych projektach i wiesz, że musi istnieć lepszy, bardziej poukładany sposób na pracę, ale nie masz się od kogo go nauczyć.

**Zarządzasz zespołem i widzisz, że brakuje mu samodzielności?** Męczysz się z rozwiązywaniem tych samych problemów, a Twoi ludzie, mimo że są zdolni technicznie, nie potrafią wziąć pełnej odpowiedzialności za dowożenie tematów od A do Z.

Jeśli kiwasz głową, czytając te punkty, to chcę Ci powiedzieć, że **nie jesteś z tym sam.**

Sama wiedza techniczna to za mało. Prawdziwa gra toczy się o coś więcej.
`

export const OpisProblemu = () => {
  return (
    <>
      <CenteredH2>
        Czy któraś z tych sytuacji brzmi znajomo?
      </CenteredH2>

      <ReactMarkdown>
        {text}
      </ReactMarkdown>
    </>
  )
}
