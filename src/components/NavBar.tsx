import { useRef, useState } from "react";
import InputSwitch from "./InputSwitch";

type NavItem = {
  label: string;
  path: string;
};
type NavBarProps = {
  htmlMainPage: React.RefObject<HTMLDivElement>;
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
  const hamburgerMenuBtn = useRef<HTMLButtonElement>(null);
  const hamburgerMenu = useRef<HTMLUListElement>(null);
  const menuIsOpen = useState(false);

  const renderFullNavLinks = () => {
    return (
      <ul className="flex gap-4">
        {navItems.map((link, i) => (
          <li key={i}>
            <a
              className="hover:underline hover:text-blue-500 focus:text-blue-500"
              href={link.path}
            >
              {link.label}
            </a>
          </li>
        ))}
        <div className="border-l-2 border-gray-400"></div>
        <InputSwitch
          htmlMainPage={htmlMainPage}
          preferLightTheme={preferLightTheme}
        />
      </ul>
    );
  };
  const renderMobileMenu = () => {
    return <p>Menu</p>;
  };

  return (
    <nav className="py-4 px-4 flex justify-between dark:bg-neutral-800 dark:text-neutral-100 overflow-auto">
      <div className="logo flex justify-items-center items-center">
        <a href="/" className="text-2xl">
          Jon.Dev
        </a>
      </div>

      <button
        className="text-2xl rounded-md px-2 py-1 hover:bg-neutral-600 focus:ring-purple-800 md:hidden"
        onClick={() => {
          hamburgerMenuBtn.current!.textContent =
            hamburgerMenuBtn.current?.textContent == hamburgerMenuBtnText.get(0)
              ? hamburgerMenuBtnText.get(1)
              : hamburgerMenuBtnText.get(0);
          hamburgerMenu.current?.classList.toggle("hidden");
        }}
        ref={hamburgerMenuBtn}
      >
        &#9776;
      </button>

      <ul
        className="hamburgerMenu hidden fixed top-16 left-0 right-0 min-h-svh bg-neutral-700 z-10 flex flex-col text-center py-6 md:hidden"
        ref={hamburgerMenu}
      >
        <a href="/#about">
          <p>About</p>
        </a>
        <p>Projects</p>
        <p>Contact</p>
      </ul>

      <ul className="hidden gap-4 md:flex">
        {navItems.map((link, i) => (
          <li key={i} className="">
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
  );
}

export default NavBar;
