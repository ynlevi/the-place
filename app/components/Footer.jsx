import Link from "next/link";

const Footer = () => {
  return (
    <div dir="auto" className="border-t text-white  bg-primary py-4 ">
      <div className="w-11/12 md:w-10/12  px-0 mx-auto flex justify-between pt-3 items-top">
        <ul className="md:text-lg tracking-wider gap-2 flex flex-col  ">
          {menu.map((btn) => (
            <li className="hover:text-rose-300 capitalize">
              <Link href={""}>{btn}</Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-2 ">
          <li>1 Herzel St. Jerusalem</li>
          <li>theplace@mail.com</li>
        </ul>
      </div>
      <div className="mx-auto w-fit mt-6">
        <a
          href="https://ynlevi.github.io/portfolio/"
          className="mx-auto w-fit text-sm font-sans"
        >
          Create by Yonathan Levi 2023 ©
        </a>
      </div>
    </div>
  );
};

export default Footer;

const menu = ["about us", "let's talk", "book a room"];
