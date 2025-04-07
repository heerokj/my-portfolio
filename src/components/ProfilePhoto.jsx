"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function ProfilePhoto({ poTo }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{
        ease: "easeInOut",
        duration: 0.9,
      }}
    >
      <Image
        src={`/images/${poTo}.png`}
        width={300}
        height={300}
        alt="프로필 사진"
        className="rounded-full"
      />
    </motion.div>
  );
}
