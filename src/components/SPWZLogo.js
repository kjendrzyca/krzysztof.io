import NextImage from 'next/image'
import { useHasMounted } from '@/lib/hasMounted'
import { useTheme } from 'next-themes'

export const SPWZLogo = () => {
  const { theme } = useTheme()
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return null;
  }

  return (
    <span className="image-wrapper" style={{textAlign: 'center'}}>
      {theme === 'dark' ? (
        <NextImage src="/spwz/spwz-logo-dark.png" width={100} height={100} alt="Logo" />
      ) :
        <NextImage src="/spwz/spwz-logo-light.png" width={100} height={100} alt="Logo" />
      }
    </span>
  )
}
