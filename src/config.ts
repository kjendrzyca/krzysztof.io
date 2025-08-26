interface Author {
  name: string
  summary: string
}

interface Social {
  social: string
}

interface SiteMetadata {
  title: string
  author: Author
  description: string
  siteUrl: string
  social: Social
}

interface Config {
  siteMetadata: SiteMetadata
}

export const config: Config = {
  siteMetadata: {
    title: `krzysztof.io`,
    author: {
      name: `Krzysztof Jendrzyca`,
      summary: ``,
    },
    description: `Baza wypadowa moich projektów. Znajdziesz tutaj opis moich doświadczeń, obserwacje oraz notatki dotyczące tematów, które mnie obecnie interesują: tworzenie treści, notatek, produktów, produktywność, programowanie i praca w IT, technologie webowe (React, Node).`,
    siteUrl: `https://krzysztof.io`,
    social: {
      social: `kjendrzyca`,
    },
  },
}
