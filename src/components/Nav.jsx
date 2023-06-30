import { useState } from "react";

const Nav = () => {
  const links = [
    { name: "home", link: "#home" },
    { name: "projects", link: "#info" },
    { name: "about me", link: "#about" },
    { name: "contact me", link: "#footer" },
  ];

  const [open, setOpen] = useState(true)

  return (
    <div className=" w-full fixed top-0 left-0 z-10">
      <div className="md:flex items-center justify-between bg-gray-950 sm:bg-gray-950 py-4 md:px-10 pl-2">
        <div className="font-bold text-2xl cursor-pointer flex items-center">
          {/* imagen/logo */}
          <div className="mr-4">
            <img  src="/images/logo.png" alt="" />
          </div>

          <h1 className="text-[#fff]">Diego Dev</h1>
        </div>
        <div onClick={() => setOpen(!open)} className="text-3xl text-[#fff] absolute right-8 top-6 cursor-pointer md:hidden">
          <ion-icon name={open ? "menu":"close"}></ion-icon>
          {/* <ion-icon name="close-outline"></ion-icon> */}
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#fff]  sm:bg-gray-950 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-4 transition-all duration-500 ease-in ${open ? "top-20 hidden": "top-[70px]"} `}>
          {links.map((link) => (
            <li key={link.name} className="capitalize md:ml-8 text-lg  md:my-0 my-7 ">
              <a
                href={link.link}
                className="text-gray-900 sm:text-[#fff] hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Nav;
