"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function LinkHub() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
      }}
      className="flex gap-6 ml-1 items-center "
    >
      <a
        href="https://wjdgmlfhr0321.tistory.com/"
        className="hover:-translate-y-1"
      >
        <Image src="/icons/tistory.svg" width={25} height={25} alt="블로그" />
      </a>
      <a
        href="https://github.com/heerokj/my-portfolio.git"
        className="hover:-translate-y-1"
      >
        <Image src="/icons/github.svg" width={30} height={30} alt="깃허브" />
      </a>
      <a
        href="/resume.pdf"
        className="flex gap-2 rounded-full py-3 px-5 bg-rose-300 hover:-translate-y-1"
      >
        Resume
        <Image
          src="/icons/download.svg"
          width={15}
          height={15}
          alt="다운로드"
        />
      </a>
    </motion.div>
  );
}
