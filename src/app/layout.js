import './globals.css'


export const metadata = {
  title: 'JC Kirwan',
  description: 'Kirwan-ing',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
