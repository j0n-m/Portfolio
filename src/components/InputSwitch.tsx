import React, { useState } from "react";

type SwitchType = {
  htmlMainPage: React.RefObject<HTMLDivElement>;
  preferLightTheme: boolean;
};
function InputSwitch({ preferLightTheme, htmlMainPage }: SwitchType) {
  // const perferLightTheme = window.matchMedia(
  //   "(prefers-color-scheme: light)"
  // ).matches;
  const [lightTheme, setLightTheme] = useState<boolean>(preferLightTheme);

  // useEffect(() => {
  //   if (!lightTheme) {
  //     console.log(htmlMainPage);
  //     console.log(lightTheme);
  //     htmlMainPage.current?.classList.toggle("dark");
  //   }
  // }, []);
  // if (!lightTheme) {
  //   console.log(htmlMainPage);
  //   console.log(lightTheme);
  //   htmlMainPage.current?.classList.toggle("dark");
  // }

  const handleThemeChange = () => {
    setLightTheme(!lightTheme);
    htmlMainPage.current?.classList.toggle("dark");
  };

  return (
    <>
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
    </>
  );
}

export default InputSwitch;
