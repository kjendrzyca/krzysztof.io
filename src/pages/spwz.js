import React, { forwardRef, useRef, useState } from "react"
import ReactMarkdown from 'react-markdown'
import NextImage from 'next/image'

import {Layout} from "@/components/layout"
import SEO from "@/components/seo"
import { SubscribeSPWZ, SubscribeSPWZScrollButton, SubscribeSPWZToggleButton } from "@/components/mailerLiteSPWZ"
import ShareButtons from "@/components/shareButtons"
import { config } from "@/config"
import { SPWZEbook } from "@/components/SPWZEbook"
import { SPWZLogo } from "@/components/SPWZLogo"

const czemuCiSieToPrzydaMd = `
Gdy stawiałem swoje pierwsze kroki jako Software Engineer, to nie wiedziałem **jak stwierdzić, czy robię dobrą robotę**
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
ale też za dobrą współpracę z zespołem, z klientem, z pracodawcą i za stopniowe zwiększanie jakości dowożonych zadań.

Dzięki wsparciu wielu doświadczonych osób udało mi się wypracować model,
który przekazuję od kilku lat wszystkim zainteresowanym - indywidualnie i w każdym kolejnym projekcie, do którego dołączam.

Po jakimś czasie zauważyłem, że Ci, którzy go stosują, stopniowo zaczynają być uważani za najbardziej ogarnięte osoby w projekcie,
przestają mieć problemy na rozmowach o kasę i często naturalnie wchodzą w role liderskie w swoich zespołach.

Tych sprawdzonych w boju, uporządkowanych informacji, które można szybko zaaplikować u siebie, brakuje w Internecie,
a niektórzy nie mają w swoim otoczeniu osób, od których można się uczyć.

Dlatego postanowiłem zebrać to, czego się nauczyłem, a potem przefiltrowałem, zostawiłem to, co w mojej ocenie jest najważniejsze i wziąłem się za tworzenie tego programu.

Chcę podać Ci tę wiedzę w przystępnej formie, bez coachingu, bez wciskania kitu na siłę i bez mówienia o tym, co "musisz" i co "powinieneś".

**Dostajesz tylko to, co działa** u mnie i u ludzi, których znam. Nakreślam też kontekst, który podpowie Ci jak zaaplikować tę wiedzę u siebie i zmodyfikować podejście w razie potrzeby.

Moim celem jest pokazać Ci jak zostać dojrzałym, godnym zaufania, cenionym członkiem zespołu.
`

const coZnajdzieszMd = `
"Skuteczna Praca w Zespole" to **231 materiałów wideo** i **2 tekstowe** podzielonych na **20 modułów**. Łącznie jest to **19 godzin i 10 minut** nagrań podzielone na **10 tygodni** pracy.

Pod każdym modułem znajduje się lista sugestii, które możesz zaaplikować u siebie. Dorzucam też sporo materiałów zewnętrznych, które pomagały mi przez te wszystkie lata.

Nie jest to kolejny kursik, tylko pełny program szkoleniowy, którego celem jest przeprowadzić Cię od punktu A do punktu B i po drodze pokazać to, co najważniejsze.

W tym programie nie ma lekcji, zadań domowych oraz certyfikatów. Nie mam aspiracji, żeby być Twoim nauczycielem i nie chcę Cię niańczyć.

Chcę Ci po prostu pomóc zaaplikować tę wiedzę u siebie.
`

const dlaKogoMd = `
"Skuteczna Praca w Zespole" to miejsce dla tych, którzy chcą wziąć odpowiedzialność za wszystkie aspekty tworzenia oprogramowania, a nie tylko za klikanie w klawiaturę.

Dla osób, które wierzą w to, że nie samym kodem człowiek żyje i chcą poprawić swoje warunki zatrudnienia, rozwijając też inne umiejętności.

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
Dołączyło do niego już ponad 1000 osób.
Trochę niżej znajdziesz ich opinie.

Otrzymasz też **najlepszą ofertę dołączenia do pełnej wersji programu**, gdy znowu będzie dostępny.
`

