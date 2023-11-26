import fs from "fs"
import path from "path"
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemoteSerializeResult } from "next-mdx-remote"

export type MdxMetaData = {
  author: string
  title: string
  slug: string
  topics: string[]
  keywords: string[]
  description: string
  createdAt: string
  thumnail: string
}

export const getMdxSources = async () => {
  const fileNames = fs.readdirSync("database", "utf8")

  const readyToParseSources: Promise<
    MDXRemoteSerializeResult<Record<string, unknown>, MdxMetaData>
  >[] = fileNames
    .map((source) => fs.readFileSync(path.join("database", source), "utf8"))
    .map((file) => serialize(file, { parseFrontmatter: true }))

  const mdxSources = await Promise.all(readyToParseSources)

  return mdxSources
}

export const getMdxSource = async (slug: string) => {
  const mdxSources = await getMdxSources()
  const mdxSource = mdxSources.find(
    (source) => source.frontmatter.slug === slug
  )

  return mdxSource
}
