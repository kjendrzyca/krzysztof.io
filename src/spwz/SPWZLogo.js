import NextImage from 'next/image'

export const SPWZLogo = () => {
  return (
    <span className="image-wrapper" style={{textAlign: 'center'}}>
      <NextImage src="/spwz/spwz-logo-light.png" width={100} height={100} alt="Logo" />
    </span>
  )
}
