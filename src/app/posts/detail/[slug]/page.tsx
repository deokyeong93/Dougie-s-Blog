import MdxContent, { MdxSource } from "@/components/mdx/MdxContent"
import fs from "fs"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
import path from "path"

type Props = {
  params: {
    slug: string | string[]
  }
}

export default async function PostDetailPage({ params }: Props) {
  const filePath = path.join("database", `${params.slug}.mdx`)
  const source = fs.readFileSync(filePath, "utf8")

  const mdxSource: MdxSource = await serialize(source, {
    parseFrontmatter: true,
  })

  return <MdxContent source={mdxSource} />
}
