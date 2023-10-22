import Link from "next/link";
import config from "../config";

function Room({ room }) {
  return (
    <>
      <Link
        href={`/rooms/${room.id.toString()}`}
        target="_blank"
        className={`max-w-xs lg:max-w-sm rounded-lg p-4 my-4 flex-shrink-0 snap-start scroll-m-4 snap-mandatory bg-secondary text-primary flex flex-col gap-6 ml-9 duration-500 md:hover:shadow-2xl drop-shadow-sm scroll-ml-16 `}
      >
        <h2 className="text-3xl md:text-4xl font-light">
          {room.attributes.name}
        </h2>

        <p className="font-light flex-grow">
          {room.attributes.description[0].children[0].text
            .substring(0, 140)
            .replace(/\'\s\w*$/, "") + " "}
          <strong className="uppercase font-sans">read more</strong>
        </p>
        <div className="relative overflow-hidden ">
          <img
            src={`${room.attributes.image.data[0].attributes.formats.small.url}`}
            alt={room.attributes.name}
            className="object-cover hover:scale-105 duration-500 h-44 md:h-60 w-full"
          />
        </div>
      </Link>
    </>
  );
}

export default Room;
