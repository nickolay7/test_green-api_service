import { createContext } from "react";

export interface IContext {
  theme: "light" | "dark";
  toggleTheme: React.Dispatch<React.SetStateAction<IContext["theme"]>>;
}

export const AppContext = createContext<IContext>({} as IContext);
