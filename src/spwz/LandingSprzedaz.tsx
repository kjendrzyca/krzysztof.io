import { useRef } from 'react'
import { Highlight } from '@/components/Highlight'

import { CzemuCiSieToPrzyda } from '@/spwz/CzemuCiSieToPrzyda'
import { CenteredH2 } from '@/components/CenteredH2'
import { LogoAndHeading } from '@/spwz/LogoAndHeading'
import { CoZnajdzieszWSrodku } from '@/spwz/CoZnajdzieszWSrodku'
import { Agenda } from '@/spwz/Agenda'
import { DlaKogo } from '@/spwz/DlaKogo'
import { OMnie } from '@/spwz/OMnie'
import { OpisProblemu } from '@/spwz/OpisProblemu'
import { OpisProduktu } from '@/spwz/OpisProduktu'

import NextImage from 'next/image'

import { BuySPWZButton, SPWZScrollButton } from './buttons'
import { Demo } from './sprzedaz/Demo'
import { Dolacz } from './sprzedaz/Dolacz'
import { Testimonial } from '@/components/Testimonial'
import { FAQ } from './Faq'

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

      <CzemuCiSieToPrzyda />

      <hr className="hr-spwz" />

      <CoZnajdzieszWSrodku />

      <p
        style={{
          textAlign: 'center',
          marginTop: 'var(--spacing-10)',
          marginBottom: 'var(--spacing-10)',
        }}
      >
        <SPWZScrollButton scrollToSection={scrollToSection} />
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

      <DlaKogo />

      <hr className="hr-spwz" />

      <OMnie />

      <hr className="hr-spwz" />

      <Dolacz ref={dolacz} />

      <p style={{ textAlign: 'center', marginTop: 'var(--spacing-10)' }}>
        <BuySPWZButton />
      </p>

      <p style={{ textAlign: 'center', marginTop: 'var(--spacing-10)', fontSize: '0.8rem' }}>
        Kliknięcie w przycisk przekieruje Cię na stronę edu.krzysztof.io, gdzie możesz dokonać
        płatności.
      </p>

      <hr className="hr-spwz" />

      <CenteredH2>Opinie doświadczonych programistów i programistek</CenteredH2>

      <Testimonial
        imageSrc="/spwz/joanna.jpg"
        quote={
          <>
            <Highlight nopadding>
              Nie spodziewałam się zupełnie, że program to będzie takie kompendium wiedzy
            </Highlight>
            . Jest dobre dla osób na każdym poziomie,{' '}
            <Highlight nopadding>
              zarówno początkujących, jak i tych bardziej doświadczonych
            </Highlight>
            . Program zachęcił mnie do głębszego przyjrzenia się temu, jak działam w zespole, jak
            reaguję na feedback, czy działam wystarczająco proaktywnie, czy raczej czekam aż
            &quot;mnie ktoś zauważy&quot;. Bardzo podobało mi się takie realistyczne podejście
            rzemieślnika, a nie zapewnianie, że jak się ogarnie X, Y, Z to rzeczy zaczną się same
            wydarzać.
          </>
        }
        author="Joanna Otmianowska"
        title="Frontend Engineer"
      />

      <Testimonial
        imageSrc="/spwz/marcin.jpg"
        quote={
          <>
            <Highlight nopadding>Same konkrety bez bullshitu</Highlight>. Jestem seniorem z
            wieloletnim doświadczeniem i aż żal, że dopiero niedawno trafiłem na ten program.{' '}
            <Highlight nopadding>
              W końcu ktoś opisał tematy, które wcześniej trzeba było latami rozpracowywać samemu.
            </Highlight>
          </>
        }
        author="Marcin Kapica"
        title="Senior Software Engineer"
      />

      <Testimonial
        imageSrc="/spwz/bartek.jpg"
        quote={
          <>
            Na początku przygody z kodowaniem wydawało mi się, że najważniejsze są twarde skille.
            Programista ma pisać kod - rozwiązywać problemy. Po latach wiem, że{' '}
            <Highlight nopadding>samo programowanie to tylko wierzchołek góry lodowej</Highlight>.
            Krzysztof konkretnie pokazuje jak dawać wartość. Kompleksowo omawia tematy miękkie,
            które są niezbędne, aby osiągnąć (również własne) cele. Bardzo szanuję formę i sposób
            komunikacji - <Highlight nopadding>bez wciskania rzeczy na siłę</Highlight>, a po prostu
            przedstawienie własnych przemyśleń. Polecam wszystkim devom.
          </>
        }
        author="Bartek Witczak"
        title="Software Architect"
      />

      <p style={{ textAlign: 'center', marginTop: 'var(--spacing-10)' }}>
        <BuySPWZButton />
      </p>

      <hr className="hr-spwz" />

      <FAQ />
    </>
  )
}
