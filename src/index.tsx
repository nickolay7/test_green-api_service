import React from "react";
import ReactDOM from "react-dom";
import WebFontLoader from "webfontloader";
import dayjs from "dayjs";

import App from "./app/App";

import "dayjs/locale/ru";
import "./app/css/index.scss";
import {StoreProvider} from "./app/providers/storeProvider";

WebFontLoader.load({
  google: {
    families: ["Open Sans:300,400,700"],
  },
});

dayjs.locale("ru");

ReactDOM.render(
  <React.StrictMode>
      <StoreProvider>
          <App />
      </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
