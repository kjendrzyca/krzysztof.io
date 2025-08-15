import React, { forwardRef } from "react"
import ReactMarkdown from 'react-markdown'
import NextImage from 'next/image'


import {Layout} from "@/components/layout"
import SEO from "@/components/seo"
import { Highlight } from "@/components/Highlight"

const SPWZEbookPage = () => {
  const redirectToEbook = () => window.location = 'https://kjendrzyca.notion.site/Zacznij-dowozi-zadania-w-czasie-kr-tszym-o-po-ow-8073e7f6a8b44bcf8168ea178fed5901'


  return (
    <Layout isLandingPage>
      <SEO
        title="Zacznij dowozić zadania, w czasie krótszym o połowę"
        description={`Od revertowania MR do pewności, że QA nie znajdzie bugów. Sprawdzony w praktyce proces planowania i realizacji zadań dla programistów w 7 krokach. Pobierz za darmo.`}
        slug="spwz-ebook"
        ogType="page"
        ogImagePath="/spwz/spwz-ebook-og.png"
      />

      <h3
        style={{
          fontSize: '1.3rem',
          textAlign: 'center',
          fontWeight: '700',
        }}
      >
        Darmowy ebook 📖
      </h3>

      <h1 style={{fontSize:'2.6rem', marginTop: 'var(--spacing-6)', lineHeight: '3.2rem'}}>
        <Highlight>Od revertowania merge requestów do pewności, że QA nie znajdzie żadnych bugów</Highlight>
      </h1>

      <h2
        style={{
          fontWeight: 'normal',
          lineHeight: '1.5',
          textAlign: 'center',
        }}
      >
        Sprawdzony w praktyce proces <strong>planowania i realizacji</strong> zadań dla programistów w <strong>7 krokach</strong>.

      </h2>

      <p style={{textAlign: 'center', marginTop: 'var(--spacing-10)'}}>
        <PobieramButton redirectToEbook={redirectToEbook} />
      </p>

      <hr className="hr-spwz" />

      <CenteredH2>
        Problem, z którym walczyłem miesiącami
      </CenteredH2>

      <ReactMarkdown>
{`Kiedyś spędzałem zbyt dużo czasu na zadaniach, które wydawały mi się proste.

Często zaczynałem implementację, licząc na to, że "w trakcie się wyjaśni", a kończyłem na chaotycznych commitach i z nadzieją, że na Code Review nikt nie wyłapie niczego poważnego.

Brzmi znajomo?

Przez długi czas przeleciałem na autopilocie, w trybie reagowania. Doskonale pamiętam, jak wielokrotnie ryzykowałem i zaczynałem pracować nad zadaniem, które nie do końca rozumiałem. Czasem się udawało, ale równie często musiałem:

**👉 Spędzać olbrzymie ilości czasu na dogadywaniu szczegółów, żeby się dowiedzieć, że nikt nie rozumie, co trzeba zrobić**

**👉 Wprowadzać grube poprawki już po "ukończeniu" zadania**

**👉 Przepisywać wszystko od początku**

**👉 Revertować zmiany, bo zupełnie źle podeszedłem do zadania**

Najgorsze było to poczucie, że kolejne zadanie może się skończyć podobnie. Nie miałem kontroli nad tym, co robię i czy w ogóle idę w dobrym kierunku.`}
      </ReactMarkdown>

      <CenteredH2>
        Co się zmieniło?
      </CenteredH2>

      <ReactMarkdown>
        {`
Przestałem rzucać się w kod na ślepo i zacząłem planować.

Nie mówię tu o wielostronicowych dokumentach czy skomplikowanych diagramach, tylko o prostym procesie, który składa się z 7 kroków:

👉 **Pytam, dopóki nie zrozumiem co mam zrobić** (za każdym razem, gdy "zgaduję" wymagania, może się okazać, że klient zapyta "kto ci kazał to tak zakodzić?")

👉 **Definiuję, co oznacza, że zadanie jest dowiezione** (żeby nie ulepszać w nieskończoność)

👉 **Określam, co jest najważniejsze** (Kent Beck: "Make it work. Make it right. Make it fast" - w tej kolejności)

👉 **Rozpisuję poszczególne kroki** (każdy punkt musi być na tyle mały, żeby móc oszacować, ile zajmie)

👉 **Zaczynam implementować i notować** (żeby nie trzymać wszystkiego w głowie)

👉 **Cały czas koryguję plan** (plan to nie sztywna lista, tylko żyjący dokument)

👉 **Testuję to, co zakodziłem** (Bo QA nie są po to, żeby znajdywać bugi)
`}
      </ReactMarkdown>

      <CenteredH2>
        Co mi to dało w praktyce
      </CenteredH2>

      <ReactMarkdown>
        {`
Mówi się, że każda minuta spędzona na planowaniu może zaoszczędzić 10 minut.

U mnie jest to **znacznie więcej niż 10 minut.**

Niejednokrotnie byłem świadkiem sytuacji, w której ktoś walczył z "bugiem" przez **kilka dni (!)**, żeby na końcu zamknąć merge requesta, bo tak naprawdę to nie był żaden bug. Albo, że po kilku dniach trzeba dopytać o jakieś podstawowe szczegóły.

Głupio by mi było, gdybym to był ja.

U mnie ten proces sprawdza się od lat. Mniej się stresuję, lepiej mi się pracuje, a jakość dowożonych rozwiązań wzrosła wielokrotnie. Zespół nie musi podcierać mi noska przy każdej okazji.
`}
      </ReactMarkdown>

      <CenteredH2>
        Jak wygląda ten proces w praktyce
      </CenteredH2>

      <ReactMarkdown>
{`W darmowym ebooku **"Zacznij dowozić zadania, w czasie krótszym o połowę"** opisuję dokładnie każdy z tych siedmiu kroków.

Znajdziesz tam:

**🎯 Konkretne przykłady z mojego doświadczenia**

**🎯 Błędy, które popełniałem i jak ich uniknąć**

**🎯 Narzędzia, z których korzystam na co dzień**

**🎯 3 dodatkowe bonusy** (w tym dlaczego zawsze przeglądam nawet najmniejsze zmiany przed wrzuceniem na CR)

Cały dokument napisałem w taki sposób, żeby każdy - od juniora do seniora - mógł wdrożyć ten sposób pracy już jutro.

📎 Dokument jest:
- za darmo,
- bez paywalla,
- bez maila.

**Klikasz i czytasz.**
`}
      </ReactMarkdown>

      <p style={{textAlign: 'center', marginTop: 'var(--spacing-10)', marginBottom: 'var(--spacing-10)'}}>
        <PobieramButton redirectToEbook={redirectToEbook} />
      </p>

      <ReactMarkdown>
        {`*Ebook przeczytasz w maksymalnie godzinę. To inwestycja, która może Ci zaoszczędzić setki godzin frustracji.*`}
      </ReactMarkdown>

      <hr className="hr-spwz" />

      <ReactMarkdown>
{`**P.S.** Jeśli ten sposób myślenia o pracy przypadnie Ci do gustu, to w mailingu [skutecznapracawzespole.pl](/spwz/) wrzucam więcej podobnych treści - konkretnych, sprawdzonych w praktyce technik, które pomagają mi na co dzień w pracy programisty.`}
      </ReactMarkdown>

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
        <PobieramButton redirectToEbook={redirectToEbook} />
      </p>
    </Layout>
  )
}

SPWZEbookPage.theme = 'light'

export default SPWZEbookPage

const PobieramButton = ({ redirectToEbook }) => (
  <button
    type="button"
    className="primary-button"
    style={{ maxWidth: '232px', textTransform: 'uppercase' }}
    onClick={redirectToEbook}
    data-umami-event="spwz-ebook-notion-visited"
  >
    Pobieram
  </button>
);


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
