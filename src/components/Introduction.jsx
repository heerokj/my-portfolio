"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Introduction() {
  return (
    <div className="pb-6">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
        }}
        className="text-6xl space-y-5 pb-6"
      >
        <p>안녕하세요! 프론트엔드 개발자</p>
        <p>
          <strong>정희록</strong>입니다.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{
          ease: "easeInOut",
          duration: 0.7,
        }}
        className="text-xl"
      >
        <p>저는 주도적으로 문제를 찾아 해결하고 더 나은 방향을 고민합니다.</p>
        <p>사용자 입장이 되어 생각하는 프론트엔드 개발자가 되겠습니다.</p>
      </motion.div>
    </div>
  );
}
