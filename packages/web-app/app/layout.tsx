import './globals.css'
import { Inter } from 'next/font/google'
import { stylesheet } from 'astroturf'

const styles = stylesheet`
  .Blue {
    div {
      color: green;
    }
  }
`

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  description: 'Generated by create next app',
  title: 'Create Next App',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${styles.Blue} ${inter.className}`}>{children}</body>
    </html>
  )
}
