import React, { useRef, useState } from "react"
import NextImage from 'next/image'

import {Layout} from "@/components/layout"
import SEO from "@/components/seo"
import { SubscribeSPWZ, SubscribeSPWZScrollButton, SubscribeSPWZToggleButton } from "@/components/mailerLiteSPWZ"
import ShareButtons from "@/components/shareButtons"
import { config } from "@/config"
import { CzemuCiSieToPrzyda } from "@/spwz/CzemuCiSieToPrzyda"
import { CenteredH2 } from "@/components/CenteredH2"
import { LogoAndHeading } from "@/spwz/LogoAndHeading"
import { CoZnajdzieszWSrodku } from "@/spwz/CoZnajdzieszWSrodku"
import { Agenda } from "@/spwz/Agenda"
import { DlaKogo } from "@/spwz/DlaKogo"
import { OMnie } from "@/spwz/OMnie"
import { CoKiedy } from "@/spwz/CoKiedy"

const SPWZPage = () => {
  const siteUrl = config.siteMetadata.siteUrl
  const social = config.siteMetadata.social.social

  const coKiedyRef = useRef(null)

  const [showPopup, setShowPopup] = useState(false)

  const togglePopup = () => setShowPopup(showPopup => !showPopup)
  const scrollToSection = () => coKiedyRef.current.scrollIntoView({ behavior: 'smooth' })

  return (
    <Layout isLandingPage>
      <SEO
        title="Skuteczna Praca w Zespole"
        description={`Kompletny przewodnik po umiejętnościach miękkich oraz sposobach pracy doświadczonych programistów. "Skuteczna Praca w Zespole" to program szkoleniowy online, w którym pokażę Ci, czego nauczyłem się przez ostatnie kilka lat o skutecznej współpracy z zespołem, klientem oraz pracodawcą, jak podchodzę do wykonywania zadań i jakie czerpię z tego wszystkiego korzyści.`}
        slug="spwz"
        ogType="page"
        ogImagePath="/spwz/spwz-og.png"
      />

      <LogoAndHeading />

      <p style={{textAlign: 'center', marginTop: 'var(--spacing-10)'}}>
        <SubscribeSPWZScrollButton scrollToSection={scrollToSection} />
      </p>

      <hr className="hr-spwz" />

      <CzemuCiSieToPrzyda />

      <hr className="hr-spwz" />

      <CoZnajdzieszWSrodku />

      <p style={{textAlign: 'center', marginTop: 'var(--spacing-10)', marginBottom: 'var(--spacing-10)'}}>
        <SubscribeSPWZScrollButton scrollToSection={scrollToSection} />
      </p>

      <p style={{marginInline: '-22px'}}>
        <span className="image-wrapper" style={{textAlign: 'center'}}>
          <NextImage src="/spwz/edu-frame.png" fill={true} alt="Platforma" />
        </span>
      </p>

      <hr className="hr-spwz" />

      <Agenda />

      <p style={{textAlign: 'center', marginTop: 'var(--spacing-10)', marginBottom: 'var(--spacing-10)'}}>
        <SubscribeSPWZScrollButton scrollToSection={scrollToSection} />
      </p>

      <hr className="hr-spwz" />

      <DlaKogo />

      <hr className="hr-spwz" />

      <OMnie />

      <hr className="hr-spwz" />

      <CoKiedy ref={coKiedyRef} />

      <p style={{textAlign: 'center', marginTop: 'var(--spacing-10)'}}>
        <SubscribeSPWZToggleButton togglePopup={togglePopup} />
      </p>

      <hr className="hr-spwz" />

      <CenteredH2>
        Co mówią subskrybenci?
      </CenteredH2>

      <p>
        <span className="image-wrapper">
          <NextImage src="/spwz/testimonials-email.png" fill={true} alt="Opinie" />
        </span>
      </p>

      <p style={{textAlign: 'center', marginTop: 'var(--spacing-10)'}}>
        <SubscribeSPWZToggleButton togglePopup={togglePopup} />
      </p>

      <hr className="hr-spwz" />

      <ShareButtons
         url={`${siteUrl}/spwz`}
         title="Skuteczna Praca w Zespole"
         socialHandle={social}
         text={<>Jeśli znasz kogoś, kto chciałby zrozumieć, jak skutecznie pracować w zespole i poprawić swoje warunki zatrudnienia, ale nie wie jak się za to zabrać, to będę wdzięczny jeśli <span className="click-it">podeślesz mu link do tej strony.</span></>}
      />

      <SubscribeSPWZ showPopup={showPopup} togglePopup={togglePopup} />
    </Layout>
  )
}

SPWZPage.theme = 'light'

export default SPWZPage
