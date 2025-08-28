"use client"
import { useEffect } from 'react'

type Props = {
  adClient?: string; // optional override, default in layout script
  adSlot: string;
  style?: string;
  className?: string;
}

export default function AdSenseAd({ adClient, adSlot, style, className }: Props) {
  useEffect(() => {
    try {
      // @ts-expect-error: window.adsbygoogle is injected by Google AdSense script at runtime
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // ignore
    }
  }, [])

  return (
    <div className={className} style={{ width: '100%', textAlign: 'center' }}>
      <ins className="adsbygoogle"
        style={style ? JSON.parse(style) : { display: 'block' }}
        data-ad-client={adClient || undefined}
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}
