"use client"

import Spinner from "@/components/common/Spinner"
import React, { useState } from "react"

export default function EmailSendForm() {
  const [emailSendResult, setEmailSendResult] = useState({
    status: "",
    message: "",
  })
  const [form, setForm] = useState({
    email: "",
    title: "",
    message: "",
  })

  const onChangeForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const onSubmitEmailForm = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      setEmailSendResult({ status: "loading", message: "" })

      const response = await fetch("/api/contact", {
        method: "post",
        body: JSON.stringify(form),
      })

      if (response.status !== 200) {
        if (response.statusText === "This is not valid Email.") {
          return setEmailSendResult({
            status: "warn",
            message: "⚠️ 유효하지 않은 이메일 주소 입니다.",
          })
        }
      }
      const responseData = await response.json()

      setEmailSendResult({ status: "success", message: "✅ 이메일 전송 성공" })
    } catch (err) {
      setEmailSendResult({ status: "fail", message: "❌ 이메일 전송 실패" })
    }
  }

  const { message, status } = emailSendResult
  const isEmailSending = status === "loading"

  const messageBackgroundMap: { [key: string]: string } = {
    success: "bg-green-400",
    warn: "bg-orange-500",
    fail: "bg-red-400",
  }

  return (
    <>
      {emailSendResult.message && (
        <div
          className={`w-2/6 ${messageBackgroundMap[status]} px-4 py-3 mb-4 rounded relative`}
        >
          <span className="block sm:inline">{emailSendResult.message}</span>
        </div>
      )}
      <form
        onSubmit={onSubmitEmailForm}
        className="bg-indigo-600 space-y-2 w-6/12 p-4"
      >
        <div>
          <p className="pb-1">문의하신 내용 답변 받으실 이메일</p>
          <input
            className="w-full rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            name="email"
            onChange={onChangeForm}
            value={form.email}
          ></input>
        </div>
        <div>
          <p className="pb-1">제목</p>
          <input
            className="w-full rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            name="title"
            onChange={onChangeForm}
            value={form.title}
          ></input>
        </div>
        <div>
          <p className="pb-1">내용</p>
          <textarea
            className="w-full h-64 rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            name="message"
            onChange={onChangeForm}
            value={form.message}
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            disabled={status === "loading"}
            className={`w-full py-2 rounded-md ${
              isEmailSending
                ? "bg-emerald-700 hover:bg-emerald-700"
                : "bg-emerald-400 hover:bg-emerald-600"
            } focus:outline-none`}
          >
            {isEmailSending ? <Spinner /> : "이메일 보내기"}
          </button>
        </div>
      </form>
    </>
  )
}
