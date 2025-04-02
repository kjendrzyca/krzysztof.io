import { CenteredH2 } from "@/components/CenteredH2"
import ReactMarkdown from "react-markdown"
import NextImage from 'next/image'

const kilkaSlowOMnieMd = `
Pracowałem w różnych projektach - od startupów po wieloletnie legacy.

Byłem programistą, liderem technicznym, architektem i doradcą technicznym.

Pomagałem przekształcać dysfunkcyjne zespoły w takie, które wydajnie rozwiązują wszystkie napotkane problemy.

Widziałem większość antypatternów w kodzie i zespołach - i wiem, jak sobie z nimi radzić.

Swoje doświadczenia weryfikuję przez dzielenie się nimi na konferencjach, warsztatach, w pracy na etacie oraz online.

Rolę bullshit detectora pełni też bogata siatka znajomych - doświadczeni programiści, analitycy biznesowi, scrum masterzy,
product ownerzy, CTO, oraz założyciele firm zajmujących się tworzeniem oprogramowania.
`

export const OMnie = () => {
  return (
    <>
      <CenteredH2>
        Kilka słów o mnie
      </CenteredH2>

      <p>
        <span className="image-wrapper" style={{textAlign: 'center'}}>
          <NextImage src="/spwz/face.jpg" width={282} height={282} alt="Opinie" />
        </span>
      </p>

      <h3 style={{textAlign: 'center', marginTop: 0}}>Krzysztof Jendrzyca / @kjendrzyca</h3>

      <ReactMarkdown>
        {kilkaSlowOMnieMd}
      </ReactMarkdown>
    </>
  )
}
