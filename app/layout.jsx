/* eslint-disable @next/next/no-head-element */
import '@/styles/globals.css';

export default function RootLayout({ children }) {
  console.log("Hola")
  return (
    <html>
      <head></head>
      <body>{children}</body>
    </html>
  );
}
