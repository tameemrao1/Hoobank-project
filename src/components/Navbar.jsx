import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [hovered, setHovered] = useState(null);
  const [toggle, setToggle] = useState(false);

  // Function to handle link click in mobile menu
  const handleLinkClick = () => {
    if (toggle) {
      setToggle(false);
    }
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] transition-all duration-300 ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${hovered === nav.title ? "text-[20px]" : "text-[14px]"} ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } ${
              hovered && hovered !== nav.title
                ? "text-[12px] text-dimWhite"
                : ""
            }`}
            onMouseEnter={() => setHovered(nav.title)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => {
              setActive(nav.title);
              handleLinkClick(); // Close the menu on link click
            }}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain z-20"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            toggle ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          } transition-opacity duration-300 ease-in-out px-8 z-10 py-6 absolute top-0 right-0 min-w-[100vw] min-h-[100vh] flex flex-col justify-center items-center rounded-xl sidebar backdrop-blur-xl`}
        >
          <ul className="list-none flex flex-col justify-center items-center">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer ${
                  active === nav.title
                    ? "text-white text-[40px]"
                    : "text-dimWhite text-[16px] hover:text-white hover:text-[40px] transition-all duration-300"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => {
                  setActive(nav.title);
                  handleLinkClick(); // Close the menu on link click
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
