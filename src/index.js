import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./components/App";

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
