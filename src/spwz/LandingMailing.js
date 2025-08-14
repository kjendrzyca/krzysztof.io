import { useRef } from "react"
import { config } from "@/config"

import { CzemuCiSieToPrzyda } from "@/spwz/CzemuCiSieToPrzyda"
import { CenteredH2 } from "@/components/CenteredH2"
import { LogoAndHeading } from "@/spwz/LogoAndHeading"
import { CoZnajdzieszWSrodku } from "@/spwz/CoZnajdzieszWSrodku"
import { Agenda } from "@/spwz/Agenda"
import { DlaKogo } from "@/spwz/DlaKogo"
import { OMnie } from "@/spwz/OMnie"
import { CoKiedy } from "@/spwz/CoKiedy"

import NextImage from 'next/image'

import ShareButtons from "@/components/shareButtons"
import { SPWZScrollButton, SubscribeSPWZToggleButton } from "./buttons"

export const LandingMailing = () => {
  const siteUrl = config.siteMetadata.siteUrl
  const social = config.siteMetadata.social.social
  const coKiedyRef = useRef(null)

  const openSubscribePage = () => window.location.href = 'https://landing.mailerlite.com/webforms/landing/b0j1j8'
  const scrollToSection = () => coKiedyRef.current.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <LogoAndHeading />

      <p style={{textAlign: 'center', marginTop: 'var(--spacing-10)'}}>
        <SPWZScrollButton scrollToSection={scrollToSection} />
      </p>

      <hr className="hr-spwz" />

      <CzemuCiSieToPrzyda />

      <hr className="hr-spwz" />

      <CoZnajdzieszWSrodku />

      <p style={{textAlign: 'center', marginTop: 'var(--spacing-10)', marginBottom: 'var(--spacing-10)'}}>
        <SPWZScrollButton scrollToSection={scrollToSection} />
      </p>

      <p style={{marginInline: '-22px'}}>
        <span className="image-wrapper" style={{textAlign: 'center'}}>
          <NextImage src="/spwz/edu-frame.png" fill={true} alt="Platforma" />
        </span>
      </p>

      <hr className="hr-spwz" />

      <Agenda />

      <p style={{textAlign: 'center', marginTop: 'var(--spacing-10)', marginBottom: 'var(--spacing-10)'}}>
        <SPWZScrollButton scrollToSection={scrollToSection} />
      </p>

      <hr className="hr-spwz" />

      <DlaKogo />

      <hr className="hr-spwz" />

      <OMnie />

      <hr className="hr-spwz" />

      <CoKiedy ref={coKiedyRef} />

      <p style={{textAlign: 'center', marginTop: 'var(--spacing-10)'}}>
        <SubscribeSPWZToggleButton togglePopup={openSubscribePage} />
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
        <SubscribeSPWZToggleButton togglePopup={openSubscribePage} />
      </p>

      <hr className="hr-spwz" />

      <ShareButtons
         url={`${siteUrl}/spwz`}
         title="Skuteczna Praca w Zespole"
         socialHandle={social}
         text={<>Jeśli znasz kogoś, kto chciałby zrozumieć, jak skutecznie pracować w zespole i poprawić swoje warunki zatrudnienia, ale nie wie jak się za to zabrać, to będę wdzięczny jeśli <span className="click-it">podeślesz mu link do tej strony.</span></>}
      />
    </>
  )
}
