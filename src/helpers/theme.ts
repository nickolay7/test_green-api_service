import { IContext } from "../context";

export const getTheme = (): IContext["theme"] => {
  return (
    (localStorage.getItem("application-theme") as IContext["theme"]) || "dark"
  );
};

export const setTheme = (theme: IContext["theme"]) => {
  localStorage.setItem("application-theme", theme);

  if (theme === "dark") {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
};
