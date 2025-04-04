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
    <div>
      <form>
        <label htmlFor="email">email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="이메일를 입력해주세요"
          value={form.email}
          onChange={handleChange}
          required
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
        />
        <button type="button" onClick={onSubmit}>
          전달
        </button>
      </form>
    </div>
  );
}
