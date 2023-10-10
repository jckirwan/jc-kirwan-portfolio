import './globals.css'
import ContentState from './contexts/contexts/content/ContentState'

export const metadata = {
  title: 'JC Kirwan',
  description: 'Kirwan-ing',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ContentState>
        {children}
      </ContentState>
    </html>
  )
}
