import type { NextApiRequest, NextApiResponse } from 'next'

// Rate limiting store (in-memory)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT = 10 // requests per minute
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute in milliseconds

// Event configurations
const events = {
  spwz: {
    title: '🔴 Szkolenie online: Jak szybciej wskoczyć na poziom seniora',
    description:
      'Dowiedz się, jak szybciej wskoczyć na poziom seniora i budować pozycję w zespole. Poznaj 5 konkretnych strategii opartych na "postawie rzemieślnika", by rozwijać najbardziej wartościowe umiejętności.\n\n(Link do spotkania wyślę tego samego dnia z rana)',
    startDate: '2025-09-10T17:00:00Z', // 19:00 CEST = 17:00 UTC
    endDate: '2025-09-10T18:30:00Z', // 20:30 CEST = 18:30 UTC
    location: 'Online',
  },
}

type EventCode = keyof typeof events
type CalendarProvider = 'google' | 'outlook' | 'ical'

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitStore.get(ip)

  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return true
  }

  if (record.count >= RATE_LIMIT) {
    return false
  }

  record.count++
  return true
}

function generateGoogleCalendarUrl(event: typeof events.spwz): string {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    dates: `${event.startDate.replace(/[-:]/g, '').replace('.000Z', 'Z')}/${event.endDate.replace(/[-:]/g, '').replace('.000Z', 'Z')}`,
    details: event.description,
    location: event.location,
  })

  return `https://www.google.com/calendar/render?${params.toString()}`
}

function generateOutlookUrl(event: typeof events.spwz): string {
  const params = new URLSearchParams({
    subject: event.title,
    startdt: event.startDate,
    enddt: event.endDate,
    body: event.description,
    location: event.location,
  })

  return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`
}

function generateIcsContent(event: typeof events.spwz): string {
  const now = new Date()
  const timestamp = now.toISOString().replace(/[-:]/g, '').replace('.000Z', 'Z')

  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//krzysztof.io//Calendar Event//EN',
    'BEGIN:VEVENT',
    `UID:${timestamp}@krzysztof.io`,
    `DTSTAMP:${timestamp}`,
    `DTSTART:${event.startDate.replace(/[-:]/g, '').replace('.000Z', 'Z')}`,
    `DTEND:${event.endDate.replace(/[-:]/g, '').replace('.000Z', 'Z')}`,
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description.replace(/\n/g, '\\n')}`,
    `LOCATION:${event.location}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Set cache-busting headers
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
  res.setHeader('Pragma', 'no-cache')
  res.setHeader('Expires', '0')
  res.setHeader('X-Robots-Tag', 'noindex, nofollow')

  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { code, provider } = req.query

  // Validate event code
  if (!code || typeof code !== 'string' || !(code in events)) {
    return res.status(404).json({ error: 'Event not found' })
  }

  // Require provider parameter
  if (!provider || typeof provider !== 'string') {
    return res
      .status(400)
      .json({ error: 'Provider parameter is required. Use: google, outlook, or ical' })
  }

  // Validate provider
  const validProviders: CalendarProvider[] = ['google', 'outlook', 'ical']
  if (!validProviders.includes(provider as CalendarProvider)) {
    return res.status(400).json({ error: 'Invalid provider. Use: google, outlook, or ical' })
  }

  // Rate limiting
  const forwardedFor = req.headers['x-forwarded-for']
  let clientIp: string = 'unknown'

  if (typeof forwardedFor === 'string') {
    clientIp = forwardedFor
  } else if (Array.isArray(forwardedFor) && forwardedFor.length > 0) {
    clientIp = forwardedFor[0] || 'unknown'
  } else if (typeof req.socket.remoteAddress === 'string') {
    clientIp = req.socket.remoteAddress
  }

  const ip = clientIp.split(',')[0] || 'unknown'

  if (!checkRateLimit(ip)) {
    return res.status(429).json({ error: 'Rate limit exceeded. Try again later.' })
  }

  const eventCode = code as EventCode
  const calendarProvider = provider as CalendarProvider
  const event = events[eventCode]

  try {
    switch (calendarProvider) {
      case 'google': {
        const googleUrl = generateGoogleCalendarUrl(event)
        return res.redirect(302, googleUrl)
      }

      case 'outlook': {
        const outlookUrl = generateOutlookUrl(event)
        return res.redirect(302, outlookUrl)
      }

      case 'ical': {
        const icsContent = generateIcsContent(event)
        res.setHeader('Content-Type', 'text/calendar; charset=utf-8')
        res.setHeader('Content-Disposition', `attachment; filename="${eventCode}-event.ics"`)
        return res.status(200).send(icsContent)
      }

      default:
        return res.status(400).json({ error: 'Invalid provider' })
    }
  } catch (error) {
    console.error('Calendar generation error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
