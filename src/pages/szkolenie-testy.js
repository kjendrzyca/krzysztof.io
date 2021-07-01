import React from "react"
import { graphql } from "gatsby"
import Markdown from 'markdown-to-jsx'

import Layout from "../components/layout"
import SEO from "../components/seo"

const md = `
# Dobre praktyki testowania aplikacji JavaScript

Na szkoleniu przećwiczysz pisanie testów jednostkowych oraz integracyjnych typowego kodu aplikacji webowych napisanych w JavaScript. Poznasz również wartość testów w kontekście biznesowym oraz w kontekście pracy programisty. Szkolenie ma za zadanie pokazać uniwersalne, ponadczasowe i niezależne od frameworków techniki oraz praktyki testowania, które mogą być wykorzystane w każdym rodzaju testów - na backendzie oraz w testach UI.

Szkolenie stawia nacisk na praktykę, ale składa się w dużej części z teorii. Jest ona niezbędna, aby dobrze zrozumieć wykorzystywane narzędzia oraz techniki.

**Liczba uczestników**: max 16 osób, optymalnie 10-14 osób

**Szkolenie jest dla Ciebie, jeśli:**

- Nie miałeś/miałaś styczności z testami jednostkowymi
- Masz niewielkie doświadczenie wyniesione z pisania testów metodą prób i błędów lub z tutoriali
- Chcesz zdobyć solidną podstawę w pisaniu testów, która umożliwi Ci pisanie testów we wszystkich stosach technologicznych
- Masz doświadczenie z testami, ale chcesz uporządkować wiedzę i poznać pragmatyczne podejście do pisania testów oraz dobre praktyki

**Korzyści:**

- Zrozumiesz, po co testować aplikacje i dlaczego testy są nieodłączną częścią pracy programisty
- Poznasz różne rodzaje testów i będziesz wiedzieć, kiedy je stosować
- Skonfigurujesz i wykorzystasz podstawowe narzędzia do uruchamiania testów w JS
- Dowiesz się, jak wygląda struktura poprawnego testu oraz jak utrzymywać kod testów w czystości
- Napiszesz testowalny kod
- Napiszesz testy integracyjne oraz zrozumiesz ich ideę
- Poznasz i wykorzystasz różne sposoby mockowania
- Poznasz wartość biznesową testów i dowiesz się jak można przekonać klienta do pisania testów
- Dowiesz się co i kiedy testować, jak nie pominąć ważnych i oczywistych testów oraz kiedy możesz odpuścić testowanie
- Nauczysz się priorytetyzować testy różnych elementów aplikacji
- Poznasz typowe wyzwania w testowaniu JS-a i dowiesz się jak sobie z nimi poradzić
- Przetestujesz kod asynchroniczny oraz komunikację z serwerem
- Poznasz najważniejsze pułapki oraz tips and tricks zebrane na podstawie doświadczeń z pisaniem niezliczonej ilości testów w różnych językach, oraz frameworkach

--

[**👉 Wypełnij ankietę 👈**](https://forms.gle/jbe4rHyTRiQ5bREU9)
`

const SzkolenieTestyPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title

  return (
    <Layout location={location} title={siteTitle} isLandingPage>
      <SEO
        title="Dobre praktyki testowania aplikacji JavaScript"
        description="Szkolenie, na którym przećwiczysz pisanie testów jednostkowych oraz integracyjnych typowego kodu aplikacji webowych napisanych w JavaScript."
      />
      <Markdown children={md} />
    </Layout>
  )
}

export default SzkolenieTestyPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
