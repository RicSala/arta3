import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '../../components/navBar/NavBar'
import { SessionProvider } from "next-auth/react"
import ClientSessionProvider from '../../utils/SessionProvider'
import { Nunito } from "next/font/google"
import { AuthProvider } from '../../contexts/auth/AuthProvider'
import { UiProvider } from '../../contexts/ui/UiProvider'


export const metadata = {
  title: "TATTUO · Tatuajes y Tatuadores seleccionados para ti",
  description: "TATTUO es una plataforma que te permite encontrar tatuadores y tatuajes de calidad, además de poder agendar citas con los mejores artistas.",
}

const font = Nunito({
  subsets: ['latin']
})



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientSessionProvider>
          <AuthProvider>
            <UiProvider>
              {children}
            </UiProvider>
          </AuthProvider>
        </ClientSessionProvider>
      </body>
    </html>
  )
}
