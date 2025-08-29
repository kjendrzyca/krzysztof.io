import { Layout } from '@/components/layout'
import SEO from '@/components/seo'
import { LandingMailing } from '@/spwz/LandingMailing'
// import { LandingSprzedaz } from "@/spwz/LandingSprzedaz"

const SPWZPage = () => {
  return (
    <Layout isLandingPage>
      <SEO
        title="Skuteczna Praca w Zespole"
        description={`Sprawdzony w praktyce system rozwoju, modeli myślowych i taktyk dla programistów, którzy mają dość chaosu, poczucia stagnacji i bycia niedocenianym. Pokażę Ci, jak krok po kroku opanować pracę z zadaniami, dynamikę zespołu i relacje z biznesem, by odzyskać kontrolę i spokój oraz sprawić, by Twoje zaangażowanie w końcu zostało zauważone i docenione.`}
        slug="spwz"
        ogType="page"
        ogImagePath="/spwz/spwz-og.png"
      />

      <LandingMailing />
      {/* <LandingSprzedaz /> */}
    </Layout>
  )
}

SPWZPage.theme = 'light'

export default SPWZPage
