import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './Youtubecomponent/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Youtube clone',
  description: 'Youtube clone by Ashutosh',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>
        <div>
          <Navbar/>
          {children}
          </div>
        </ThemeRegistry>
          
       
       
       
        </body>
    </html>
  )
}
