import { Highlight } from '@/components/Highlight'
import { SPWZLogo } from './SPWZLogo'

export const LogoAndHeading = () => {
  return (
    <>
      <p style={{ marginBottom: 0 }}>
        <SPWZLogo />
      </p>

      <h1 style={{ fontSize: '2.5rem', marginTop: 'var(--spacing-6)', lineHeight: '3.2rem' }}>
        Bądź odpowiedzią na pytanie:
        <br />
        <Highlight>&quot;Kto nam to ogarnie?&quot;</Highlight>
      </h1>

      <h2
        style={{
          fontSize: '1.3rem',
          fontWeight: 'normal',
          lineHeight: '1.5',
          textAlign: 'center',
        }}
      >
        Sprawdzony w praktyce <strong>system rozwoju, modeli myślowych i taktyk</strong> dla
        programistów, którzy mają dość{' '}
        <strong>chaosu, poczucia stagnacji i bycia niedocenianym</strong>.<br />
        <br /> Pokażę Ci, jak krok po kroku opanować{' '}
        <strong>pracę z zadaniami, dynamikę zespołu i relacje z biznesem</strong>, by odzyskać{' '}
        <strong>kontrolę i spokój</strong> oraz sprawić, by Twoje zaangażowanie w końcu zostało{' '}
        <strong>zauważone i docenione</strong>.
      </h2>
    </>
  )
}
