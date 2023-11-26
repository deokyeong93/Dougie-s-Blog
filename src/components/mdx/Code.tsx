import { ReactNode } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism"

type Props = {
  className?: string
  children: ReactNode
}

export default function Code({ className, children, ...props }: Props) {
  const match = /language-(\w+)/.exec(className || "")

  return match ? (
    <>
      <p className="bg-[#1d1f21] p-2 border-slate-400 border-b-2">{match[1]}</p>
      <SyntaxHighlighter
        customStyle={{
          marginTop: 0,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        }}
        showLineNumbers
        style={atomDark}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    </>
  ) : (
    <span className={className} {...props}>
      {children}
    </span>
  )
}
