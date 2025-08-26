import { Layout } from '@/components/layout'
import SEO from '@/components/seo'
import { LandingSprzedaz } from '@/spwz/LandingSprzedaz'

const SPWZPage = () => {
  return (
    <Layout isLandingPage>
      <SEO
        title="Skuteczna Praca w Zespole"
        description={`Kompletny przewodnik po umiejętnościach miękkich dla programistów. Odkryj sprawdzone metody skutecznej współpracy w zespole, z klientem i pracodawcą.`}
        slug="spwz"
        ogType="page"
        ogImagePath="/spwz/spwz-og.png"
      />

      <LandingSprzedaz />
    </Layout>
  )
}

SPWZPage.theme = 'light'

export default SPWZPage
