/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
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

      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1109547327810831');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1109547327810831&ev=PageView&noscript=1"
          />
        </noscript>
      </Head>

      <LandingMailing />
      {/* <LandingSprzedaz /> */}
    </Layout>
  )
}

SPWZPage.theme = 'light'

export default SPWZPage
