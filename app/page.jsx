import React from "react";
import MainVideo from "./components/MainVideo";
import MoodCards from "./components/MoodCards";
import Rooms from "./components/Rooms";
import HeadLineText from "./components/HeadLineText";
import Introduction from "./components/Introduction";
const page = async () => {
  return (
    <div>
      <MainVideo />
      <HeadLineText />
      <MoodCards />
      <Introduction />
      <Rooms />
    </div>
  );
};

export default page;
