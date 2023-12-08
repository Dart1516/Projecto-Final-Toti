import React from "react";
import logo from "../assets/images/logo.svg";
import "../assets/styles/Body.css";
import Video from "../assets/funciones/Video";
import Principal from "./Principal";

function Body() {
  return (
    <div className="Body-header">
      <header>
        <Video />
      </header>
      <body className="Body">
      <Principal />
      </body>
    </div>
  );
}

export default Body;
