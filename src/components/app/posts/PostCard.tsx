import Image from "next/image"
import Link from "next/link"
import React from "react"
import PostBadge from "./PostBadge"
import { MdxMetaData } from "@/utils/mdx"

type Props = {
  mdxMetaData: MdxMetaData
}

export default function PostCard({ mdxMetaData, ...props }: Props) {
  return (
    <Link
      className="grid grid-cols-12 py-4 border-b-2 border-gray-400 group"
      href={`/posts/detail/${mdxMetaData.slug}`}
    >
      <div className="col-span-9 grid grid-rows-4">
        <div className="self-center space-x-2">
          {mdxMetaData.topics.map((topic, index) => (
            <PostBadge key={index} topic={topic} />
          ))}
        </div>
        <h1 className="text-2xl mb-2 row-span-1 group-hover:text-indigo-600">
          {mdxMetaData.title}
        </h1>
        <p className="h-10 text-gray-300 row-span-3">
          {mdxMetaData.description}
        </p>
        <div className="row-span-1 text-gray-400">{mdxMetaData.createdAt}</div>
      </div>
      <Image
        className="col-span-3 justify-self-end"
        src={mdxMetaData.thumnail}
        width={150}
        height={150}
        alt={`${mdxMetaData.title}_image`}
      />
    </Link>
  )
}
