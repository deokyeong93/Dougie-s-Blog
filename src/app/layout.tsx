import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { headers } from "next/headers"
import NavigationButton from "@/components/layout/NavigationButton"

type Props = {
  children: React.ReactNode
}

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "허덕형의 개발 블로그",
  description: "허덕형의 개발 블로그입니다.",
  icons: {
    icon: "/images/favicon.png",
  },
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ko">
      <body className={`${inter.className} pt-8 px-24 bg-black h-screen`}>
        <nav className="flex justify-between">
          <h1 className="text-xl font-bold">
            <Link href={"/"} className="flex items-center">
              <Image
                src={"/images/disk.png"}
                alt="disk image"
                width={24}
                height={24}
              />
              <p className="pl-2">{"Dougie's Blog"}</p>
            </Link>
          </h1>
          <ul className="flex justify-between space-x-4 text-gray-400">
            <NavigationButton
              href={"/"}
              text="Home"
              className="hover:text-white hover:border-b-2"
            />
            <NavigationButton
              href={"/about"}
              text="About"
              className="hover:text-white hover:border-b-2 border-green-300"
            />
            <NavigationButton
              href={"/posts"}
              text="Posts"
              className="hover:text-white hover:border-b-2 border-indigo-600"
            />
            <NavigationButton
              href={"/contact"}
              text="Contact"
              className="hover:text-white hover:border-b-2 border-yellow-300"
            />
          </ul>
        </nav>
        <main className="pt-4">{children}</main>
      </body>
    </html>
  )
}
