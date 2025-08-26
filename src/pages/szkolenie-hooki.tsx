import React from 'react'
import ReactMarkdown from 'react-markdown'

import { Layout } from '@/components/layout'
import SEO from '@/components/seo'

const md = `
# Czysty React na Hookach

Jednym z ostatnich dodatków do Reacta są Hooki - koncept pozwalający na jeszcze lepsze uporządkowanie kodu.

Zgodnie z zapewnieniami twórców Reacta jest to przyszłość całego ekosystemu.

Na tym szkoleniu przekażę Ci swoje produkcyjne doświadczenie związane z Hookami. Pokażę, że Hooki nie są lekiem na wszystkie bolączki i mają swoje wady, ale pozwalają robić rzeczy, które wcześniej były niemożliwe.

Zobaczysz jak wyciągnąć z nich to, co najlepsze.

Korzyści:

- Zrozumiesz filozofię i ogólną zasadę działania Hooków.
- Użyjesz podstawowych Hooków do rozwiązywania typowych problemów, które występują podczas pisania aplikacji w React.js.
- Zmigrujesz dotychczasowy kod, który korzysta z klas na kod, który korzysta z Hooków.
- Napiszesz własne, reużywalne Hooki, które enkapsulują logikę komponentów.
- Dowiesz się, dlaczego pisanie własnych Hooków to największa zaleta tego ficzera.
- Napiszesz testy do mniej i bardziej skomplikowanych Hooków.
- Poznasz uniwersalne znaczenie zasad SOLID, które pasuje do aplikacji pisanych w React.js.
- Napiszesz czysty kod przy zastosowaniu podstawowych Hooków i tych napisanych samemu.
- Będziesz wiedział, dlaczego warto używać Hooków, a kiedy zostać przy tradycyjnym/klasycznym podejściu.
- Poznasz największe zagrożenia płynące ze stosowania Hooków.
- Zaaplikujesz Hooki z popularnych bibliotek takich jak Redux czy React Router.

Wymagania:

- "Projektowa" znajomość React.js - musisz mieć doświadczenie w pisaniu aplikacji przy użyciu standardowych technik obecnych przed wprowadzeniem Hooków.
- Znajomość patternów HoC i Render Prop.
- Umiejętność pisania prostych testów jednostkowych.
- Własny komputer.
- Zainstalowana najnowsza wersja Node.js.
- Działająca, pusta aplikacja, wygenerowana przy pomocy create-react-app.
- Umiejętność pracy z gitem + zainstalowany git .
`

const SzkolenieTestyPage = () => {
  return (
    <Layout isLandingPage>
      <SEO
        title="Czysty React na Hookach"
        description="Szkolenie, na którym pokażę, jak wyciągnąć z Hooków to, co najlepsze."
      />
      <ReactMarkdown>{md}</ReactMarkdown>
    </Layout>
  )
}

export default SzkolenieTestyPage
