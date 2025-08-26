import { CenteredH2 } from '@/components/CenteredH2'
import ReactMarkdown from 'react-markdown'

const text = `
✅ **231 materiałów wideo** podzielonych na **24 moduły**. **19 godzin i 10 minut** wypełnionych samymi konkretami.

📚 **Zero teorii dla teorii** – tylko **sprawdzone sposoby działania**.

🛠️ **Konkretne strategie i taktyki** do wdrożenia **od razu**.

💡 **Lista sugestii** do zastosowania i sprawdzenia **w każdym module**.

⭐ Bez certyfikatów i zadań domowych – **chodzi o realne efekty**, a nie papierek.

📌 **Materiały dodatkowe** – baza linków, które **pomogły mi przez lata**.

`

export const CoZnajdzieszWSrodku = () => {
  return (
    <>
      <CenteredH2>Co znajdziesz w środku?</CenteredH2>

      <ReactMarkdown>{text}</ReactMarkdown>
    </>
  )
}
