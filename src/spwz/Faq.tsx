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
    <p>{answer}</p>
  </>
)

export const FAQ = () => {
  return (
    <>
      <CenteredH2>FAQ</CenteredH2>

      <FaqItem
        question="Czy dostanę fakturę?"
        answer="Faktura jest wystawiana automatycznie po zakończeniu zakupu i wysyłana na podany adres email."
      />

      <FaqItem
        question="Co jeśli chcę, żeby firma sfinansowała mi zakup?"
        answer="Nie ma żadnego problemu. Napisz do mnie na maila i ogarniemy fakturę z odroczoną płatnością lub coś innego."
      />

      <CenteredH2>Masz inne pytania?</CenteredH2>

      <p>Napisz do mnie na krzysztof@krzysztof.io.</p>
    </>
  )
}
