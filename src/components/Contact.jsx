import React from "react";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="flex flex-col items-center gap-2">
      <h2 className="font-content text-[30px] font-bold">Contact</h2>
      <p>언제든지 연락주시면 감사하겠습니다.🙂</p>
      <ContactForm />
    </div>
  );
}
