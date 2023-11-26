import Image from "next/image"
import Link from "next/link"

export default function Home() {
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
      <div className="pt-12">
        <h2 className="text-2xl font-bold px-1 mb-10 leading-5">
          {"🧑‍💻 I've worked at"}
        </h2>
        <ul className="border-t">
          <li className="py-6 px-4 flex items-center border-b">
            <h3 className="text-base md:text-lg font-bold whitespace-nowrap w-2/5 md:w-40 hover:text-orange-600">
              <Link href={"https://www.barogo.com/"}>바로고</Link>
            </h3>
            <p className="text-gray-300 text-xs md:text-sm leading-2 ml-0 md:ml-4 whitespace-normal md:whitespace-nowrap overflow-hidden w-3/5">
              <span>Web Frontend</span>
              <span className="px-1">|</span>
              <span>2022.04 - 2023.07</span>
            </p>
          </li>
          <li className="py-6 px-4 flex items-center border-b">
            <h3 className="text-base md:text-lg font-bold whitespace-nowrap w-2/5 md:w-40 hover:text-neutral-500">
              <Link href={"https://imsmobility.co.kr/"}>
                아이엠에스모빌리티
              </Link>
            </h3>
            <p className="text-gray-300 text-xs md:text-sm leading-2 ml-0 md:ml-4 whitespace-normal md:whitespace-nowrap overflow-hidden w-3/5">
              <span>Web Frontend</span>
              <span className="px-1">|</span>
              <span>2021.01 - 2022.04</span>
            </p>
          </li>
        </ul>
      </div>
    </>
  )
}
