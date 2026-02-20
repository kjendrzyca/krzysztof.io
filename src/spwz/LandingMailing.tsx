import { useRef } from 'react'

import { CenteredH2 } from '@/components/CenteredH2'
import { LogoAndHeading } from '@/spwz/LogoAndHeading'
import { OMnie } from '@/spwz/OMnie'
import { CoKiedy } from '@/spwz/CoKiedy'

import NextImage from 'next/image'

import { SPWZScrollButton, SubscribeSPWZToggleButton } from './buttons'
import { OpisProblemu } from './OpisProblemu'
import { OpisProduktu } from './OpisProduktu'

export const LandingMailing = () => {
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
    </>
  )
}
