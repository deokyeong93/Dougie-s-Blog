import Link from "next/link"
import React from "react"

type Props = {
  careerMap: {
    [key: string]: {
      name: string
      url: string
      role: string
      period: string
      hoverColor: string
    }
  }
}

export default function Career({ careerMap }: Props) {
  return (
    <div className="pt-12">
      <h2 className="text-2xl font-bold px-1 mb-10 leading-5">
        {"🧑‍💻 I've worked at"}
      </h2>
      <ul className="border-t">
        {Object.keys(careerMap).map((careerKey, idx) => (
          <li key={idx} className="py-6 px-4 flex items-center border-b">
            <h3
              className={`text-base md:text-lg font-bold whitespace-nowrap w-2/5 md:w-40 ${careerMap[careerKey].hoverColor}`}
            >
              <Link href={"https://www.barogo.com/"}>
                {careerMap[careerKey].name}
              </Link>
            </h3>
            <p className="text-gray-300 text-xs md:text-sm leading-2 ml-0 md:ml-4 whitespace-normal md:whitespace-nowrap overflow-hidden w-3/5">
              <span>{careerMap[careerKey].role}</span>
              <span className="px-1">|</span>
              <span>{careerMap[careerKey].period}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
