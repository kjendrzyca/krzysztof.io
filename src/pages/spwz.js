import React, { useState } from "react"
import ReactMarkdown from 'react-markdown'
import NextImage from 'next/image'
import { useTheme } from 'next-themes'

import {Layout} from "@/components/layout"
import SEO from "@/components/seo"
import { SubscribeSPWZ, SubscribeSPWZToggleButton } from "@/components/mailerLiteSPWZ"
import ShareButtons from "@/components/shareButtons"
import { config } from "@/config"
import { SPWZEbook } from "@/components/SPWZEbook"

const czemuCiSieToPrzydaMd = `
Gdy zaczynałem pracę, to nie wiedziałem **jak stwierdzić, czy robię dobrą robotę**
i jak moja praca zostanie oceniona przez zespół i pracodawcę.

Nie chciałem być jednym z tych bezbronnych płatków śniegu, na których nie można polegać,
trzeba ciągle pilnować i od których nie można ogólnie zbyt wiele wymagać.

Dlatego zacząłem obserwować najbardziej kompetentne osoby, które udało mi się znaleźć,
a potem dekonstruowałem, wdrażałem w życie i testowałem ich sposoby pracy.

Szukałem sposobów, które pozwolą mi zrozumieć, spełnić i przekroczyć stawiane przede mną oczekiwania.

Szukałem elementów wspólnych, które pozwolą mi nabić punkty splendoru i odblokować korzyści
w postaci lepszych projektów, większej swobody w robieniu rzeczy po swojemu oraz lepszego wynagrodzenia.

Nauczyłem się, że **nikt nie musi czekać, żeby zacząć zachowywać się jak doświadczony programista.**
Można zacząć od razu - od zmiany mindsetu.

Wpisowe polega na tym, żeby **wziąć odpowiedzialność nie tylko za pisanie kodu**,
ale też za dobrą współpracę z zespołem, z klientem, z pracodawcą i za dowożenie zadań najwyższej jakości.

Dzięki wsparciu wielu doświadczonych osób udało mi się wypracować model,
który przekazuję od kilku lat wszystkim zainteresowanym - indywidualnie i w każdym kolejnym projekcie, do którego dołączam.

Po jakimś czasie zauważyłem dwie rzeczy:

- Ci, którzy go stosują, stopniowo zaczynają być uważani za najbardziej ogarnięte osoby w projekcie, przestają mieć problemy na rozmowach o kasę i często naturalnie wchodzą w role liderskie w swoich zespołach.
- Brakuje sprawdzonych w boju, uporządkowanych informacji, które można szybko zaaplikować u siebie, a niektórzy nie mają w swoim otoczeniu osób, od których można się uczyć.

Dlatego postanowiłem zebrać to, czego się nauczyłem, a potem przefiltrowałem, zostawiłem to, co w mojej ocenie jest najważniejsze i wziąłem się za tworzenie programu, który nazwałem "Skuteczna Praca w Zespole".

Chcę podać Ci tę wiedzę w przystępnej formie, bez coachingu, bez wciskania kitu na siłę i bez mówienia o tym, co "musisz" i "powinieneś".

**Dostajesz tylko to, co działa** u mnie i u ludzi, których znam. Nakreślam też kontekst, który podpowie Ci jak zaaplikować tę wiedzę u siebie.

Moim celem jest pokazać Ci jak zostać dojrzałym, godnym zaufania, cenionym członkiem zespołu.
`

const dlaKogoMd = `
"Skuteczna Praca w Zespole" to miejsce dla tych, którzy chcą wziąć odpowiedzialność za wszystkie aspekty tworzenia oprogramowania, a nie tylko za klikanie w klawiaturę.

Dla osób, które wierzą w to, że nie samym kodem człowiek żyje i chcą poprawić swoje warunki zatrudnienia, rozwijając też inne umiejętności.

Dotychczas dołączyło **ponad 1000** takich osób.

Materiały są pisane z myślą o ludziach, którzy programują, bo sam to robię, ale sprawdzają się też u innych, niezależne od roli.
`

const kilkaSlowOMnieMd = `
Jako programista pracowałem w różnych projektach. Od 10-letniego legacy kodu, po szybkie dwumiesięczne startupowe projekty,
gdzie liczyło się szybkie dowiezienie funkcjonalności, żeby sprawdzić, czy ma on szansę zaistnieć na rynku.

Pełniłem funkcję lidera technicznego, architekta, czy doradcy technicznego, który pomaga rozwijać wiele różnych projektów jednocześnie.

Miałem przyjemność współtworzyć zespoły od zera, przechodząc przez wszystkie fazy jego formowania.
Pomagałem przekształcać dysfunkcyjne zespoły w takie, które wydajnie rozwiązują wszystkie napotkane problemy.

Poznałem najprawdopodobniej każdy możliwy antypattern dotyczący kodu i ludzkiego zachowania w zespole. Po latach pracy wiem, jak sobie z nimi radzić.

Wiedzę, którą zdobyłem, weryfikuję przez dzielenie się nią na konferencjach, warsztatach, w pracy na etacie oraz online.

Rolę bullshit detectora pełni też bogata siatka znajomych,
wśród których znajdują się doradcy techniczni, konsultanci, analitycy biznesowi, scrum masterzy,
product ownerzy, CTO, oraz założyciele firm zajmujących się tworzeniem oprogramowania.

Ich feedback pozwala ujawnić luki w moim myśleniu, które od razu poprawiam.
`

