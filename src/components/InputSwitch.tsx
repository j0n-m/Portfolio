import React, { useState } from "react";

type SwitchType = {
  htmlMainPage: HTMLElement;
  preferLightTheme: boolean;
};
function InputSwitch({ preferLightTheme, htmlMainPage }: SwitchType) {
  // const perferLightTheme = window.matchMedia(
  //   "(prefers-color-scheme: light)"
  // ).matches;
  const [lightTheme, setLightTheme] = useState<boolean>(preferLightTheme);

  // if (!lightTheme) {
  //   htmlMainPage.classList.add("dark");
  // }

  const handleThemeChange = () => {
    setLightTheme(!lightTheme);
    htmlMainPage.classList.toggle("dark");
  };

  return (
    <div className="themeSwitch flex justify-center items-center">
      <label className="switch">
        <input
          type="checkbox"
          aria-label="Light theme toggle switch."
          onChange={handleThemeChange}
          onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              handleThemeChange();
            }
          }}
          onClick={() => console.log("click")}
          checked={lightTheme}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default InputSwitch;
