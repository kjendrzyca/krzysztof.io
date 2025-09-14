import { forwardRef } from 'react'
import { CenteredH2 } from '@/components/CenteredH2'
import { Highlight } from '../../components/Highlight'
// import { Countdown } from '@/components/Countdown'

// SVG Icons for benefits
const PlayCircleIcon = () => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="28"
    height="28"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
    />
    <polygon points="10,8 16,12 10,16 10,8" />
  </svg>
)

const LightbulbIcon = () => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="28"
    height="28"
  >
    <path d="M9 21h6" />
    <path d="M12 3a6 6 0 00-6 6c0 1 0 3 1.5 4.5.83.83 1.5 1.5 1.5 2.5v1h6v-1c0-1 .67-1.67 1.5-2.5C17 15 17 13 17 12a6 6 0 00-6-6z" />
  </svg>
)

const UsersIcon = () => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="28"
    height="28"
  >
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle
      cx="9"
      cy="7"
      r="4"
    />
    <path d="M23 21v-2a4 4 0 00-3-3.87" />
    <path d="M16 3.13a4 4 0 010 7.75" />
  </svg>
)

const FileTextIcon = () => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="28"
    height="28"
  >
    <path d="M14 3v4a1 1 0 001 1h4" />
    <path d="M17 21H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z" />
    <line
      x1="9"
      y1="9"
      x2="10"
      y2="9"
    />
    <line
      x1="9"
      y1="13"
      x2="15"
      y2="13"
    />
    <line
      x1="9"
      y1="17"
      x2="15"
      y2="17"
    />
  </svg>
)

const ToolIcon = () => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="28"
    height="28"
  >
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
  </svg>
)

const LinkIcon = () => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="28"
    height="28"
  >
    <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
  </svg>
)

const UserIcon = () => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="28"
    height="28"
  >
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle
      cx="12"
      cy="7"
      r="4"
    />
  </svg>
)

const RefreshCwIcon = () => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="28"
    height="28"
  >
    <polyline points="23 4 23 10 17 10" />
    <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
  </svg>
)

const MessageSquareIcon = () => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="28"
    height="28"
  >
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
  </svg>
)

const ClockIcon = () => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="28"
    height="28"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
    />
    <polyline points="12,6 12,12 16,14" />
  </svg>
)

const ShieldIcon = () => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="28"
    height="28"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
)

const CodeIcon = () => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="28"
    height="28"
  >
    <polyline points="16,18 22,12 16,6" />
    <polyline points="8,6 2,12 8,18" />
  </svg>
)

const benefits = [
  {
    icon: <PlayCircleIcon />,
    title: '24 moduły szkolenia online',
    description: (
      <>
        👉 231 materiałów wideo, ~19 godzin nagrań.
        <br />
        👉 Zero teorii dla teorii, tylko sprawdzone sposoby działania, konkretne strategie i taktyki
        do wdrożenia od razu. Materiały dostajesz na zawsze.
      </>
    ),
  },
  {
    icon: <LightbulbIcon />,
    title: 'Lista sugestii pod każdym modułem',
    description:
      'Konkretne wskazówki, jak zaaplikować zdobytą wiedzę i na czym się skupić, żeby zacząć działać od razu.',
  },
  {
    icon: <UsersIcon />,
    title: '5 Grupowych spotkań Q&A na żywo',
    description:
      'Żeby zadawać pytania i uzyskać pomoc w swojej konkretnej sytuacji. Możesz też dołączyć do spotkań w przyszłych edycjach programu za free.',
  },
  {
    icon: <FileTextIcon />,
    title: 'Baza notatek ze spotkań na żywo',
    description: 'Żeby nic nam nie uciekło, gdy rozpracujemy jakiś ciekawy problem lub temat.',
  },
  {
    icon: <ToolIcon />,
    title: 'Skrzynka z narzędziami',
    description:
      'Gotowe szablony i checklisty, które pomogą Ci wdrożyć wiedzę z programu. M.in. szablon rejestru osiągnięć na rozmowy z liderem, checklista konstruktywnego Code Review, checklista przed demo z klientem + pracuję nad kolejnymi.',
  },
  {
    icon: <LinkIcon />,
    title: 'Baza linków',
    description: 'Książki, artykuły, narzędzia - wszystko, co pomaga mi w pracy od lat.',
  },
  {
    icon: <UserIcon />,
    title: 'Dodatkowy moduł opisujący typy osobowości klienta',
    description:
      'Jest to jeden z trudniejszych tematów do ogarnięcia dla wielu osób, dlatego dostajesz gotową ściągę najbardziej powszechnych cech charakteru naszych klientów i sprawdzone sposoby obsługi.',
  },
  {
    icon: <RefreshCwIcon />,
    title: 'Darmowe aktualizacje',
    description: 'Nowe materiały są dla Ciebie dostępne od razu.',
  },
  {
    icon: <MessageSquareIcon />,
    title: 'Dostęp do zamkniętej grupy na Discordzie',
    description:
      'Bezpieczne miejsce do zadawania pytań, dzielenia się doświadczeniami i wspólnego rozwiązywania problemów. Możesz się ze mną kontaktować w każdej chwili. Nie ma tam tysiąca osób, więc na pewno Ci odpowiem.',
  },
  {
    icon: <ClockIcon />,
    title: '30-dni na testy',
    description:
      'Przez 30 dni sprawdzasz, czy to coś dla Ciebie, a jeśli nie, to piszesz mi jednego maila i zwracam Ci kasę. Bez dodatkowych pytań.',
  },
  {
    icon: <ShieldIcon />,
    title: 'Gwarancja osobistego wsparcia',
    description:
      'Dodatkowa, godzinna konsultacja 1-na-1, jeśli próby wdrożenia zdobytej wiedzy nie przynoszą efektów. Bez dodatkowych opłat.',
  },
  {
    icon: <CodeIcon />,
    title:
      'Najważniejsze: to jedyny program na rynku w tej tematyce prowadzony przez kogoś, kto jeszcze nie odleciał w management.',
    description:
      'Nadal pracuję jako programista i na co dzień mierzę się z takimi samymi wyzwaniami, jak Ty. Nie mówię do Ciebie buzzwordami i nie odgrywam sztucznych scenek. Po prostu mówię, co działa. A gdy coś przestaje działać, to zawsze aktualizuję swój system i dostępne materiały.',
  },
]

