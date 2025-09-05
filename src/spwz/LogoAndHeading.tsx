import { Highlight } from '@/components/Highlight'
import { SPWZLogo } from './SPWZLogo'
import { ResponsiveH1 } from '@/components/ResponsiveH1'

export const LogoAndHeading = () => {
  return (
    <>
      <p style={{ marginBottom: 0 }}>
        <SPWZLogo />
      </p>

      <ResponsiveH1>
        Bądź odpowiedzią na pytanie:
        <br />
        <Highlight>&quot;Kto nam to ogarnie?&quot;</Highlight>
      </ResponsiveH1>

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
