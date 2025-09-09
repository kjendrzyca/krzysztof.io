import { CenteredH2 } from '@/components/CenteredH2'

export const Demo = () => {
  return (
    <>
      <CenteredH2>Przykładowe nagrania</CenteredH2>

      <div style={{ position: 'relative', paddingTop: '56.25%' }}>
        <iframe
          src="https://iframe.mediadelivery.net/embed/174887/6dfeed7e-247c-4a2a-99f5-33d720426d23?autoplay=false&loop=false&muted=false&preload=true&responsive=true"
          loading="lazy"
          style={{ border: '0', position: 'absolute', top: '0', height: '100%', width: '100%' }}
          allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
          allowFullScreen
        />
      </div>

      <br />

      <div style={{ position: 'relative', paddingTop: '56.25%' }}>
        <iframe
          src="https://iframe.mediadelivery.net/embed/174887/08817cac-88c8-4cb8-a355-18859b3293c6?autoplay=false&loop=false&muted=false&preload=true&responsive=true"
          loading="lazy"
          style={{ border: '0', position: 'absolute', top: '0', height: '100%', width: '100%' }}
          allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
          allowFullScreen
        />
      </div>

      <div style={{ position: 'relative', paddingTop: '56.25%' }}>
        <iframe
          src="https://iframe.mediadelivery.net/embed/174887/67b062e3-545b-4a0b-a9ea-0dce5f7d0bc9?autoplay=false&loop=false&muted=false&preload=true&responsive=true"
          loading="lazy"
          style={{ border: '0', position: 'absolute', top: '0', height: '100%', width: '100%' }}
          allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
          allowFullScreen
        />
      </div>
    </>
  )
}
