import { useContext } from "react";
import { AppContext, IContext } from "../../../context";
import { IoIosMoon, IoIosSunny } from "react-icons/io";
import "./styles.scss";

const Theme = () => {
  const { theme, toggleTheme } = useContext(AppContext);

  const onToggleTheme = (event: React.MouseEvent<HTMLDivElement>) => {
    const { theme } = event.currentTarget.dataset;
    toggleTheme(theme as IContext["theme"]);
  };

  return (
    <div
      className="theme"
      data-theme={theme === "light" ? "dark" : "light"}
      onClick={onToggleTheme}
    >
      {theme === "light" ? (
        <IoIosMoon size={20} className="dark" />
      ) : (
        <IoIosSunny className="yellow" size={20} />
      )}
    </div>
  );
};

export default Theme;
