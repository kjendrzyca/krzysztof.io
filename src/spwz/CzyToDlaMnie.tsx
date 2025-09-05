import { CenteredH2 } from '@/components/CenteredH2'
import ReactMarkdown from 'react-markdown'
import { Highlight } from '@/components/Highlight'

const text = `
Niezależnie od tego, czy masz rok, czy siedem lat doświadczenia, ten program jest dla Ciebie, jeśli czujesz, że sama technologia to za mało. Jeśli chcesz mieć realny wpływ na projekt, a nie tylko odhaczać kolejne taski.

W szczególności, jeśli znajdujesz się w jednej z tych sytuacji:

👉 **Czujesz, że utknąłeś w miejscu:** Masz już doświadczenie, ale Twój rozwój wyhamował. Trafiasz do podobnych projektów, tkwisz w chaosie i czujesz, że Twoje umiejętności nie są w pełni doceniane. Chcesz w końcu przebić szklany sufit.

👉 **Chcesz od początku budować na solidnych fundamentach:** Zaczynasz swoją drogę w IT lub jesteś na jej wczesnym etapie. Widzisz, z czym borykają się inni, i chcesz uniknąć tych samych błędów. Chcesz od razu wdrożyć nawyki, które dadzą Ci przewagę na lata.

👉 **Pracujesz głównie solo lub bez dobrych wzorców:** Ogarniasz technicznie, ale czujesz, że brakuje Ci obycia w pracy zespołowej, bo Twoje dotychczasowe doświadczenie to praca w pojedynkę lub po prostu nie było od kogo się uczyć. Chcesz wejść w nowe środowisko z pełną pewnością siebie.

👉 **Jesteś liderem (lub aspirujesz do tej roli):** Zarządzasz zespołem jako Tech Lead, Scrum Master czy Engineering Manager i szukasz sprawdzonego systemu, by podnieść dojrzałość i samodzielność swoich ludzi. Chcesz dać im narzędzia, które sprawią, że cały zespół będzie działał skuteczniej.
`

export const CzyToDlaMnie = () => {
  return (
    <>
      <CenteredH2>Dla kogo jest ten program?</CenteredH2>

      <p style={{ textAlign: 'center' }}>
        W skrócie:
        <br />
        <Highlight>
          <strong>Dla ambitnych programistów (na każdym poziomie), którzy chcą więcej.</strong>
        </Highlight>
      </p>

      <ReactMarkdown>{text}</ReactMarkdown>
    </>
  )
}
