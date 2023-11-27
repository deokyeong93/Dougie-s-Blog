import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

type Props = {
  children: React.ReactNode
}

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "허덕형의 개발 블로그",
    template: "허덕형의 개발 블로그 | %s",
  },
  description: "허덕형의 개발 블로그입니다.",
  icons: {
    icon: "/images/favicon.png",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 0.5,
  maximumScale: 1,
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ko">
      <body
        className={`${inter.className} pt-8 px-20 max-w-[1160px] min-w-[700px] mx-auto bg-black h-screen flex flex-col`}
      >
        <Header />
        <main className="grow pt-4 pb-32">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
