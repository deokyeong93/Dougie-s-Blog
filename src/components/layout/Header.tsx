import Image from "next/image"
import Link from "next/link"
import React from "react"
import NavigationButton from "./NavigationButton"

export default function Header() {
  return (
    <header>
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
    </header>
  )
}
