import React from "react"
import fs from "fs"
import path from "path"
import { serialize } from "next-mdx-remote/serialize"

export default async function PostsPage() {
  const fileNames = fs.readdirSync("database", "utf8")

  const readyToParseSources = fileNames
    .map((source) => fs.readFileSync(path.join("database", source), "utf8"))
    .map((file) => serialize(file, { parseFrontmatter: true }))

  const mdxSources = await Promise.all(readyToParseSources)

  return <div>PostsPage</div>
}
