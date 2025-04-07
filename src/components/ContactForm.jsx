"use client";
import { sendContactForm } from "@/lib/contact";
import React, { useState } from "react";

const initFormData = { email: "", title: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initFormData);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async () => {
    setLoading(true);
    await sendContactForm(form);
    setLoading(false);
  };

  return (
    <form className="border border-gray-200 bg-[#fffdfc] p-4 flex flex-col gap-2 w-1/3 rounded-xl mt-6">
      <label htmlFor="email">email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="이메일를 입력해주세요"
        value={form.email}
        onChange={handleChange}
        required
        className="border border-gray-200 p-2 rounded-lg"
      />
      <label htmlFor="title">제목</label>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="제목을 입력해주세요"
        value={form.title}
        onChange={handleChange}
        required
        className="border border-gray-200 p-2 rounded-lg"
      />
      <label htmlFor="message">내용</label>
      <textarea
        type="text"
        id="message"
        name="message"
        placeholder="내용을 입력해주세요"
        value={form.message}
        onChange={handleChange}
        required
        className="border border-gray-200 p-2 rounded-lg resize-none h-48"
      />
      <button
        type="button"
        onClick={onSubmit}
        className="rounded-full py-3 px-5 mt-4 shadow-md bg-rose-300"
      >
        전달하기
      </button>
    </form>
  );
}
