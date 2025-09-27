# Calendar API Documentation

## Overview

The calendar API provides endpoints to generate calendar event links for different calendar providers (Google Calendar, Outlook, and iCal format). It's designed to help users easily add events to their preferred calendar application.

## Endpoint

```
GET /api/calendar/[code]?provider=[provider]
```

### Parameters

- `code` (required): Event identifier (currently supports: `spwz`)
- `provider` (required): Calendar provider (`google`, `outlook`, or `ical`)

### Examples

```
GET /api/calendar/spwz?provider=google
GET /api/calendar/spwz?provider=outlook
GET /api/calendar/spwz?provider=ical
```

## Response Behavior

- **Google/Outlook**: Returns 302 redirect to the respective calendar service
- **iCal**: Returns downloadable `.ics` file with `text/calendar` content type
- **Errors**: Returns JSON error responses with appropriate HTTP status codes

## Rate Limiting

- **Limit**: 10 requests per minute per IP address
- **Window**: 60 seconds (rolling window)
- **Storage**: In-memory (resets on server restart)
- **Response**: 429 status code when limit exceeded

## Event Configuration

Events are configured in the `events` object with the following structure:

```typescript
{
  title: string        // Event title
  description: string  // Event description (supports \n line breaks)
  startDate: string    // ISO 8601 UTC timestamp
  endDate: string      // ISO 8601 UTC timestamp
  location: string     // Event location
}
```

## Security Features

- Rate limiting by IP address
- Input validation for event codes and providers
- Cache-busting headers to prevent unwanted caching
- `X-Robots-Tag` header to prevent search engine indexing
- Method restriction (GET only)

## Error Responses

- `404`: Event code not found
- `400`: Missing or invalid provider parameter
- `405`: Method not allowed (non-GET requests)
- `429`: Rate limit exceeded
- `500`: Internal server error

## Adding New Events

To add a new event:

1. Add entry to the `events` object with a unique key
2. Update the `EventCode` type if using TypeScript
3. Ensure dates are in UTC format with proper ISO 8601 formatting
4. Update calendar.md file with the new event
