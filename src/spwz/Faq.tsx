import { CenteredH2 } from '@/components/CenteredH2'

type FaqItemProps = {
  question: string
  answer: string
}

const FaqItem = ({ question, answer }: FaqItemProps) => (
  <>
    <p>
      <strong>{question}</strong>
    </p>
    {answer.split('\n\n').map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ))}
  </>
)

export const FAQ = () => {
  return (
    <>
      <CenteredH2>Masz pytania lub wątpliwości?</CenteredH2>

      <p>Napisz do mnie na krzysztof@krzysztof.io i na pewno Ci pomogę.</p>

      <p>
        <strong>Nie boję się odradzać uczestnictwa w programie</strong>, jeśli uważam, że sie u
        kogoś nie sprawdzi. Zależy mi na tym, żeby każdy uczestnik był zadowolony.
      </p>

      <CenteredH2>FAQ</CenteredH2>

      <FaqItem
        question="Czy dostanę fakturę?"
        answer="Faktura jest wystawiana automatycznie po zakończeniu zakupu i wysyłana na podany adres email."
      />

      <FaqItem
        question="Co jeśli chcę, żeby firma sfinansowała mi zakup?"
        answer="Nie ma żadnego problemu. Napisz do mnie na maila i ogarniemy fakturę z odroczoną płatnością lub coś innego."
      />

      <FaqItem
        question="Mam tylko rok doświadczenia / Mam już 10 lat doświadczenia. Czy ten program jest dla mnie?"
        answer={`Tak.

Jeśli masz mało doświadczenia, ten program da Ci fundamenty, których inni uczą się latami, co da Ci ogromną przewagę na starcie.

Jeśli masz duże doświadczenie, program pomoże Ci ustrukturyzować wiedzę, nazwać problemy, z którymi się mierzysz, i da Ci konkretne narzędzia, by stać się liderem i mentorem w zespole.`}
      />

      <FaqItem
        question="Ile czasu tygodniowo muszę na to poświęcić?"
        answer={`Ile chcesz.

Dostajesz dostęp do wszystkiego od razu i przerabiasz we własnym tempie. Niektórzy wolą oglądać jeden moduł w tygodniu i od razu wdrażać sugestie, inni robią maraton w weekend. Ważne jest to, żeby nie tylko oglądać, ale też próbować stosować tę wiedzę w praktyce.

Na spotkaniach Q&A co 2 tygodnie będziemy mogli przegadać, co Ci wychodzi, a z czym masz problem.`}
      />

      <FaqItem
        question="Czym ten program różni się od przeczytania kilku książek o 'soft-skillach'?"
        answer={`Tym, że ja już przeczytałem te wszystkie książki (i dziesiątki innych), a potem spędziłem lata, testując tę wiedzę w prawdziwych, często chaotycznych projektach IT.

Zamiast teorii dostajesz esencję tego, co faktycznie działa, przefiltrowaną przez kontekst pracy programisty. Daję Ci gotowy, spójny system, a nie listę luźnych porad, z którymi nie wiadomo, co zrobić.`}
      />

      <FaqItem
        question="Czy przyda mi się ten program, jeśli nie jestem programistą/programistką?"
        answer={`Szczerze? To zależy.

Ten program był od początku do końca budowany z myślą o ludziach, którzy piszą kod. Język, przykłady (Code Review, planowanie zadań, spory techniczne) i problemy są w 100% ze świata IT. Jeśli pracujesz w marketingu i nie masz na co dzień do czynienia z zespołem deweloperskim, to większość kontekstu po prostu do Ciebie nie trafi. Szkoda Twojego czasu i pieniędzy.

ALE.

Jeśli Twoja rola jest ściśle związana z pracą zespołu produktowego - jesteś testerem/QA, UX/UI designerem, analitykiem biznesowym, Project Managerem, Product Ownerem czy Scrum Masterem - to znajdziesz coś dla siebie.

Dlaczego? Bo nie uczę tutaj programowania, tylko pokazuję jak pracować w zespole IT, robić dobrą robotę i jak pokierować go na dobre tory.`}
      />
    </>
  )
}
