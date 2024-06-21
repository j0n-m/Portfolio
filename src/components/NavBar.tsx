import { useEffect, useState } from "react";
import InputSwitch from "./InputSwitch";

type NavItem = {
  label: string;
  path: string;
};
type NavBarProps = {
  htmlMainPage: HTMLElement;
  preferLightTheme: boolean;
};
const hamburgerMenuBtnText = new Map();
hamburgerMenuBtnText.set(0, "☰");
hamburgerMenuBtnText.set(1, "✕");

const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "#about" },
  { label: "Projects", path: "#projects" },
  { label: "Contact", path: "#contact" },
];

function NavBar({ htmlMainPage, preferLightTheme }: NavBarProps) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (menuIsOpen && window.matchMedia("(min-width: 768px)").matches) {
        setMenuIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuIsOpen]);

  return (
    <header className="py-3 border-b-orange-600 border-b">
      <nav className="py-2 px-4 flex justify-between dark:bg-neutral-800 dark:text-neutral-100 overflow-auto">
        <div className="logo flex justify-items-center items-center">
          <a href="/" className="text-2xl">
            Jon.Dev
          </a>
        </div>

        <button
          className={`hamburgerMenuBtn flex items-center justify-center text-2xl rounded-md px-2 py-1 hover:ring-2 md:hidden ${
            menuIsOpen && "menu"
          }`}
          onClick={() => {
            const html = document.documentElement;
            if (!menuIsOpen) {
              //when menu is about to open - disable scroll behavior
              html.style.position = "relative";
              html.style.overflow = "hidden";
            } else {
              html.style.position = "";
              html.style.overflow = "auto";
            }
            setMenuIsOpen(!menuIsOpen);
          }}
        >
          {menuIsOpen ? "✕" : "☰"}
        </button>

        <ul
          className={`hamburgerMenu ${
            menuIsOpen ? "block" : "hidden hide"
          } fixed top-20 left-0 right-0 min-h-svh bg-orange-200 dark:bg-neutral-700 z-10 flex flex-col text-center py-6 md:hidden`}
        >
          <a href="/#about">
            <p>About</p>
          </a>
          <p>Projects</p>
          <p>Contact</p>
        </ul>

        <ul className="hidden gap-4 md:flex">
          {navItems.map((link, i) => (
            <li key={i} className="flex justify-center items-center">
              <a
                className="hover:underline hover:text-blue-500 focus:text-blue-500"
                href={link.path}
              >
                {link.label}
              </a>
            </li>
          ))}
          <div className="divider border-l-2 border-gray-400"></div>

          <InputSwitch
            htmlMainPage={htmlMainPage}
            preferLightTheme={preferLightTheme}
          />
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
