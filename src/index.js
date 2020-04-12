import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import HomePage from "./pages/home/index.page";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<HomePage />, document.getElementById("root"));

serviceWorker.register();
