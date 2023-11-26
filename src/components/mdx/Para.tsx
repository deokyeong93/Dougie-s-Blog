import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export default function Para({ children }: Props) {
  return <p className="text-gray-300 my-4 text-base">{children}</p>
}
