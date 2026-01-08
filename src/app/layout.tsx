import React from 'react';
import '../styles/index.css';
import { CartProvider } from '@/context/CartContext';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: 'Chhajed Food Products - Premium Snacks & Spreads',
  description: 'Chhajed Food Products - Premium quality dips, spreads, syrups, chatni, and fragrances from Pune, India',
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
