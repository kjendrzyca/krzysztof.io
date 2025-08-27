import { useRef } from 'react'

import { LogoAndHeading } from '@/spwz/LogoAndHeading'
import { CoZnajdzieszWSrodku } from '@/spwz/CoZnajdzieszWSrodku'
import { Agenda } from '@/spwz/Agenda'
import { OMnie } from '@/spwz/OMnie'
import { OpisProblemu } from '@/spwz/OpisProblemu'
import { OpisProduktu } from '@/spwz/OpisProduktu'
import { JakWygladaPraca } from '@/spwz/sprzedaz/JakWygladaPraca'

import NextImage from 'next/image'

import { SPWZScrollButton } from './buttons'
import { Demo } from './sprzedaz/Demo'
// import { Dolacz } from './sprzedaz/Dolacz'
import { Opinie } from './sprzedaz/Opinie'
import { FAQ } from './Faq'
import { CzyToDlaMnie } from './CzyToDlaMnie'
import { Gwarancja } from './sprzedaz/Gwarancja'
import { ListaOczekujacych } from './sprzedaz/ListaOczekujacych'

export const LandingSprzedaz = () => {
  const dolacz = useRef<HTMLDivElement>(null)

  const scrollToSection = () => dolacz.current?.scrollIntoView({ behavior: 'smooth' })

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

      <JakWygladaPraca />

      <hr className="hr-spwz" />

      <CoZnajdzieszWSrodku />

      <hr className="hr-spwz" />

      <p>
        Tak wygląda strona z programem od środka. Jest to własne, szybkie rozwiązanie, więc masz
        pewność, że nic nie będzie zmulać jak na innych platformach opartych o Wordpress, czy inne
        SaaSy.
      </p>

      <p style={{ marginInline: '-22px' }}>
        <span
          className="image-wrapper"
          style={{ textAlign: 'center' }}
        >
          <NextImage
            src="/spwz/edu-frame.png"
            fill
            alt="Platforma"
          />
        </span>
      </p>

      <hr className="hr-spwz" />

      <Demo />

      <hr className="hr-spwz" />

      <Agenda />

      <p
        style={{
          textAlign: 'center',
          marginTop: 'var(--spacing-10)',
          marginBottom: 'var(--spacing-10)',
        }}
      >
        <SPWZScrollButton scrollToSection={scrollToSection} />
      </p>

      <hr className="hr-spwz" />

      <CzyToDlaMnie />

      <hr className="hr-spwz" />

      <Opinie />

      <hr className="hr-spwz" />

      <OMnie />

      <hr className="hr-spwz" />

      <Gwarancja />

      <hr className="hr-spwz" />

      <ListaOczekujacych ref={dolacz} />

      {/* <Dolacz ref={dolacz} />

      <BuySPWZButtonParagraph />

      <p style={{ textAlign: 'center', marginTop: 'var(--spacing-10)', fontSize: '0.8rem' }}>
        Kliknięcie w przycisk przekieruje Cię na stronę edu.krzysztof.io, gdzie możesz dokonać
        płatności.
      </p> */}

      <hr className="hr-spwz" />

      <FAQ />
    </>
  )
}

// function BuySPWZButtonParagraph() {
//   return (
//     <p style={{ textAlign: 'center', marginTop: 'var(--spacing-10)' }}>
//       <BuySPWZButton />
//     </p>
//   )
// }
