import { Rubik, Montserrat } from 'next/font/google'

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
})
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})
export const fonts = {
  rubik,
  montserrat,
}