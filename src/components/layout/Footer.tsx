import Link from "next/link"
import React from "react"
import Svg from "../common/Svg"

export default function Footer() {
  return (
    <footer className="flex items-center border-solid border-t-2 border-indigo-600 justify-between text-white py-2">
      <div>
        <span>©FE DeokHyeong Heo.</span>
      </div>
      <div className="flex space-x-3">
        <Link href="https://github.com/deokyeong93" target="_blank">
          <Svg
            icon={"github"}
            color="white"
            size={32}
            className="hover:fill-gray-400"
          />
        </Link>
        <Link href="https://www.instagram.com/heodeok/" target="_blank">
          <Svg
            icon={"instagram"}
            color="white"
            size={32}
            className="hover:fill-gray-400"
          />
        </Link>
      </div>
    </footer>
  )
}
