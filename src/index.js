import React from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom/client";
// import {BrowseRouter as Router, Route, Switch} from 'react-router-dom'
import "./index.css";
// import "./assets/fonts/static/Oswald-Bold.ttf";
import App from "./App";
import { AppProvider } from "./component/context/context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
