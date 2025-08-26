import React from 'react'
import ReactMarkdown from 'react-markdown'

import { Layout } from '@/components/layout'
import SEO from '@/components/seo'

const md = `
# PPPPP TDD

Pomodoro Ping-Pong Pair Programming Test Driven Development Kata (w skrócie PPPPP TDD Kata), to szkolenie z TDD, dla początkujących, które polega na zaimplementowaniu jednej z dostępnych kat w stylu TDD.

Czym jest kata?

> "Computer programmers who call themselves "Software Craftsmen" will write 'Kata' - (...) code that they write in one sitting, sometimes repeatedly, often daily, in order to build muscle memory and practise their craft."
>
> (https://en.wikipedia.org/wiki/Kata)

Całe szkolenie trwa około 4 godzin, kod piszemy w parach, które rotujemy co każde pomodoro, czyli co 25 minut.
Ma to na celu zapoznanie się z różnymi podejściami do rozwiązania tego samego zadania, oswojenie z TDD oraz zrozumienie zalet pair-programmingu.

Agenda:

- Dlaczego kata?
- Krótki wstęp do PPPPP
- Krótki wstęp do TDD (i testów jednostkowych jeśli zajdzie potrzeba)
- Wszyscy pobierają startowe repo
- Pisanie kodu
- Pisanie kodu
- Pisanie kodu
- Pisanie kodu
- Omówienie doświadczeń i lessons learned

**Lista narzędzi:**

- https://jestjs.io/
`

const SzkoleniePPPPPTDDPage = () => {
  return (
    <Layout isLandingPage>
      <SEO
        title="Szkolenie PPPPP TDD"
        description="Pomodoro Ping-Pong Pair Programming Test Driven Development Kata (w skrócie PPPPP TDD Kata), to szkolenie z TDD, dla początkujących, które polega na zaimplementowaniu jednej z dostępnych kat w stylu TDD."
      />
      <ReactMarkdown>{md}</ReactMarkdown>
    </Layout>
  )
}

export default SzkoleniePPPPPTDDPage
