import React, { forwardRef, useState } from "react"
import ReactMarkdown from 'react-markdown'
import ReactCountdown from 'react-countdown'
import NextImage from 'next/image'
import { useHasMounted } from '@/lib/hasMounted'

import {Layout} from "@/components/layout"
import SEO from "@/components/seo"
import { SubscribeSPWZSzkolenie, SubscribeSPWZSzkolenieToggleButton } from "@/components/mailerLiteSPWZSzkolenie"
import { Highlight } from "@/components/Highlight"

const Countdown = ({date}) => {
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return null;
  }

  return <ReactCountdown date={date} />
}

const SPWZSzkoleniePage = () => {
  const [showPopup, setShowPopup] = useState(false)

  const togglePopup = () => setShowPopup(showPopup => !showPopup)

  return (
    <Layout isLandingPage>
      <SEO
        title="Jak budować umiejętności jako programista, żeby dostać to, czego chcesz?"
        description={`Pokażę Ci mój proces budowania umiejętności, które są ekstremalnie wartościowe dla ludzi, z którymi współpracuję.`}
        slug="spwz-szkolenie"
        ogType="page"
        ogImagePath="/spwz/spwz-szkolenie-og.png"
      />

      <h3
        style={{
          fontSize: '1.3rem',
          textAlign: 'center',
          fontWeight: '700',
        }}
      >
        Szkolenie online 💻
      </h3>

      <h1 style={{fontSize:'2.5rem', marginTop: 'var(--spacing-6)', lineHeight: '3.2rem'}}>
        <Highlight>Jak budować umiejętności jako programista, żeby dostać to, czego chcesz?</Highlight>
      </h1>

      <h2
        style={{
          fontSize: '1.3rem',
          fontWeight: 'normal',
          lineHeight: '1.5',
          textAlign: 'center',
        }}
      >
        Poznasz <strong>proces budowania umiejętności</strong>, które są <strong>ekstremalnie wartościowe</strong> dla ludzi, z którymi współpracujesz (w tym Twojego lidera / managera).<br /><br />
        Dowiesz się, jak dzięki nim <strong>zapewnić sobie w pracy to, czego potrzebujesz</strong>, m.in.:{' '}
        większy wpływ na decyzje w projekcie, <br />zmianę roli, lepsze zarobki.
      </h2>

      <p style={{textAlign: 'center', marginTop: 'var(--spacing-10)'}}>
        <SubscribeSPWZSzkolenieToggleButton togglePopup={togglePopup} />
      </p>

      <hr className="hr-spwz" />

      <CenteredH2>
        <span style={{borderBottom: '2px dashed var(--color-primary)', lineHeight: '2.5rem',}}>Start: wtorek, 1 października 2024</span>
      </CenteredH2>

      <p style={{textAlign: 'center', fontSize: '3rem', fontWeight: 'bold'}}>
        <Countdown date={new Date('2024-10-01T19:00:00+02:00')} />
      </p>

      <hr className="hr-spwz" />

      <CenteredH2>
        Podczas szkolenia:
      </CenteredH2>

      <ReactMarkdown>
        {`
👉 Poznasz moją smutną historię o tym, jak myślałem, że zasługuję na awans i ciekawsze zadania, ale nikt poza mną tak nie uważał.

👉 Pokażę Ci, jak uporałem się z tym problemem i jak teraz zwiększam swoją wartość w oczach pracodawcy.

👉 Dowiesz się jak budować wartościowe umiejętności i zdobywać informacje o tym, które z nich są najważniejsze.

**Co mi dało to podejście w ciągu ostatnich 10 lat pracy?**

🎯 Brak stresu na rozmowach okresowych.

🎯 Mam większy wpływ na aspekty techniczne w projektach.

🎯 Większy wybór projektów i osób, z którymi współpracuję.

🎯 Nie mam problemów z "negocjowaniem" podwyżki (bo nie muszę tego robić).

🎯 Dla klientów nie jestem już losowym klepaczem kodu, tylko ważną osobą z punktu widzenia biznesu.

\\+ Kilka innych.

🎁 Na koniec otrzymasz mindmapę ze szkolenia i **dodatkowe materiały**, które pomogą Ci przejść cały proces samodzielnie.
`}
      </ReactMarkdown>

      <CenteredH2>
        Dodatkowo
      </CenteredH2>

      <ReactMarkdown>
        {`
🚀 Przedstawię Ci **drugą edycję programu szkoleniowego "Skuteczna Praca w Zespole"**.

- Nad czym pracowałem przez ostatnie dwa lata?
- Co znajdziesz w prawie 20 godzinach nagrań?
- Dlaczego jest to **jedyny taki program** na rynku?
`}
      </ReactMarkdown>

      <p style={{textAlign: 'center', marginTop: 'var(--spacing-10)', marginBottom: 'var(--spacing-10)'}}>
        <SubscribeSPWZSzkolenieToggleButton togglePopup={togglePopup} />
      </p>

      <hr className="hr-spwz" />

      <CenteredH2>
        Kilka słów o mnie
      </CenteredH2>

      <p>
        <span className="image-wrapper" style={{textAlign: 'center'}}>
          <NextImage src="/spwz/face.jpg" width={282} height={282} alt="Opinie" />
        </span>
      </p>

      <h3 style={{textAlign: 'center', marginTop: 0}}>Krzysztof Jendrzyca / @kjendrzyca</h3>

      <ReactMarkdown>
        {`
Jako programista pracowałem w różnych projektach. Od 10-letniego legacy kodu, po szybkie dwumiesięczne startupowe projekty,
gdzie liczyło się szybkie dowiezienie funkcjonalności, żeby sprawdzić, czy ma on szansę zaistnieć na rynku.

Pełniłem funkcję lidera technicznego, architekta, czy doradcy technicznego, który pomaga rozwijać wiele różnych projektów jednocześnie.

Miałem przyjemność współtworzyć zespoły od zera, przechodząc przez wszystkie fazy jego formowania.
Pomagałem przekształcać dysfunkcyjne zespoły w takie, które wydajnie rozwiązują wszystkie napotkane problemy.

Poznałem najprawdopodobniej **każdy możliwy antypattern dotyczący kodu i ludzkiego zachowania w zespole**. **Po latach pracy wiem, jak sobie z nimi radzić**.

Swoje doświadczenia weryfikuję przez dzielenie się nimi na konferencjach, warsztatach, w pracy na etacie oraz online.

Rolę bullshit detectora pełni też bogata siatka znajomych,
wśród których znajdują się doradcy techniczni, konsultanci, analitycy biznesowi, scrum masterzy,
product ownerzy, CTO, oraz założyciele firm zajmujących się tworzeniem oprogramowania.
`}
      </ReactMarkdown>

      <hr className="hr-spwz" />

      <CenteredH2>
        Kilka opinii od odbiorców moich treści:
      </CenteredH2>

      <p>
        <span className="image-wrapper">
          <NextImage src="/spwz/testimonials-email.png" fill={true} alt="Opinie" />
        </span>
      </p>

      <p style={{textAlign: 'center', marginTop: 'var(--spacing-10)'}}>
        <SubscribeSPWZSzkolenieToggleButton togglePopup={togglePopup} />
      </p>

      <hr className="hr-spwz" />

      <SubscribeSPWZSzkolenie showPopup={showPopup} togglePopup={togglePopup} />
    </Layout>
  )
}

SPWZSzkoleniePage.theme = 'light'

export default SPWZSzkoleniePage

const CenteredH2 = forwardRef(({children}, ref) => {
  return (
    <h2
      style={{
        textAlign: 'center',
      }}
      ref={ref}
    >
      {children}
    </h2>
  )
})

CenteredH2.displayName = 'CenteredH2'
