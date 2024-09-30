
import { Layout } from "@/components/layout"
import SEO from "@/components/seo"
import { LandingMailing } from "@/spwz/LandingMailing"
import { LandingSprzedaz } from "@/spwz/LandingSprzedaz"

const SPWZPage = () => {
  return (
    <Layout isLandingPage>
      <SEO
        title="Skuteczna Praca w Zespole"
        description={`Kompletny przewodnik po umiejętnościach miękkich oraz sposobach pracy doświadczonych programistów. "Skuteczna Praca w Zespole" to program szkoleniowy online, w którym pokażę Ci, czego nauczyłem się przez ostatnie kilka lat o skutecznej współpracy z zespołem, klientem oraz pracodawcą, jak podchodzę do wykonywania zadań i jakie czerpię z tego wszystkiego korzyści.`}
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
