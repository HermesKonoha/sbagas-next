import type { Metadata, Viewport } from 'next';
import '@/styles/global.css';

export const metadata: Metadata = {
  title: 'Barbearia Navalha — Cortes, barba e cuidados com precisão',
  description: 'Cortes, barba e cuidados com a precisão que você merece. Planos mensais a partir de R$79.',
  openGraph: {
    title: 'Barbearia Navalha — Cortes, barba e cuidados com precisão',
    description: 'Cortes, barba e cuidados com a precisão que você merece. Planos mensais a partir de R$79.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Barbearia Navalha',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Barbearia Navalha — Cortes, barba e cuidados com precisão',
    description: 'Cortes, barba e cuidados com a precisão que você merece. Planos mensais a partir de R$79.',
  },
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout(props: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        {props.children}
      </body>
    </html>
  );
}
