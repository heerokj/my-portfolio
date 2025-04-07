import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center fixed top-0 w-full py-6 px-[80px] z-10">
      <div className="header-logo">
        <h1 className="font-bold text-3xl font-logo">
          <a href="#">Jungheerok</a>
        </h1>
      </div>
      <nav>
        <ul className="header-menu flex gap-6 text-2xl font-bold px-8 py-4 bg-[#fffdfc] rounded-full shadow-md ">
          <li>
            <a href="#main">home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#career">Career</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
