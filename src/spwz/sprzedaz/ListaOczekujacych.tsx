import { forwardRef } from 'react'
import ReactMarkdown from 'react-markdown'
import { CenteredH2 } from '@/components/CenteredH2'
import { ListaOczekujacychButton } from '../buttons'

export const ListaOczekujacych = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref}>
      <CenteredH2>📜 Lista oczekujących</CenteredH2>

      <ReactMarkdown>
        {`Zapisy do programu otwieram co kilka miesięcy, bo w tym czasie skupiam się na pracy z uczestnikami i dopracowywaniu materiałów.

Obecnie zapisy są zamknięte, ale jeśli chcesz, to możesz dołączyć do mailingu, w którym dzielę się wiedzą z programu i który jest jednocześnie listą oczekujących.`}
      </ReactMarkdown>

      <p style={{ textAlign: 'center', marginTop: 'var(--spacing-10)' }}>
        <ListaOczekujacychButton />
      </p>
    </div>
  )
})

ListaOczekujacych.displayName = 'ListaOczekujacych'
