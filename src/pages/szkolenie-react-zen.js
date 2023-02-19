import React from "react"
import ReactMarkdown from 'react-markdown'

import {Layout} from "@/components/layout"
import SEO from "@/components/seo"

const md = `
# The Zen of React - kilka dobrych zasad, dzięki którym utrzymasz Reacta w czystości

React jest "czysty by design". Zasady, którymi warto się posługiwać, żeby utrzymać kod w czystości, mamy często podane na tacy, czy to w dokumentacji, czy na blogach jasnych gwiazd community.

Zawsze zastanawiałem się, czy inne, znane od dawna dobre praktyki tworzenia oprogramowania, można trochę ponaginać i zaaplikować do Reacta w taki sposób, żeby jeszcze jaśniej nakreślić, jak utrzymywać kod aplikacji w czystości.

Rozmowy z najlepszymi programistami, jakich znam i doświadczenie zdobyte podczas prowadzenia warsztatów oraz pracy z Reactem przekułem w zestaw dyrektyw, które roboczo nazwałem The Zen of React.

Na szkoleniu pokażę Ci, jak możesz zaaplikować je w swoich projektach i jak połączyć je z filozofią Reacta. W efekcie pomogą Ci w utrzymaniu kodu w czystości, ułatwią testowanie i sprawią, że Twój kod będzie łatwiejszy w utrzymaniu.
`

const SzkolenieReactZenPage = () => {
  return (
    <Layout isLandingPage>
      <SEO
        title="The Zen of React"
        description="Kilka dobrych zasad, dzięki którym utrzymasz Reacta w czystości."
      />
      <ReactMarkdown>
        {md}
      </ReactMarkdown>
    </Layout>
  )
}

export default SzkolenieReactZenPage
