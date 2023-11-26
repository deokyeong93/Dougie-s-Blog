"use client"

import React, { useState } from "react"

export default function EmailSendForm() {
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

  return (
    <div className="bg-indigo-600 space-y-2 w-6/12 p-4">
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
        <button className="w-full py-2 rounded-md bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 focus:outline-none">
          이메일 보내기
        </button>
      </div>
    </div>
  )
}
