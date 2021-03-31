import { useEffect, useState } from "react";

function useDarkMode() {
  const [theme, setTheme] = useState("light");

  const handleChangeTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const currentTheme = window.localStorage.getItem("theme");
    currentTheme && setTheme(currentTheme);
  }, []);

  return [theme, handleChangeTheme];
}

export default useDarkMode;
