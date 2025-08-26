import ReactCountdown from 'react-countdown'
import { useHasMounted } from '@/lib/hasMounted'

type CountdownProps = {
  date: Date
}

export const Countdown = ({ date }: CountdownProps) => {
  const hasMounted = useHasMounted()

  if (!hasMounted) {
    return null
  }

  return <ReactCountdown date={date} />
}
