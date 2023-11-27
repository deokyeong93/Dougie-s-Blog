import React from "react"
import PostCard from "@/components/app/posts/PostCard"
import { getMdxSources } from "@/utils/mdx"

export default async function PostsPage() {
  const mdxSources = await getMdxSources()

  return (
    <section>
      <header className="py-14">
        <h1 className="text-3xl md:text-4xl font-bold pb-4">Posts</h1>
        <p className="text-gray-300 text-sm md:text-base">
          저는 주로 개발과 관련된 포스트들을 올리려고 합니다. 그렇지만 때때로
          제가 관심있어하는 다른 부분들에 대해서도 기록을 남겨보려고 합니다.
        </p>
      </header>
      <div>
        {mdxSources.map(({ frontmatter: metaData }, idx) => (
          <PostCard key={`${metaData.slug}_${idx}`} mdxMetaData={metaData} />
        ))}
      </div>
    </section>
  )
}
