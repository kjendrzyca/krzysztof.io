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
      <CenteredH2>Masz inne pytania lub wątpliwości?</CenteredH2>

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
    </>
  )
}
