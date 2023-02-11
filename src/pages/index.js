import SEO from '@/components/seo';
import Head from 'next/head'
import Link from 'next/link';

import {Layout} from "../components/layout"

function IndexLink({ title, slug, hot }) {
  return (
    <li>
      <Link href={slug}>
        {hot ? <span role="img" aria-label="Nowy wpis">🔥 </span> : null}
        <span itemProp="headline">{title}</span>
      </Link>
    </li>
  )
}

const BlogIndex = () => {
  return (
    <Layout>
      <SEO title="Strona główna" />

      <Head>
        <title>Strona główna</title>
      </Head>

      <p>
        Heja! 👋
      </p>
      <p>
        Nazywam się Krzysztof Jendrzyca i zawodowo jestem programistą. Pomagam dowozić projekty oparte o React oraz Node.js.
      </p>

      <p>
        Ta <a href="https://joelhooks.com/digital-garden">strona</a> to moje miejsce do myślenia, <a href="https://www.swyx.io/learn-in-public/">uczenia się na głos</a> i skracania pętli feedbackowej.{' '}
        Jest to baza wypadowa wszystkich moich projektów.
      </p>

      <p>
        Obecnie pracuję nad projektem <a href="https://skutecznyprogramista.pl">skutecznyprogramista.pl</a>, który składa się z mailingu i programu szkoleniowego online.
      </p>

      <p>
        Znajdziesz też tutaj moje obserwacje i notatki na tematy, które obecnie mnie interesują,{' '}
        m.in. tworzenie treści i notatek, tworzenie produktów, produktywność, praca w IT, technologie webowe (React, Node).
      </p>

      <blockquote>
        <p>
          An idea kept private is as good as one you never had. And a fact no one can reproduce is no fact at all. Making something public always means to write it down so it can be read.{' '}
          <a href="https://www.goodreads.com/book/show/34507927-how-to-take-smart-notes">~Sönke Ahrens</a>
        </p>
      </blockquote>

      <p>
        Jeśli coś, co tu przeczytasz, w jakiś sposób z Tobą zarezonuje, to podziel się tym z innymi i daj mi znać. Chętnie przyjmę konstruktywny feedback.
      </p>
      <p>
        Żeby pogadać złap mnie na <a href="https://instagram.com/kjendrzyca/">Instagramie</a> lub ew. <a href="https://twitter.com/kjendrzyca/">Twitterze</a>.
      </p>

      <p>
        Tutaj znajdziesz listę <Link href="/narzedzia/">narzędzi</Link>, których używam i <Link href="/linki/">linków</Link>, które wrzucam w świat.
      </p>

      <h3>Wpisy</h3>
      <ul>
        <IndexLink
          title={`"Skuteczna Praca w Zespole" - dziennik prac`}
          slug="sp-dziennik"
        />
        <IndexLink
          title="Podsumowanie 2021"
          slug="podsumowanie-2021"
        />
        <IndexLink
          title="Nieformalna nauka rzemiosła"
          slug="nauka-rzemiosla"
        />
        <IndexLink
          title="W jakim języku tworzyć treści w Internecie?"
          slug="jezyk"
        />
        <IndexLink
          title="Praca bottom-up, czyli dlaczego pozbyłem się wielkiej listy niedowiezionych pomysłów i zacząłem robić notatki"
          slug="bottom-up"
        />
        <IndexLink
          title="Praca przy pomocy pakietów"
          slug="pakiety"
        />
        <IndexLink
          title="Jak czerpię korzyści z Zeigarnik Effect"
          slug="bluma"
        />
        <IndexLink
          title="Prywatny blog"
          slug="prywatny-blog"
        />
        <IndexLink
          title="Cyfrowe odgracanie i walka z uzależnieniem od aplikacji"
          slug="digital-declutter"
        />
        <IndexLink
          title="Upgrade z juniora na doradcę technicznego"
          slug="upgrade"
        />
        <IndexLink
          title={`Praca na "pół gwizdka"`}
          slug="pol-gwizdka"
        />
        <IndexLink
          title="Po co to wszystko?"
          slug="po-co"
        />
        <IndexLink
          title="Zamień to w coś swojego"
          slug="cos-swojego"
        />
        <IndexLink
          title="Skup się na procesie, a nie na wynikach"
          slug="proces"
        />
        <IndexLink
          title="Dokumentuj zamiast tworzyć"
          slug="dokumentuj-zamiast-tworzyc"
        />
        <IndexLink
          title="Jak zbudowałem swój Second Brain"
          slug="second-brain"
        />
        <IndexLink
          title="Rób swoje"
          slug="rob-swoje"
        />
        <IndexLink
          title="Narzędzia, których używam"
          slug="narzedzia"
        />
      </ul>

      <h3>Notatki z książek, artykułów i podcastów</h3>
      <ul>
        <IndexLink
          title="Show Your Work"
          slug="show-your-work"
        />
        <IndexLink
          title="Just Fucking Ship"
          slug="jfs"
        />
        <IndexLink
          title="Steal Like an Artist"
          slug="steal-like-an-artist"
        />
        <IndexLink
          title="Relentless"
          slug="relentless"
        />
        <IndexLink
          title="Building a StoryBrand"
          slug="storybrand"
        />
        <IndexLink
          title="Managing Oneself"
          slug="managing-oneself"
        />
        <IndexLink
          title="Digital Minimalism"
          slug="digital-minimalism"
        />
        <IndexLink
          title="Company of One"
          slug="company-of-one"
        />
        <IndexLink
          title="Live: Płatne newslettery w Polsce"
          slug="platne-newslettery-w-polsce"
        />
        <IndexLink
          title="The Building a Second Brain Podcast"
          slug="basb-podcast"
        />
        <IndexLink
          title="How to Win Friends and Influence People"
          slug="how-to-win-friends-and-influence-people"
        />
      </ul>

      <h3>IT</h3>
      <ul>
        <IndexLink
          title={`Problem Dreamlinera`}
          slug="problem-dreamlinera"
        />
      </ul>
    </Layout>
  )
}

export default BlogIndex
