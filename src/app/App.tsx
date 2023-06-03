import {useEffect, useState} from "react";

import {Dialog} from "feature/dialog";
import {Sender} from "../feature/messageExchange";
import Header from "../widgets/Header";

import { AppContext, IContext } from "../context";
import { getTheme, setTheme } from "../helpers/theme";
import LoginForm from "feature/authByToken/ui/loginForm";
import { VStack } from "shared/ui/stack";
import ChatsList from "feature/addChatByLogin/ui/ChatsList";

const App = () => {
  const [theme, toggleTheme] = useState<IContext["theme"]>(getTheme());
  const [isAuth, setAuth] = useState(false);

  const authReset = () => {
      setAuth(false);
  }
  const onSuccess = () => {
      setAuth(true);
  }

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <div className="container">
        {
          isAuth ? (
              <>
                <Header authReset={authReset}/>
                <Dialog />
                <Sender />
                <ChatsList />
              </>
          ) : (
            <VStack className="loginForm" justify="justifyCenter">
              <LoginForm onSuccess={onSuccess} />
            </VStack>
          )
        }
      </div>
    </AppContext.Provider>
  );
};

export default App;
