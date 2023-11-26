import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export function H1({ children }: Props) {
  return <h1 className="text-2xl font-bold">{children}</h1>
}

export function H2({ children }: Props) {
  return <h2 className="text-xl font-bold">{children}</h2>
}
