"use client"
import './globals.css'
import ContentState from './contexts/content/ContentState'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ContentState>
          {children}
        </ContentState>
      </body>
    </html>
  )
}
