import NavBar from "./components/NavBar";
import "./App.css";
import { useRef } from "react";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

/* Fix hamburger menu {revist after some content is on the page to be able to be redirected}
    -Does not close menu and navigate to the link by id eg: /#about
    -minor: expanding the window hides the mobile menu, but resizing it show where it left off (we want it to reset)
*/

function App() {
  const htmlMainPage = useRef<HTMLDivElement>(null);
  const preferLightTheme = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;

  return (
    <div
      className={`page-wrapper relative text-lg font-sans flex flex-col dark:bg-neutral-800 ${
        preferLightTheme ? "light" : "dark"
      }`}
      ref={htmlMainPage}
    >
      <NavBar htmlMainPage={htmlMainPage} preferLightTheme={preferLightTheme} />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
