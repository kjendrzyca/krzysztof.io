import SEO from '@/components/seo'
import Head from 'next/head'
import Link from 'next/link'

import { Layout } from '@/components/layout'

type IndexLinkProps = {
  title: string
  slug: string
  createdAt: string
  hot?: boolean
}

function IndexLink({ title, slug, createdAt, hot }: IndexLinkProps) {
  const date = new Date(createdAt)
  const formattedDate = `${date.getFullYear()} · ${String(date.getMonth() + 1).padStart(2, '0')} `

  return (
    <li className="index-link">
      <span className="link-date">{formattedDate}</span>
      <Link
        href={slug}
        className="index-link-title"
      >
        {hot ? (
          <span
            role="img"
            aria-label="Nowy wpis"
          >
            🔥{' '}
          </span>
        ) : null}
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

      <p>👋 Heja!</p>

      <p>Nazywam się Krzysztof Jendrzyca i na codzień pracuję jako fullstack engineer.</p>

      <p>
        Ta <a href="https://joelhooks.com/digital-garden">strona</a> to baza wypadowa moich
        projektów.
      </p>

      <p>
        Znajdziesz tutaj <Link href="/dokumentuj-zamiast-tworzyc/">opis moich doświadczeń</Link>,
        obserwacje oraz notatki dotyczące tematów, które mnie obecnie interesują: tworzenie treści,
        notatek, produktów, produktywność, programowanie i praca w IT, technologie webowe.
      </p>

      <p>
        Mój ostatni projekt to program szkoleniowy{' '}
        <Link href="/spwz/">&quot;Skuteczna Praca w Zespole&quot;</Link>, a{' '}
        <Link href="/teraz/">tutaj</Link> możesz przeczytać, czym się teraz zajmuję.
      </p>

      <p>
        Żeby pogadać złap mnie na <a href="https://instagram.com/kjendrzyca/">Instagramie</a> lub{' '}
        <a href="https://x.com/kjendrzyca/">X</a>.
      </p>

      <p>
        Tutaj znajdziesz listę <Link href="/narzedzia/">narzędzi</Link>, których używam i{' '}
        <Link href="/linki/">linków</Link>, które wrzucam w świat.
      </p>

      <blockquote>
        <p>
          An idea kept private is as good as one you never had. And a fact no one can reproduce is
          no fact at all. Making something public always means to write it down so it can be read.{' '}
          <a href="https://www.goodreads.com/book/show/34507927-how-to-take-smart-notes">
            ~Sönke Ahrens
          </a>
        </p>
      </blockquote>

      <h3>Wpisy</h3>
      <ul className="index-links">
        <IndexLink
          title="Mój setup macOS"
          slug="macos-setup"
          createdAt="2026-04-11"
        />
        <IndexLink
          title={`Marka osobista to efekt uboczny`}
          slug="marka-osobista"
          createdAt="2025-03-19"
        />
        <IndexLink
          title={`Pułapki cachowania w next-auth i Netlify`}
          slug="cache"
          createdAt="2024-11-09"
        />
        <IndexLink
          title={`Taktyczna empatia`}
          slug="empatia"
          createdAt="2024-05-27"
        />
        <IndexLink
          title={`Problem Dreamlinera`}
          slug="problem-dreamlinera"
          createdAt="2023-01-01"
        />
        <IndexLink
          title={`"Skuteczna Praca w Zespole" - dziennik prac`}
          slug="sp-dziennik"
          createdAt="2022-06-01"
        />
        <IndexLink
          title="Podsumowanie 2021"
          slug="podsumowanie-2021"
          createdAt="2022-01-19"
        />
        <IndexLink
          title="Nieformalna nauka rzemiosła"
          slug="nauka-rzemiosla"
          createdAt="2021-10-13"
        />
        <IndexLink
          title="W jakim języku tworzyć treści w Internecie?"
          slug="jezyk"
          createdAt="2021-09-30"
        />
        <IndexLink
          title="Praca bottom-up"
          slug="bottom-up"
          createdAt="2021-08-27"
        />
        <IndexLink
          title="Praca przy pomocy pakietów"
          slug="pakiety"
          createdAt="2021-08-03"
        />
        <IndexLink
          title="Jak czerpię korzyści z Zeigarnik Effect"
          slug="bluma"
          createdAt="2021-07-21"
        />
        <IndexLink
          title="Prywatny blog"
          slug="prywatny-blog"
          createdAt="2021-07-15"
        />
        <IndexLink
          title="Cyfrowe odgracanie"
          slug="digital-declutter"
          createdAt="2021-06-29"
        />
        <IndexLink
          title="Upgrade z juniora na doradcę technicznego"
          slug="upgrade"
          createdAt="2021-06-23"
        />
        <IndexLink
          title={`Praca na "pół gwizdka"`}
          slug="pol-gwizdka"
          createdAt="2021-06-17"
        />
        <IndexLink
          title="Po co to wszystko?"
          slug="po-co"
          createdAt="2021-06-13"
        />
        <IndexLink
          title="Zamień to w coś swojego"
          slug="cos-swojego"
          createdAt="2021-06-03"
        />
        <IndexLink
          title="Skup się na procesie, a nie na wynikach"
          slug="proces"
          createdAt="2021-05-27"
        />
        <IndexLink
          title="Narzędzia, których używam"
          slug="narzedzia"
          createdAt="2021-05-29"
        />
        <IndexLink
          title="Dokumentuj zamiast tworzyć"
          slug="dokumentuj-zamiast-tworzyc"
          createdAt="2021-05-19"
        />
        <IndexLink
          title="Jak zbudowałem swój Second Brain"
          slug="second-brain"
          createdAt="2020-12-10"
        />
        <IndexLink
          title="Rób swoje"
          slug="rob-swoje"
          createdAt="2020-11-27"
        />
      </ul>

      <h3>Notatki z książek, artykułów i podcastów</h3>
      <ul className="index-links">
        <IndexLink
          title="Tiny Experiments"
          slug="tiny-experiments"
          createdAt="2025-03-29"
        />
        <IndexLink
          title="Show Your Work"
          slug="show-your-work"
          createdAt="2022-02-02"
        />
        <IndexLink
          title="Just Fucking Ship"
          slug="jfs"
          createdAt="2021-12-14"
        />
        <IndexLink
          title="Steal Like an Artist"
          slug="steal-like-an-artist"
          createdAt="2021-09-27"
        />
        <IndexLink
          title="Relentless"
          slug="relentless"
          createdAt="2021-09-03"
        />
        <IndexLink
          title="Building a StoryBrand"
          slug="storybrand"
          createdAt="2021-08-10"
        />
        <IndexLink
          title="Managing Oneself"
          slug="managing-oneself"
          createdAt="2021-07-12"
        />
        <IndexLink
          title="Digital Minimalism"
          slug="digital-minimalism"
          createdAt="2021-06-24"
        />
        <IndexLink
          title="Company of One"
          slug="company-of-one"
          createdAt="2021-06-01"
        />
        <IndexLink
          title="Live: Płatne newslettery w Polsce"
          slug="platne-newslettery-w-polsce"
          createdAt="2021-05-18"
        />
        <IndexLink
          title="The Building a Second Brain Podcast"
          slug="basb-podcast"
          createdAt="2021-02-01"
        />
        <IndexLink
          title="How to Win Friends and Influence People"
          slug="how-to-win-friends-and-influence-people"
          createdAt="2020-11-26"
        />
      </ul>
    </Layout>
  )
}

export default BlogIndex
