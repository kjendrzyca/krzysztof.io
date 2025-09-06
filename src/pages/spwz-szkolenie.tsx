/* eslint-disable @next/next/no-img-element */
import React from 'react'
import ReactMarkdown from 'react-markdown'
import NextImage from 'next/image'
import Head from 'next/head'

import { Layout } from '@/components/layout'
import SEO from '@/components/seo'
import { Highlight } from '@/components/Highlight'
import { ResponsiveH1 } from '@/components/ResponsiveH1'
import { Countdown } from '@/components/Countdown'
import { CenteredH2 } from '@/components/CenteredH2'
import { MarkdownWithHighlights } from '../components/MarkdownWithHighlights'

const SPWZSzkoleniePage = () => {
  return (
    <Layout isLandingPage>
      <SEO
        title="Jak szybciej wskoczyć na poziom seniora (i wyżej), zbudować mocną pozycję w zespole i zacząć pracować na własnych zasadach."
        description={`W 90 minut rozłożymy na części pierwsze system, którego używam od ponad 10 lat. Zobaczysz, na czym polega "postawa rzemieślnika" i poznasz 5 konkretnych strategii znajdowania tego, co jest naprawdę wartościowe w Twoim zespole, by następnie skutecznie wymienić to na wpływ, kontrolę i lepsze warunki pracy.`}
        slug="spwz-szkolenie"
        ogType="page"
        ogImagePath="/spwz/spwz-szkolenie-2-og.png"
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

      <h3
        style={{
          fontSize: '1.3rem',
          textAlign: 'center',
          fontWeight: '700',
        }}
      >
        Szkolenie online 💻
      </h3>

      <ResponsiveH1>
        <Highlight>
          Jak szybciej wskoczyć na poziom seniora (lub wyżej), zbudować mocną pozycję w zespole i
          zacząć pracować na własnych zasadach.
        </Highlight>
      </ResponsiveH1>

      <h2
        style={{
          fontSize: '1.3rem',
          fontWeight: 'normal',
          lineHeight: '1.5',
          textAlign: 'center',
        }}
      >
        W <strong>90 minut</strong> rozłożymy na części pierwsze system,
        <br />
        którego używam od <strong>ponad 10 lat</strong>.<br />
        <br />
        Zobaczysz, na czym polega <strong>&ldquo;postawa rzemieślnika&rdquo;</strong> i poznasz{' '}
        <strong>5 konkretnych strategii</strong> na identyfikowanie oraz rozwijanie{' '}
        <strong>najbardziej wartościowych umiejętności</strong> w zespole, by potem skutecznie{' '}
        wymienić je na <strong>wpływ, kontrolę i lepsze warunki pracy</strong>.
      </h2>

      <p style={{ textAlign: 'center', marginTop: 'var(--spacing-10)' }}>
        <DolaczDoSzkoleniaButton />
      </p>

      <hr className="hr-spwz" />

      <CenteredH2>
        <span style={{ borderBottom: '2px dashed var(--color-primary)', lineHeight: '2.5rem' }}>
          Start: środa, 10 września 2025 o 19:00
        </span>
      </CenteredH2>

      <p style={{ textAlign: 'center', fontSize: '3rem', fontWeight: 'bold' }}>
        <Countdown date={new Date('2025-09-10T19:00:00+02:00')} />
      </p>

      <hr className="hr-spwz" />

      <CenteredH2>Dla kogo to szkolenie?</CenteredH2>

      <ReactMarkdown>
        {`
✅ Czujesz, że Twoja kariera utknęła w miejscu, mimo że jesteś dobrym programistą.

✅ Czujesz, że zasługujesz na więcej niż dostajesz.

✅ Masz dość pracy w chaosie, gaszenia pożarów i przerzucania się odpowiedzialnością.

✅ Chcesz mieć wpływ na decyzje w projekcie, a nie tylko wykonywać zadania z Jiry.

✅ Denerwuje Cię, gdy Twoje pomysły są ignorowane, a Twoje zaangażowanie niedoceniane.

✅ Nie chcesz szukać nowej pracy w obecnej sytuacji rynkowej i chcesz poprawić, co możesz, w obecnej.

✅ Stresujesz się na myśl o rozmowie o awansie lub podwyżce i fajnie gdyby to było formalnością.

✅ Widzisz, że same umiejętności techniczne to za mało, by wejść na kolejny poziom.

lub

🚀 Dopiero zaczynasz w IT i chcesz sobie to wszystko dobrze poustawiać od początku.
`}
      </ReactMarkdown>

      <CenteredH2>Czego dokładnie się dowiesz?</CenteredH2>

      <ReactMarkdown>
        {`
**Przeanalizujemy model „Kapitału Zawodowego”**. Zobaczysz, dlaczego samo uczenie się nowych technologii to często ślepy zaułek i jak, zamiast tego, przyjąć „postawę rzemieślnika”, by świadomie budować umiejętności, które mają **prawdziwą** wartość dla Twojego otoczenia.

**Poznasz 5 praktycznych strategii, by odkryć, jakie umiejętności i działania mają największe znaczenie w Twoim zespole** - nawet te, o których nikt głośno nie mówi.

**Dowiesz się, jak precyzyjnie ustalić z liderem plan rozwoju i mierzalne cele**, by rozmowy o awansie czy podwyżce były oparte na konkretnych dowodach Twojego wkładu, a nie na ogólnych odczuciach.

**Na koniec przyjrzymy się umiejętnościom z zakresu pracy zespołowej i komunikacji**. Wyjaśnię, dlaczego uważam je za najszybszą dźwignię do budowania autorytetu i pokażę, że jest to obszar, który wielu seniorów wciąż ignoruje, tracąc przy tym szansę na szybszy rozwój.

`}
      </ReactMarkdown>

      <CenteredH2>Co dostaniesz gdy dołączysz?</CenteredH2>

      <MarkdownWithHighlights>
        {`
✅ Link do **90-minutowego szkolenia na żywo** i przypomnienie w dniu startu.

✅ Możliwość zadawania pytań podczas **sesji Q&A** na żywo.

✅ **Dostęp do nagrania** - wysyłam na następny dzień wraz z dodatkowymi materiałami.

✅ **Mindmapa ze szkolenia** - kompletny proces poruszany na szkoleniu w postaci wizualnej ściągi.

✅ **Lista sugestii** - praktyczna checklista, która ===przeprowadza Cię przez cały proces opisywany na szkoleniu===. Dzięki temu od razu wiesz, co robić następnego dnia.

✅ **E-book: „Zacznij dowozić zadania, w czasie krótszym o połowę”** - mój system pracy z zadaniami, który od lat pomaga mi dbać o jakość i znacznie skracać czas ich realizacji. Dokument dostajesz od razu, w mailu potwierdzającym.

Dodatkowo: Na sam koniec szkolenia przedstawię też krótko **III edycję programu szkoleniowego ["Skuteczna praca w zespole"](/spwz-oferta/)** i otworzę do niego zapisy.
`}
      </MarkdownWithHighlights>

      <p
        style={{
          textAlign: 'center',
          marginTop: 'var(--spacing-10)',
          marginBottom: 'var(--spacing-10)',
        }}
      >
        <DolaczDoSzkoleniaButton />
      </p>

      <hr className="hr-spwz" />

      <CenteredH2>Kilka słów o mnie</CenteredH2>

      <p>
        <span
          className="image-wrapper"
          style={{ textAlign: 'center' }}
        >
          <NextImage
            src="/spwz/face.jpg"
            width={282}
            height={282}
            alt="Opinie"
          />
        </span>
      </p>

      <h3 style={{ textAlign: 'center', marginTop: 0 }}>Krzysztof Jendrzyca / @kjendrzyca</h3>

      <MarkdownWithHighlights>
        {`
Pracuję w IT od 2013 roku. Zaczynałem w software housie, w wieloletnim legacy, a z czasem trafiłem do startupów.

Byłem programistą, liderem technicznym, architektem i doradcą. Ta droga pokazała mi, że **same umiejętności techniczne nie wystarczą.**

Widziałem projekty, które były ogarnięte technicznie, ale upadały przez złą komunikację.

Obserwowałem świetnych programistów, którzy wypalali się, bo utknęli w dysfunkcyjnych zespołach.

Sam byłem w miejscu, w którym czułem, że mimo wiedzy i zaangażowania, stoję w miejscu, a moja praca jest niedoceniana.

**Skąd wiem, że podejście, które prezentuję, działa?**

Bo nie jest to zbiór teorii z książek.

To system, który powstał w oparciu o lata praktyki i setki rozmów.

- **Widziałem większość antypatternów.** Pracując w różnych rolach, miałem okazję zobaczyć, co psuje projekty od środka - zarówno w kodzie, jak i w zespołach. Wiem, jak sobie z tym radzić i jakich błędów unikać.
- **Od lat pomagam naprawiać to, co nie działa w zespole.** Praktycznie każdy zespół, w którym pracowałem, musiał uporać się z jakimiś dysfunkcjami. Zawsze staram się z tym pomóc, bo inaczej nie da się sensownie pracować. Wiem, co działa, a co jest tylko stratą czasu.
- **Wszystko weryfikuję w praktyce.** Wiedzą z tego programu dzielę się na konferencjach, warsztatach i w codziennej pracy. Każdy model i taktyka zostały przetestowane w boju i przepuszczone przez mój "bullshit detector" - sieć doświadczonych znajomych z branży: od programistów, przez managerów, po założycieli firm.

**Moje podejście:**

===Tworzę swoje szkolenia, bo mam dość powierzchownych rozwiązań, które nie mają przełożenia na rzeczywistość.=== Wierzę, że:

- **Programowanie to rzemiosło, a nie wyścig.** Skupiam się na jakości, świadomym rozwoju i dostarczaniu wartości biznesowej, a nie tylko na "klepaniu tasków".
- **Praktyka jest ważniejsza niż teoria.** Daję Ci konkretne, sprawdzone narzędzia i modele myślowe, a nie akademickie definicje.
- **Szczerość buduje zaufanie.** Mówię wprost o problemach i pułapkach, również tych, w które sam wpadłem.

===Chcę Ci dać system, którego mi brakowało na początku mojej drogi.=== System, który pomoże Ci odzyskać kontrolę, zbudować silną pozycję w zespole i czerpać satysfakcję z pracy, na którą zasługujesz.

Jeśli to podejście z Tobą rezonuje, to jesteś we właściwym miejscu.
`}
      </MarkdownWithHighlights>

      <hr className="hr-spwz" />

      <CenteredH2>Kilka opinii od odbiorców moich treści:</CenteredH2>

      <p>
        <span className="image-wrapper">
          <NextImage
            src="/spwz/testimonials-email.png"
            fill={true}
            alt="Opinie"
          />
        </span>
      </p>

      <p style={{ textAlign: 'center', marginTop: 'var(--spacing-10)' }}>
        <DolaczDoSzkoleniaButton />
      </p>
    </Layout>
  )
}

function DolaczDoSzkoleniaButton() {
  return (
    <button
      type="button"
      className="primary-button"
      style={{ maxWidth: '232px', textTransform: 'uppercase' }}
      onClick={() =>
        (window.location.href = 'https://landing.mailerlite.com/webforms/landing/q5y3j2')
      }
      data-umami-event="spwz-subscribe-button-clicked-szkolenie"
    >
      Dołączam
    </button>
  )
}

SPWZSzkoleniePage.theme = 'light'

export default SPWZSzkoleniePage
