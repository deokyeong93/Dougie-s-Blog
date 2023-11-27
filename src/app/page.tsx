import Career from "@/components/app/home/Career"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const careerMap = {
    barogo: {
      name: "바로고",
      url: "https://www.barogo.com/",
      role: "Web Frontend",
      period: "2022.04 - 2023.07",
      hoverColor: "hover:text-orange-600",
    },
    ims: {
      name: "아이엠에스모빌리티",
      url: "https://imsmobility.co.kr/",
      role: "Web Frontend",
      period: "2021.01 - 2022.04",
      hoverColor: "hover:text-neutral-600",
    },
  }

  return (
    <>
      <div className="grid gap-6 grid-cols-[3fr_2fr] items-center">
        <header className="pt-28 pb-12">
          <h1 className="text-5xl font-bold leading-[1.1]">
            {"Hey, I'm DeokHyeong Heo!"}
          </h1>
          <p className="pt-6 text-[1.2rem]">
            안녕하세요, 제 블로그에 오신 것을 환영합니다. 🙇‍♂️
            <br />
            <br />
            저는 프론트엔드 개발자입니다.
            <br />
            약 2년 10개월 정도의 개발자로 웹과 하이브리드 앱의 UI/UX 개발 업무를
            진행한 경험이 있습니다.
            <br /> 누구나 알아보기 쉽고, 확정성이 높은 코드를 작성하는데 관심이
            많습니다.
          </p>
        </header>
        <Image
          className="pl-28 pt-24"
          src="/images/computer_pixel.png"
          width={390}
          height={320}
          alt={"마리오"}
        />
      </div>
      <Career careerMap={careerMap} />
    </>
  )
}
