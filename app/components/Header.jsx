import Link from "next/link";
import { VscMenu } from "react-icons/vsc";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { PiArrowUpRightBold } from "react-icons/pi";

function Header() {
  return (
    <>
      <div
        className="fixed inset-0 w-screen h-20 z-40 before:absolute before:h-20 before:bg-gradient-to-b before:from-primary before:to-transparent before:inset-0 before:opacity-60"
        style={{
          backdropFilter: "blur(6px)",
          "-webkitBackdropFilter": "blur(6px)",
        }}
      >
        <div className="fixed z-20 inset-0 flex h-fit justify-between items-center w-11/12 lg:w-10/12 mx-auto ">
          <butto id="menu">
            <VscMenu size={40} className="text-white m-4 " />
          </butto>
          <div className="text-end flex text-white gap-6">
            <div className=" hidden md:flex gap-6 top-[82vh] left-0 static flex-row ">
              <button
                href="#"
                id="instegram"
                className="border-2 rounded-full w-10 h-10 border-white "
              >
                <AiFillInstagram size={23} className="m-auto" />
              </button>
              <button
                className="border-2 rounded-full w-10 h-10  border-white  "
                id="facebbok"
              >
                <FaFacebookF size={20} className="m-auto" />
              </button>
            </div>
            <Link
              className="text-lg border-2 text-primary border-white rounded-full flex items-center  "
              href="/contact"
              id="contact"
            >
              <p className="w-fit bg-white  rounded-full px-2 py-1 text-xl tracking-wide">
                Let's Chat
              </p>
              <PiArrowUpRightBold size={20} className=" text-white" />
            </Link>
          </div>
        </div>
      </div>
      <div className="md:hidden flex gap-6 flex-col fixed -z-10 top-[82vh] left-8 text-white ">
        <button
          href="#"
          id="instegram"
          className="border-2 rounded-full w-10 h-10 border-white "
        >
          <AiFillInstagram size={23} className="m-auto" />
        </button>
        <button
          className="border-2 rounded-full w-10 h-10 border-white "
          id="facebook"
        >
          <FaFacebookF size={20} className="m-auto" />
        </button>
      </div>
    </>
  );
}

export default Header;
