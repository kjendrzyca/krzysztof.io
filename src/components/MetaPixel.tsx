import Head from 'next/head'

const PIXEL_CONFIG = {
  spwz: '1109547327810831',
} as const

const getPixelId = (slug: string): string | null => {
  for (const [keyword, pixelId] of Object.entries(PIXEL_CONFIG)) {
    if (slug.includes(keyword)) {
      return pixelId
    }
  }

  return null
}

export const MetaPixel = ({ slug }: { slug: string }) => {
  const pixelId = getPixelId(slug)

  if (!pixelId) {
    return null
  }

  return (
    <Head>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${pixelId}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
        />
      </noscript>
    </Head>
  )
}
