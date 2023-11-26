import React from "react"

type Props = {
  topic: string
}

export default function PostBadge({ topic }: Props) {
  return (
    <span
      key={topic}
      className="text-sm text-black bg-gray-200 rounded-full px-2 py-1"
    >
      {topic.slice(0, 1).toUpperCase() + topic.slice(1)}
    </span>
  )
}
