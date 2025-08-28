import React from 'react'

// Custom SVG Icons matching the existing design style
const ChecklistIcon = () => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="32"
    height="32"
  >
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
  </svg>
)

const PeopleIcon = () => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="32"
    height="32"
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

const ChatIcon = () => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="32"
    height="32"
  >
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
  </svg>
)

const TrendingUpIcon = () => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="32"
    height="32"
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
)

const benefits = [
  {
    icon: <ChecklistIcon />,
    title: 'Przejąć kontrolę nad zadaniami:',
    description:
      'Poznasz sprawdzony proces planowania i realizacji zadań, który ogranicza stres, eliminuje poprawki i buduje Twoją reputację jako osoby niezawodnej.',
  },
  {
    icon: <PeopleIcon />,
    title: 'Zbudować silną pozycję w zespole:',
    description:
      'Zrozumiesz, jak działają zespoły, jak rozwiązywać konflikty i jak skutecznie się komunikować, żeby Twoje pomysły były wysłuchane i wdrażane.',
  },
  {
    icon: <ChatIcon />,
    title: 'Pewnie rozmawiać z klientem i biznesem:',
    description:
      'Nauczysz się rozmawiać językiem korzyści, rozumieć potrzeby biznesowe i przekonywać do swoich racji bez niepotrzebnych spięć.',
  },
  {
    icon: <TrendingUpIcon />,
    title: 'Świadomie kształtować swój rozwój:',
    description:
      'Dowiesz się, jak rozmawiać o podwyżce i awansie w oparciu o konkretne dowody, a nie nadzieję, że ktoś Cię zauważy.',
  },
]

export const BenefitsGrid = () => {
  return (
    <>
      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="benefit-card"
          >
            <div className="benefit-icon">{benefit.icon}</div>
            <h3 className="benefit-title">{benefit.title}</h3>
            <p className="benefit-description">{benefit.description}</p>
          </div>
        ))}
      </div>

      <div className="benefits-summary">
        <h3 className="summary-title">
          W skrócie:{' '}
          <span className="summary-highlight">
            Pokażę Ci, jak stać się dojrzałym, godnym zaufania i cenionym członkiem zespołu, którego
            głos ma znaczenie.
          </span>
        </h3>
      </div>

      <style jsx>{`
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--spacing-6);
          margin: var(--spacing-8) 0;
        }

        .benefit-card {
          background: var(--color-background);
          border: 1px solid var(--color-light);
          border-radius: 8px;
          padding: var(--spacing-6);
          box-shadow: var(--shadow-elevation-low);
          position: relative;
        }

        .benefit-icon {
          color: var(--color-primary);
          margin-bottom: var(--spacing-4);
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }

        .benefit-title {
          font-size: var(--fontSize-2);
          font-weight: var(--fontWeight-bold);
          color: var(--color-heading);
          margin: 0 0 var(--spacing-3) 0;
          line-height: var(--lineHeight-tight);
        }

        .benefit-description {
          color: var(--color-text);
          line-height: var(--lineHeight-relaxed);
          margin: 0;
          font-size: var(--fontSize-1);
        }

        .benefits-summary {
          background: var(--color-background);
          border: 1px solid var(--color-light);
          border-radius: 8px;
          padding: var(--spacing-6);
          margin-top: var(--spacing-8);
          box-shadow: var(--shadow-elevation-low);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .summary-title {
          font-size: var(--fontSize-2);
          font-weight: var(--fontWeight-bold);
          color: var(--color-heading);
          margin: 0;
          line-height: var(--lineHeight-relaxed);
        }

        .summary-highlight {
          background: #fff2c0;
          border-radius: 4px;
          padding: 0 6px;
        }

        @media (max-width: 42rem) {
          .benefits-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-4);
            margin: var(--spacing-6) 0;
          }

          .benefit-card {
            padding: var(--spacing-5);
          }

          .benefit-title {
            font-size: var(--fontSize-1);
          }

          .benefit-description {
            font-size: var(--fontSize-0);
          }

          .benefits-summary {
            padding: var(--spacing-5);
          }

          .summary-title {
            font-size: var(--fontSize-1);
          }
        }
      `}</style>
    </>
  )
}
