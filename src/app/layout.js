import './globals.css'
import ModalState from './components/Modal/context/ModalState'

export const metadata = {
  title: 'JC Kirwan',
  description: 'Kirwan-ing',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ModalState>
        {children}
      </ModalState>
    </html>
  )
}
