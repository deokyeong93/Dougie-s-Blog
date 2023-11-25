"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

type Props = {
  href: string
  text: string
  className: string
}

export default function NavigationButton({ href, text, className }: Props) {
  const pathname = usePathname()
  const hasUnderline = pathname === href

  return (
    <li
      className={`${className} ${hasUnderline ? `text-white border-b-2` : ""}`}
    >
      <Link href={href}>{text}</Link>
    </li>
  )
}