export const Dolacz = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref}>
      <CenteredH2>Podsumowując: co otrzymasz w pakiecie?</CenteredH2>

      <div className="benefits-container">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="benefit-item"
          >
            <div className="benefit-icon">{benefit.icon}</div>
            <div className="benefit-content">
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="pricing-summary">
        <h3 className="pricing-title">
          To wszystko otrzymasz za: <span className="price">769 zł brutto</span>
        </h3>
        <p className="pricing-description">
          Wychodzi ~30 zł za moduł, czyli jakieś dwie duże kawy u mnie na mieście.
        </p>
        <p className="pricing-highlight">
          👉 Za tę cenę dostajesz przefiltrowane ponad 10 lat doświadczeń, eksperymentowania,
          sukcesów i porażek. Skondensowane w przystępnej formie i gotowe do zaimplementowania.
        </p>
        <p>Nic nie ryzykujesz, bo masz 30 dni na przetestowanie.</p>
        <p>
          🗓️ Zapisy otwarte <Highlight nopadding><strong>do piątku 19.09.2025 godz. 20:00.</strong></Highlight> Po tej dacie
          możliwość dołączenia znika na przynajmniej kilka miesięcy.
        </p>
      </div>

      {/* <CenteredH2>
        <span style={{ borderBottom: '2px dashed var(--color-primary)', lineHeight: '2.5rem' }}>
          Koniec sprzedaży: piątek, 19 września 2025 o 20:00
        </span>
      </CenteredH2>

      <p style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold' }}>
        <Countdown date={new Date('2025-09-19T20:00:00+02:00')} />
      </p> */}

      <style jsx>{`
        .benefits-container {
          background: var(--color-background);
          border: 1px solid var(--color-light);
          border-radius: 8px;
          padding: var(--spacing-6);
          box-shadow: var(--shadow-elevation-low);
          margin: var(--spacing-8) 0;
        }

        .benefit-item {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-4);
          padding: var(--spacing-4) 0;
          border-bottom: 1px solid var(--color-light);
        }

        .benefit-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .benefit-item:first-child {
          padding-top: 0;
        }

        .benefit-icon {
          color: var(--color-primary);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .benefit-content {
          flex: 1;
        }

        .benefit-title {
          font-size: var(--fontSize-2);
          font-weight: var(--fontWeight-bold);
          color: var(--color-heading);
          margin: 0 0 var(--spacing-2) 0;
          line-height: var(--lineHeight-normal);
        }

        .benefit-description {
          color: var(--color-text);
          line-height: var(--lineHeight-relaxed);
          margin: 0;
          font-size: var(--fontSize-1);
        }

        .pricing-summary {
          margin-top: var(--spacing-16);
          text-align: center;
        }

        .pricing-title {
          font-size: var(--fontSize-3);
          font-weight: var(--fontWeight-bold);
          color: var(--color-heading);
          margin: 0 0 var(--spacing-4) 0;
          line-height: var(--lineHeight-tight);
        }

        .price {
          color: var(--color-success);
        }

        .pricing-description {
          color: var(--color-text);
          margin: 0 0 var(--spacing-4) 0;
          font-size: var(--fontSize-1);
          line-height: var(--lineHeight-relaxed);
        }

        .pricing-highlight {
          color: var(--color-text);
          margin: 0 0 var(--spacing-4) 0;
          font-weight: var(--fontWeight-medium);
          line-height: var(--lineHeight-relaxed);
          font-size: var(--fontSize-1);
        }

        @media (max-width: 42rem) {
          .benefits-container {
            padding: var(--spacing-5);
            margin: var(--spacing-6) 0;
          }

          .benefit-item {
            gap: var(--spacing-3);
            padding: var(--spacing-3) 0;
          }

          .benefit-title {
            font-size: var(--fontSize-1);
          }

          .benefit-description {
            font-size: var(--fontSize-0);
          }

          .pricing-title {
            font-size: var(--fontSize-2);
          }
        }
      `}</style>
    </div>
  )
})

Dolacz.displayName = 'Dolacz'
