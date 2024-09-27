import { Highlight } from "@/components/Highlight"
import { SPWZLogo } from "./SPWZLogo"

export const LogoAndHeading = () => {
  return (
    <>
      <p style={{marginBottom: 0}}>
        <SPWZLogo />
      </p>

      <h1 style={{fontSize:'2.5rem', marginTop: 'var(--spacing-6)', lineHeight: '3.2rem'}}>
        Kompletny przewodnik po <Highlight>umiejętnościach miękkich</Highlight> oraz <Highlight>sposobach pracy</Highlight><br />doświadczonych programistów.
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
        czego nauczyłem się przez ostatnie kilka lat o skutecznej współpracy z <strong>zespołem</strong>,{' '}
        <strong>klientem</strong> oraz <strong>pracodawcą</strong>, jak podchodzę do <strong>wykonywania zadań</strong> i jakie czerpię z tego wszystkiego <strong>korzyści</strong>.
      </h2>
    </>
  )
}
