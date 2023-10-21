import fetchDataFromStrapi from "@/app/api/fetchDataFromStrapi";

import React from "react";
import config from "../../config";
import { MdOutlineCoffeeMaker } from "react-icons/md";
import { TbIroningSteam } from "react-icons/tb";
import { FaWifi } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { PiHandSoapFill } from "react-icons/pi";

export const metadata = {
  title: "The Place - rooms",
};

async function page({ params: { id } }) {
  const room = await fetchDataFromStrapi(`/api/rooms/${id}/?populate=*`);
  console.log(room, "room");
  const { name, description, suite, image } = await room.attributes;
  const facilities = [
    { name: "Coffee Maker", icon: <MdOutlineCoffeeMaker size={30} /> },
    { name: "WiFi", icon: <FaWifi size={30} /> },
    { name: "Television", icon: <FaTv size={30} /> },
    { name: "Toiletries", icon: <PiHandSoapFill size={30} /> },
    { name: "Iron", icon: <TbIroningSteam size={30} /> },
  ];

  return (
    <div dir="ltr" className="mt-20 text-primary mx-auto ">
      <div className="flex items-center  flex-col-reverse justify-end md:flex-row ">
        <h1 className="text-5xl border-y-4 my-10 md:text-7xl px-3 md:mr-3 md:py-5 md:border-y-8 border-secondary left-32 top-36 z-20 md:absolute ">
          {name}
        </h1>
        <img
          src={`${image.data[0].attributes.url}`}
          alt={image.data[0].attributes.hash}
          className="w-10/12 md:w-8/12 object-cover md:room-clip-md"
        />
      </div>
      <div className="w-10/12 mx-auto gap-8 md:gap-0 md:my-14 flex flex-col md:flex-row justify-between ">
        <p className=" text-lg leading-8 md:w-5/12 md:leading-9 md:pt-8">
          <strong className="font-serif text-7xl float-left ">”&nbsp;</strong>
          {`${description[0].children[0].text} ${description[0].children[0].text}`}
          <strong className="font-serif text-7xl float-right">&nbsp;“</strong>
        </p>
        <div className="flex flex-col gap-4 justify-center md:pr-4 w-7/12 md:w-fit mx-auto md:mx-0 mb-10">
          {facilities.map(({ name, icon }) => (
            <ul className="flex gap-4 border-2 border-secondary items-center font-medium px-4 py-3 justify-between hover:bg-secondary">
              <li>{name}</li>
              <li>{icon}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
    // {suite ? "true" : "false"}
  );
}

export default page;
