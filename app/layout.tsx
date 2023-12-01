import type { Metadata } from 'next'
import './globals.css'
import { ThemeProviders } from '@/common/providers/ThemeProvider'
import { SmoothScrollProvider } from '@/common/providers/SmootScrollProvider'
import { METADATA } from '@/common/constant/metadata'
import { soraSans } from '@/common/style/font'


export const metadata: Metadata = {
  metadataBase: new URL(METADATA.metadatabase),
  creator: METADATA.creator,
  description: METADATA.description,
  keywords: METADATA.keyword,
  authors: {
    name: METADATA.creator,
  },
  openGraph: {
    type: 'website',
    locale: METADATA.openGraph.locale,
    siteName: METADATA.openGraph.siteName,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={soraSans.className}>
        <ThemeProviders>
          <SmoothScrollProvider
            options={{
              smooth: true,
              mobile: {
                smooth: true,
              },
              tablet: {
                smooth: true,
              },
            }}
          >
            {children}
          </SmoothScrollProvider>
        </ThemeProviders>
      </body>
    </html>
  )
}
