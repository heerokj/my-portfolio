import React from "react";
import LinkHub from "./LinkHub";
import ProfilePhoto from "./ProfilePhoto";
import Introduction from "./Introduction";

export default function Main() {
  return (
    <div className="flex justify-center items-center gap-16 ">
      <div>
        <Introduction />
        <LinkHub />
      </div>
      <ProfilePhoto poTo="heerok-character" />
    </div>
  );
}
