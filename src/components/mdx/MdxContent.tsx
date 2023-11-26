"use client"

import { H1, H2 } from "@/components/mdx/Heading"
import Para from "@/components/mdx/Para"
import { MDXProvider } from "@mdx-js/react"
import { MDXComponents } from "mdx/types"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import Code from "./Code"
import PostBadge from "../app/posts/PostBadge"
import { MdxMetaData } from "@/utils/mdx"

export type MdxSource = MDXRemoteSerializeResult<
  Record<string, unknown>,
  MdxMetaData
>

type LayoutProps = {
  source?: MdxSource
}

export default function MdxContent({ source, ...props }: LayoutProps) {
  const components = {
    h1: H1,
    h2: H2,
    p: Para,
    code: Code,
  }

  if (!source) {
    return (
      <>
        <span>데이터 불러오기 실패</span>
      </>
    )
  }

  return (
    <MDXProvider>
      <div className="w-[80%] mx-auto p-6">
        <div className="flex flex-col mt-6 mb-10 items-center justify-center text-center">
          <h1 className="text-3xl font-bold">{source.frontmatter.title}</h1>
          <p className="text-md text-gray-400">
            By {source.frontmatter.author}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {source.frontmatter.topics.map((topic, index) => (
              <PostBadge key={index} topic={topic} />
            ))}
          </div>
        </div>
      </div>
      <MDXRemote
        components={components as Readonly<MDXComponents>}
        {...source}
      />
    </MDXProvider>
  )
}
