import { useRef } from 'react'
import { config } from '@/config'

import { CenteredH2 } from '@/components/CenteredH2'
import { LogoAndHeading } from '@/spwz/LogoAndHeading'
import { OMnie } from '@/spwz/OMnie'
import { CoKiedy } from '@/spwz/CoKiedy'

import NextImage from 'next/image'

import ShareButtons from '@/components/shareButtons'
import { SPWZScrollButton, SubscribeSPWZToggleButton } from './buttons'
import { OpisProblemu } from './OpisProblemu'
import { OpisProduktu } from './OpisProduktu'

export const LandingMailing = () => {
  const siteUrl = config.siteMetadata.siteUrl
  const social = config.siteMetadata.social.social
  const coKiedyRef = useRef<HTMLDivElement>(null)

  const openSubscribePage = () =>
    (window.location.href = 'https://landing.mailerlite.com/webforms/landing/b0j1j8')
  const scrollToSection = () => coKiedyRef.current?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <LogoAndHeading />

      <p style={{ textAlign: 'center', marginTop: 'var(--spacing-10)' }}>
        <SPWZScrollButton scrollToSection={scrollToSection} />
      </p>

      <hr className="hr-spwz" />

      <OpisProblemu />

      <hr className="hr-spwz" />

      <OpisProduktu />

      <hr className="hr-spwz" />

      <CoKiedy ref={coKiedyRef} />

      <hr className="hr-spwz" />

      <p style={{ textAlign: 'center', marginTop: 'var(--spacing-10)' }}>
        <SubscribeSPWZToggleButton togglePopup={openSubscribePage} />
      </p>

      <hr className="hr-spwz" />

      <CenteredH2>Co mówią subskrybenci?</CenteredH2>

      <p>
        <span className="image-wrapper">
          <NextImage
            src="/spwz/testimonials-email.png"
            fill
            alt="Opinie"
          />
        </span>
      </p>

      <p style={{ textAlign: 'center', marginTop: 'var(--spacing-10)' }}>
        <SubscribeSPWZToggleButton togglePopup={openSubscribePage} />
      </p>

      <hr className="hr-spwz" />

      <OMnie />

      <hr className="hr-spwz" />

      <ShareButtons
        url={`${siteUrl}/spwz`}
        title="Skuteczna Praca w Zespole"
        socialHandle={social}
        text={
          <>
            Jeśli znasz kogoś, kto chciałby zrozumieć, jak skutecznie pracować w zespole i poprawić
            swoje warunki zatrudnienia, ale nie wie jak się za to zabrać, to będę wdzięczny jeśli{' '}
            <span className="click-it">podeślesz mu link do tej strony.</span>
          </>
        }
      />
    </>
  )
}
