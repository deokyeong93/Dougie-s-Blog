import { useEffect, useRef } from "react"

type Props = {
  repo: string
  theme: "github-light" | "github-dark"
}

export default function Comments({ repo, theme }: Props) {
  const parentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const parent = parentRef?.current
    const script = document.createElement("script")

    script.setAttribute("src", "https://utteranc.es/client.js")
    script.setAttribute("repo", repo)
    script.setAttribute("issue-term", "pathname")
    script.setAttribute("theme", theme)
    script.setAttribute("crossorigin", "anonymous")

    script.onload = () => {
      if (parent?.children) {
        if (parent.children.length >= 2) {
          ;(parent.children[1] as HTMLElement).style.display = "none"
        }
      }
    }
    script.setAttribute("async", "true")

    parent?.appendChild(script)
  }, [parentRef, repo, theme])

  return (
    <>
      <div ref={parentRef} />
    </>
  )
}
