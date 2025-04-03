import React from "react";
import LinkHub from "./LinkHub";
import ProfilePhoto from "./ProfilePhoto";
import Introduce from "./Introduce";

export default function Main() {
  return (
    <div className="flex justify-center gap-16 pt-[200px]">
      <div className="pt-10">
        <Introduce />
        <LinkHub />
      </div>
      <ProfilePhoto />
    </div>
  );
}