const coKiedyMd = `
W ostatnich miesiącach pracowałem nad pełnym programem o pracy w zespole i niedawno go ukończyłem.

W czasie tej pracy porządkowałem wiedzę na ten temat, tworzyłem spójne notatki i układałem je w sensowny flow.

Dużą ilość tych materiałów udostępniam teraz w formie cotygodniowego mailingu, na który możesz się tutaj zapisać.

Otrzymasz też **najlepszą ofertę dołączenia do pełnej wersji programu**, gdy znowu będzie dostępny.
`

const SPWZPage = () => {
  const siteUrl = config.siteMetadata.siteUrl
  const social = config.siteMetadata.social.social

  const { theme } = useTheme()
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => setShowPopup(showPopup => !showPopup)

  return (
    <Layout isLandingPage>
      <SEO
        title="Skuteczna Praca w Zespole"
        description="Program szkoleniowy o nawykach, modelach mentalnych oraz sposobach pracy doświadczonych programistów"
        slug="spwz"
        ogType="page"
        ogImagePath="/spwz/spwz-og.png"
      />

      <p style={{marginBottom: 0}}>
        <span className="image-wrapper" style={{textAlign: 'center'}}>
          {theme === 'dark' ? (
            <NextImage src="/spwz/spwz-logo-dark.png" width={100} height={100} alt="Logo" />
          ) :
            <NextImage src="/spwz/spwz-logo-light.png" width={100} height={100} alt="Logo" />
          }
        </span>
      </p>

      <h1 style={{fontSize:'2.5rem', marginTop: 'var(--spacing-6)'}}>
        Poznaj nawyki, modele mentalne oraz sposoby pracy doświadczonych programistów.
      </h1>

      <h2
        style={{
          fontSize: '1.3rem',
          fontWeight: 'normal',
          lineHeight: '1.5',
          textAlign: 'center',
        }}
      >
        W cotygodniowym mailingu pokażę Ci,
        czego nauczyłem się przez ostatnie kilka lat o skutecznej pracy z zespołem,
        klientem, pracodawcą oraz zadaniami i co z tego mam.
      </h2>

      <p style={{textAlign: 'center', marginTop: 'var(--spacing-10)'}}>
        <SubscribeSPWZToggleButton togglePopup={togglePopup} />
      </p>

      <SPWZEbook />

      <hr className="hr-spwz" />

      <CenteredH2>
        Czemu Ci się to przyda?
      </CenteredH2>

      <ReactMarkdown>
        {czemuCiSieToPrzydaMd}
      </ReactMarkdown>

      <hr className="hr-spwz" />

      <CenteredH2>
        Dla kogo?
      </CenteredH2>

      <ReactMarkdown>
        {dlaKogoMd}
      </ReactMarkdown>

      <hr className="hr-spwz" />

      <CenteredH2>
        Co mówią subskrybenci?
      </CenteredH2>

      <p>
        <span className="image-wrapper">
          <NextImage src="/spwz/testimonials-email.png" fill={true} alt="Opinie" />
        </span>
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
        {kilkaSlowOMnieMd}
      </ReactMarkdown>

      <hr className="hr-spwz" />

      <CenteredH2>
        Co i kiedy?
      </CenteredH2>

      <ReactMarkdown>
        {coKiedyMd}
      </ReactMarkdown>

      <p style={{textAlign: 'center', marginTop: 'var(--spacing-10)'}}>
        <SubscribeSPWZToggleButton togglePopup={togglePopup} />
      </p>

      <SubscribeSPWZ showPopup={showPopup} togglePopup={togglePopup} />

      <hr className="hr-spwz" />

      <ShareButtons
         url={`${siteUrl}/spwz`}
         title="Skuteczna Praca w Zespole"
         socialHandle={social}
         text="Będę mega wdzięczny jeśli podzielisz się linkiem do tej strony ze znajomymi, którym może się to wszystko przydać, "
      />
    </Layout>
  )
}

export default SPWZPage

function CenteredH2({children}) {
  return (
    <h2 style={{
      textAlign: 'center',
    }}>
      {children}
    </h2>
  )
}
