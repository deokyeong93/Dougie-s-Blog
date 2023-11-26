import MdxContent, { MdxSource } from "@/components/mdx/MdxContent"
import { getMdxSource, getMdxSources } from "@/utils/mdx"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"

type Props = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const mdxSources = await getMdxSources()

  const slugs = mdxSources.map((source) => ({
    slug: source.frontmatter.slug,
  }))

  return slugs
}

export async function generateMetadata({ params }: Props) {
  const mdxSource = await getMdxSource(params.slug)

  if (!mdxSource) {
    return {
      title: "Not Found",
      description: "No blog Post has been found",
    }
  }

  const { frontmatter: meta } = mdxSource

  return {
    title: meta.title,
    author: meta.author,
    description: meta.description,
    keywords: meta.keywords,
  }
}

export default async function PostDetailPage({ params }: Props) {
  const mdxSource = await getMdxSource(params.slug)

  return <MdxContent source={mdxSource} />
}
