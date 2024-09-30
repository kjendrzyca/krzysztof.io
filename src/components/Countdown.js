import ReactCountdown from 'react-countdown'
import { useHasMounted } from '@/lib/hasMounted'

export const Countdown = ({date}) => {
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return null;
  }

  return <ReactCountdown date={date} />
}