const agendaMd = `
### 👉 Wstęp

Dowiesz się, dlaczego warto traktować swoją karierę jako biznes, jak działa model oparty o budowanie kapitału zawodowego i dlaczego pasja jest niepotrzebna, a czasem nawet szkodliwa.

Opowiem Ci moją smutną historię o tym, jak myślałem, że jestem fajny, a nie byłem oraz jak udało mi się ogarnąć i wyjść na prostą.

Pokaże Ci jak budować reputację oraz nabijać punkty splendoru i że umiejętności miękkie (które wcale nie są miękkie) odgrywają w tym kluczową rolę.

Wszystko jest łatwiejsze z mentorem, dlatego powiem Ci jak go szukać.

### 👉 Ustawienie mindsetu

Pokażę Ci, w jaki sposób skrócić pętlę feedbackową i szybciej zdobyć informacje potrzebne do wejścia na wyższy poziom.

Powiem Ci, dlaczego nigdy nie nazywałem się "juniorem" i polecam to samo innym.

Pokażę, że masz wpływ praktycznie na każdy aspekt swojej pracy i możesz wykorzystać to na swoją korzyść.

Dowiesz się, kim są "Iluzjoniści IT" i jak przypadkiem takim nie zostać.

Powiem też pokrótce o tym, jak się rozwijać na własną rękę.

### 👉 Praca z zadaniami

Przedstawię Ci mój sprawdzony w wielu bojach proces planowania i realizacji zadań, którego używam od lat. Obejmuje on m.in.:

- Podział zadania na mniejsze części.
- Zadawanie pytań i zbieranie informacji o tym, co trzeba zrobić.
- Określanie, czy zadanie jest naprawdę skończone.
- Sposoby testowania.
- Raportowanie, informowanie o problemach i radzenie sobie z opóźnieniami.
- Radzenie sobie z blokadą (writer's block).
- Zbieranie feedbacku do zadania.

Dowiesz się:

- Dlaczego warto i jak wymasterować narzędzia, których używasz.
- Jak pracować, żeby nikt nie miał Ci nic do zarzucenia, jak radzić sobie z bagnem w kodzie i jak nie tworzyć nowego.
- Jak radzić sobie z trudnymi zadaniami oraz jak przekuć nudne zadania w coś pozytywnego.
- Jak wyrobić sobie intuicję, która będzie Ci automatycznie podpowiadać dobre i złe rozwiązania.
- Na czym tak naprawdę polega Code Review i jak robić to dobrze.
- Jak sobie radzić, gdy czujesz, że brakuje Ci doświadczenia.
- Dlaczego oraz kiedy stosować TDD. Gdzie i jak najszybciej się go nauczyć.

Opowiem Ci też o najważniejszych elementach pracy z narzędziami do zarządzania pracy zespołu (Jira itp.).

### 👉 Praca w zespole

**Serce tego programu**. Największy i najważniejszy moduł.

Na początek pokażę Ci, dlaczego programowanie to zawsze praca zespołowa i wrzucę kilka szybkich taktyk, które pomogą Ci wykazać się w projekcie. Do zastosowania od zaraz.

Potem krótka sekcja o onboardingu:

- Jak wchodzić na grubo do projektu?
- Jak wprowadzać innych, żeby czuli przynależność?

Przedstawię Ci mój ulubiony i jak dotąd bardzo trafny model, który opisuje, dlaczego niektóre zespoły działają jak grupa komandosów, a inne, jak grupa nieporadnych gęsi.

Powiem Ci, co możesz dać od siebie, żeby stopniowo przesuwać swój zespół w stronę tego pierwszego 💪.

Poruszę też jeden z najważniejszych tematów, czyli komunikację. Pokażę Ci m.in.:

- Jak przekazywać to, co chcesz powiedzieć w jasny, zrozumiały i klarowny sposób.
- Jak dogadać się z ludźmi, w różnych sytuacjach, również konfliktowych, gdy każdy ma odmienne zdanie lub jest wrogo nastawiony.
- Jak to robić, żeby dosadnie przekazać wszystko, co chcesz przekazać, a jednocześnie zminimalizować ryzyko, że kogoś urazisz.
- Jak i kiedy mówić "nie".
- Jak i kiedy mówić "tak".
- Jak prosić o pomoc i komunikować swoje potrzeby.
- Jak w tym wszystkim nie triggerować ludzi ;).

Dowiesz się też m.in:

- Jak rozwiązywać konflikty i kłótnie oraz jak podejmować decyzje w zespole tak, żeby nikt potem nie płakał i nie sabotował podjętych decyzji.
- Jak skutecznie pracować z innymi i jak być dobrym współpracownikiem dla analityków biznesowych, QA, liderów i wszystkich innych, z którymi wchodzisz na co dzień w relacje (również z "wujkami dobra rada" i innymi wykrętami, którzy Cię irytują).
- Jak wyglądają spotkania, na których nikt nie zasypia, które szybko się kończą, a jednocześnie przynoszą rezultaty. Dowiesz się co zrobić, gdy planowania są nudne, a retra to spotkania-wydmuszki, po których nic się nie zmienia.
- Jak propagować wiedzę w zespole.
- Jak zbierać i dawać feedback.
- Jak radzić sobie z presją i nadgodzinami.
- Jak odnaleźć się w zespole, gdzie wszystkim wszystko wydaje się oczywiste, gdzie czujesz dużą różnicę poziomów i brakuje ludzi skorych do pomocy.
- Jak poradzić sobie z nieogarniętym seniorem, który nie robi swojej roboty, jak należy?
- Jak, gdzie, kiedy i kogo informować o problemach w zespole, które wymagają eskalacji?

Powiem też sporo o estymacjach oraz o tym, jak przestawić się na pracę zdalną i asynchroniczną (i jak robić to dobrze).

Na koniec powiem trochę o offboardingu i jak wyjść z projektu nie paląc za sobą mostów i zostawiając dobre wrażenie.

### 👉 Praca z klientem

Pokaże Ci punkt widzenia klienta, kim on jest (w zależności od tego, w jakiego rodzaju firmie pracujesz), co tak naprawdę myśli, czego potrzebuje i jaka jest w tym rola zespołu deweloperskiego.

Dowiesz się:

- Jak dobrze zaprezentować się przed klientem i być kimś więcej niż losowym programistą z Polski, którego imienia nawet nie pamięta.
- Jak przekonać klienta do większej ilości testów, do refactoringu lub innego z Twoich pomysłów.
- Co należy zrobić, gdy pomysły klienta wydają się bezsensowne i nie ma on wg Ciebie prawa działać dobrze, a on niekoniecznie słucha Twojego feedbacku.
- Jak wyciągać od klienta potrzebne informacje i co zrobić, gdy nie wywiązuje się ze swoich zobowiązań.

Dostaniesz sporą dawkę wiedzy o tym, dlaczego jesteśmy tacy słabi w komunikacji z klientem i jak można to poprawić.

Pokażę Ci też, jak pracować z jasnymi oraz niejasnymi wymaganiami i jak przygotować się do spotkań, na których musisz coś zaprezentować przed klientem.

Sprzedam Ci kilka pomysłów na to, jak poprawić swój angielski i powiem, które elementy tego języka przydadzą Ci się najbardziej.

### 👉 Praca z pracodawcą

Powiem Ci, na czym polega dobra relacja z pracodawcą i jak to zrobić, żeby obydwie strony skorzystały na niej jak najwięcej.

Pokażę Ci moje jak dotąd niezawodne podejście do awansów, podwyżek oraz "negocjacji". Dowiesz się, czym tak naprawdę są negocjacje.

Powiem Ci też, za jakie dodatkowe działania ceni nas większość pracodawców.

Przedstawię Ci prosty model inwestowania w siebie i budowania reputacji, która zostanie z Tobą nawet wtedy, gdy zmienisz pracę.

### 👉 Pułapki odpowiedzialności

Na sam koniec opowiem o najbardziej powszechnych pułapkach, które czekają na wszystkich, którzy robią dobrą robotę oraz jak sobie z nimi poradzić i nie dać się wykorzystać.

Pokażę Ci, jak zbalansować pracę w zależności od tego, na co chcesz położyć nacisk w swojej pracy:

- Na napierdzielanie kodu.
- Na mentorowanie i komunikację.
- Na rozwiązywanie problemów.
- Itd.
`

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
        description="Program szkoleniowy o nawykach, modelach mentalnych oraz sposobach pracy doświadczonych programistów"
        slug="spwz"
        ogType="page"
        ogImagePath="/spwz/spwz-og.png"
      />

      <p style={{marginBottom: 0}}>
        <SPWZLogo />
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
        &quot;Skuteczna Praca w Zespole&quot; to program szkoleniowy online, w którym pokażę Ci,
        czego nauczyłem się przez ostatnie kilka lat o skutecznej współpracy z zespołem,
        klientem oraz pracodawcą, jak podchodzę do wykonywania zadań i jakie czerpię z tego wszystkiego korzyści.
      </h2>

      <p style={{textAlign: 'center', marginTop: 'var(--spacing-10)'}}>
        <SubscribeSPWZScrollButton scrollToSection={scrollToSection} />
      </p>

      <hr className="hr-spwz" />

      <CenteredH2>
        Czemu Ci się to przyda?
      </CenteredH2>

      <ReactMarkdown>
        {czemuCiSieToPrzydaMd}
      </ReactMarkdown>

      <hr className="hr-spwz" />

      <CenteredH2>
        Co znajdziesz w środku?
      </CenteredH2>

      <ReactMarkdown>
        {coZnajdzieszMd}
      </ReactMarkdown>

      <p style={{textAlign: 'center', marginTop: 'var(--spacing-10)', marginBottom: 'var(--spacing-10)'}}>
        <SubscribeSPWZScrollButton scrollToSection={scrollToSection} />
      </p>

      <p style={{marginInline: '-22px'}}>
        <span className="image-wrapper" style={{textAlign: 'center'}}>
          <NextImage src="/spwz/edu-frame.png" fill={true} alt="Platforma" />
        </span>
      </p>

      <hr className="hr-spwz" />

      <CenteredH2>
        Agenda
      </CenteredH2>

      <ReactMarkdown className="small-spacing">
        {agendaMd}
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

      <CenteredH2 ref={coKiedyRef}>
        Co i kiedy?
      </CenteredH2>

      <ReactMarkdown>
        {coKiedyMd}
      </ReactMarkdown>

      <SPWZEbook />

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
         text="Będę mega wdzięczny jeśli podzielisz się linkiem do tej strony ze znajomymi, którym może się to wszystko przydać, "
      />

      <SubscribeSPWZ showPopup={showPopup} togglePopup={togglePopup} />
    </Layout>
  )
}

export default SPWZPage

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
