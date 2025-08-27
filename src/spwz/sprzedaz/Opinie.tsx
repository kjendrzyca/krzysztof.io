import { CenteredH2 } from '@/components/CenteredH2'
import { Highlight } from '@/components/Highlight'
import { Testimonial } from '@/components/Testimonial'

export const Opinie = () => {
  return (
    <>
      <CenteredH2>Kilka opinii</CenteredH2>

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
    </>
  )
}
