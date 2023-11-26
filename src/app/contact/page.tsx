import EmailSendForm from "@/components/app/contact/EmailSendForm"
import Svg from "@/components/common/Svg"
import Link from "next/link"
import React from "react"

export default function ContactPage() {
  return (
    <section>
      <header className="py-14">
        <h1 className="flex space-x-3 items-center text-3xl md:text-4xl font-bold pb-4">
          <span>Contact Me</span>
          <Link href="https://github.com/deokyeong93" target="_blank">
            <Svg
              icon={"github"}
              color="white"
              size={32}
              className="hover:fill-gray-400"
            />
          </Link>
          <Link href="https://www.instagram.com/heodeok/" target="_blank">
            <Svg
              icon={"instagram"}
              color="white"
              size={32}
              className="hover:fill-gray-400"
            />
          </Link>
        </h1>
        <p className="text-gray-300 text-sm md:text-base">
          궁금한 사항이 있으시면 deokyeong1020@kakao.com로 직접 문의주시거나
          <br />
          아래 이메일 전송 폼을 이용해주세요. 🙏
        </p>
      </header>
      <div className="flex flex-col items-center">
        <EmailSendForm />
      </div>
    </section>
  )
}
