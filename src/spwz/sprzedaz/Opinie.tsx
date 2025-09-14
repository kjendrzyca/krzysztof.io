import { CenteredH2 } from '@/components/CenteredH2'
import { Highlight } from '@/components/Highlight'
import { Testimonial } from '@/components/Testimonial'

export const Opinie = () => {
  return (
    <>
      <CenteredH2>Kilka opinii</CenteredH2>

      <Testimonial
        imageSrc="/spwz/filip-swacha.png"
        quote={
          <>
            <p>
              <Highlight nopadding>
                Program bardzo pomógł mi zmienić mindset i nastawienie do swojej pracy i
                umiejętności
              </Highlight>
              .
            </p>
            <p>
              Poznałem sposoby reframingu w mojej głowie tak, aby wziąć pełną odpowiedzialność za
              swoją pracę oraz konkretne przykłady tego, jak zadawać dobre pytania.
            </p>
            <p>
              Poznałem listę etapów na które można rozbić proces planowania pracy - dzięki niej{' '}
              <Highlight nopadding>
                usystematyzowałem swój workflow i przestałem się obwiniać
              </Highlight>
              , że to ja czegoś nie wiem, tylko może np. wymagania są niekompletne i należy zwrócić
              się z prośbą o klaryfikację.
            </p>
            <p>
              Na spotkaniach live mogłem podzielić się swoimi doświadczeniami i dowiedzieć się, że{' '}
              burnout nie jest tylko moim przypadkiem, ale może zdarzyć się każdemu.
            </p>
          </>
        }
        author="Filip Swacha"
        title="Software Engineer"
      />

      <Testimonial
        imageSrc="/spwz/michal-gawarzynski.jpg"
        quote={
          <>
            <p>
              Nie znałem w ogóle Krzysztofa i jego twórczości wcześniej. Obawiałem się, że to będzie
              kolejny kursowy skok na kasę. Przekonała mnie moja intuicja. Mało jest kursów w takiej
              tematyce i chciałem ugruntować swoją wiedzę.
            </p>
            <p>
              Im dłużej pracuję w branży, tym częściej widzę, że aspekty miękkie okazują się coraz
              bardziej ważne.{' '}
              <Highlight nopadding>Frameworki się zmieniają, a mental pozostaje</Highlight>.
            </p>
            <p>
              Program pozwolił mi przekrojowo spojrzeć na proces wytwarzania oprogramowania. Jak
              łączyć pracę twórczą z wytwórczym dowożeniem tematów. Część rzeczy czułem intuicyjnie
              jak należy robić, ale{' '}
              <Highlight nopadding>
                program ugruntował moją wiedzę i poszerzył perspektywy
              </Highlight>
              .
            </p>
          </>
        }
        author="Michał Gawarzyński"
        title="Engineering Manager"
      />

      <Testimonial
        imageSrc="/spwz/marcin-deperas.jpg"
        quote={
          <>
            <p>
              <Highlight nopadding>
                Program w pełni spełnił moje oczekiwania i rozwiał wszystkie początkowe obawy
              </Highlight>{' '}
              (czy wniesie coś nowego do mojego rozwoju, czy znajdę tam praktyczne wskazówki, jak
              materiały przełożą się na moją codzienną pracę, czy będzie odpowiedni na moim poziomie
              doświadczenia, czy nie będzie zbyt zaawansowany i abstrakcyjny).
            </p>
            <p>
              <Highlight nopadding>Jestem zachwycony tym co otrzymałem!</Highlight>
            </p>
            <p>
              Największą zmianą, jaką zauważyłem po ukończeniu, było moje podejście do pracy w
              zespole. Nauczyłem się skuteczniej komunikować, jasno wyrażać swoje potrzeby i lepiej
              rozumieć perspektywę innych członków zespołu. Zyskałem większą pewność siebie w
              relacjach z klientem, nauczyłem się, jak budować swoją reputację, potrafię lepiej
              planować i realizować zadania, szybciej reagować na problemy i efektywniej rozwiązywać
              konflikty, co przekłada się na lepszą atmosferę pracy i wyższą efektywność zespołu.
            </p>
            <p>
              Program nie tylko dostarczył mi wiedzy, ale przede wszystkim{' '}
              <Highlight nopadding>dał narzędzia do zmiany w codziennej pracy</Highlight>.
            </p>
            <p>
              Regularnie wracam do materiałów. Traktuję swój rozwój jako proces, który się nie
              kończy. Mam ogromną frajdę z odkrywania różnych aspektów pracy w zespole na nowo.
              Mnóstwo tropów i źródeł do dalszej eksploracji.
            </p>
          </>
        }
        author="Marcin Deperas"
        title="Software Engineer"
      />

      <Testimonial
        imageSrc="/spwz/joanna.jpg"
        quote={
          <>
            <p>
              <Highlight nopadding>
                Nie spodziewałam się zupełnie, że program to będzie takie kompendium wiedzy
              </Highlight>
              . Jest dobre dla osób na każdym poziomie,{' '}
              <Highlight nopadding>
                zarówno początkujących, jak i tych bardziej doświadczonych
              </Highlight>
              .
            </p>
            <p>
              Program zachęcił mnie do głębszego przyjrzenia się temu, jak działam w zespole, jak
              reaguję na feedback, czy działam wystarczająco proaktywnie, czy raczej czekam aż
              &quot;mnie ktoś zauważy&quot;.
            </p>{' '}
            <p>
              Bardzo podobało mi się takie realistyczne podejście rzemieślnika, a nie zapewnianie,
              że jak się ogarnie X, Y, Z to rzeczy zaczną się same wydarzać.
            </p>
          </>
        }
        author="Joanna Otmianowska"
        title="Frontend Engineer"
      />

      <Testimonial
        imageSrc="/spwz/marcin.jpg"
        quote={
          <>
            <Highlight nopadding>Same konkrety bez bullshitu</Highlight>. Pracuję w IT już wiele lat
            i aż żal, że dopiero niedawno trafiłem na ten program.{' '}
            <Highlight nopadding>
              W końcu ktoś opisał tematy, które wcześniej trzeba było latami rozpracowywać samemu.
            </Highlight>
          </>
        }
        author="Marcin Kapica"
        title="Senior Software Engineer"
      />

      <Testimonial
        imageSrc="/spwz/marcincz.jpg"
        quote={
          <>
            <p>
              &ldquo;Skuteczna praca w zespole&rdquo; daje to, czego brakuje w większości materiałów
              o soft skills -{' '}
              <Highlight nopadding>sprawdzone frameworki komunikacyjne i procesowe</Highlight>.
            </p>
            <p>
              Moduły o feedbacku i code review zawierają konkretne wzorce komunikacji, które możesz
              od razu stosować.{' '}
              <Highlight nopadding>
                Przestaniesz improwizować podczas wymagających sytuacji
              </Highlight>
              . Dodatek o typach osobowości klientów to praktyczny przewodnik - w kilka minut
              &ldquo;zdiagnozujesz&rdquo; stakeholdera i dostosujesz komunikację.
            </p>
            <p>
              Szczególnie cenne są taktyki planowania zadań i zarządzania oczekiwaniami.{' '}
              <Highlight nopadding>
                System estymacji oparty na metrykach zamiast zgadywania eliminuje wiele
                niepotrzebnych konfliktów z biznesem
              </Highlight>
              .
            </p>
            <p>
              Program unika buzzwordów i skupia się na działaniu. Każdy moduł kończy się konkretnymi
              sugestiami do wdrożenia. To podejście inżynierskie do problemów zespołowych.
            </p>
            <p>
              <Highlight nopadding>
                W programie dostajesz skondensowaną wiedzę praktyczną, którą inaczej zbierasz latami
              </Highlight>
              .
            </p>
          </>
        }
        author="Marcin Czarkowski"
        title="Co-Founder of @przeprogramowani"
      />

      <Testimonial
        imageSrc="/spwz/bartek.jpg"
        quote={
          <>
            <p>
              Na początku przygody z kodowaniem wydawało mi się, że najważniejsze są twarde skille.
              Programista ma pisać kod - rozwiązywać problemy. Po latach wiem, że{' '}
              <Highlight nopadding>samo programowanie to tylko wierzchołek góry lodowej</Highlight>.
            </p>
            <p>
              Krzysztof konkretnie pokazuje jak dawać wartość. Kompleksowo omawia tematy miękkie,
              które są niezbędne, aby osiągnąć (również własne) cele.
            </p>
            <p>
              {' '}
              Bardzo szanuję formę i sposób komunikacji -{' '}
              <Highlight nopadding>bez wciskania rzeczy na siłę</Highlight>, a po prostu
              przedstawienie własnych przemyśleń. Polecam wszystkim devom.
            </p>
          </>
        }
        author="Bartek Witczak"
        title="Software Architect"
      />
    </>
  )
}
