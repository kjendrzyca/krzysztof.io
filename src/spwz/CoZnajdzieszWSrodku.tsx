import { CenteredH2 } from '@/components/CenteredH2'
import ReactMarkdown from 'react-markdown'

const text = `
Oto kompletny zestaw, który otrzymasz, dołączając do programu:

**1️⃣ Główny Program "Skuteczna praca w zespole"**

✅ Ponad 19 godzin konkretnych, praktycznych nagrań wideo w 24 modułach (krótkie nagrania).

📚 Zero teorii dla teorii, tylko sprawdzone sposoby działania, konkretne strategie i taktyki do wdrożenia od razu.

**2️⃣ Lista sugestii do zaaplikowania**

Poza gotowymi taktykami i strategiami z materiałów wideo, pod każdym modułem znajdziesz moje propozycje na temat tego, jak zaaplikować zdobytą wiedzę. Dzięki temu możesz zacząć działać od zaraz.

**3️⃣ Skrzynka z narzędziami**

Dostęp do gotowych szablonów i checklist (m.in. szablon rejestru osiągnięć na rozmowy z liderem, checklista konstruktywnego Code Review, checklista przed demo z klientem), które pomogą Ci wdrożyć wiedzę z programu.

📌 Baza linków (książki, artykuły, narzędzia), które **pomogły mi przez lata**.

**4️⃣ Dożywotni dostęp do materiałów i wszystkich przyszłych aktualizacji.**

Nowe materiały są dla Ciebie dostępne od razu.

**5️⃣ 5 Grupowych spotkań Q&A na żywo ze mną**

Cykl 5 spotkań na żywo (co 2 tygodnie), gdzie możesz zadać każde pytanie i uzyskać pomoc w swojej konkretnej sytuacji. Taki rytm daje czas na poznanie i próbę wdrożenia wiedzy.

Nie nagrywamy spotkań. Chcę, żeby każdy mógł swobodnie poruszyć trudne tematy i nie zastanawiał się potem, czy to gdzieś nie wycieknie.

Masz również możliwość dołączenia do spotkań w przyszłych edycjach programu za free.

**6️⃣ Baza notatek ze spotkań na żywo**

Nie nagrywam spotkań, ale robię notatki, żeby nic nam nie uciekło gdy rozpracujemy jakiś ciekawy problem lub temat. Nie ląduje w nich nic poufnego.

**7️⃣ Dostęp do grupy na Discordzie**

Zamknięta grupa tylko dla uczestników programu. To bezpieczne miejsce do zadawania pytań, dzielenia się doświadczeniami i wspólnego rozwiązywania problemów.

**8️⃣ Dodatkowy moduł opisujący typy osobowości klienta**

Konkretny poradnik o tym, jak dostosować swoją komunikację i sposób pracy do charakteru naszego klienta. (Bo inaczej będziemy obsługiwać kontrolującego wszystko choleryka, a inaczej niezbyt zorganizowanego marzyciela).
`

export const CoZnajdzieszWSrodku = () => {
  return (
    <>
      <CenteredH2>Co dokładnie znajdziesz w środku?</CenteredH2>

      <ReactMarkdown>{text}</ReactMarkdown>
    </>
  )
}
