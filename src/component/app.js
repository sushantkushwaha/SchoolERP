import React from "react";
import ReactDom from "react-dom";
import LeftComponent from "./LeftComponent/LeftComponent";
import RightComponent from "./RightComponent/RightComponent";
import "./App.css";
import "./css/LeftComponent.css";
import "./css/RightComponent.css";
const App = () => {
  return (
    <div className="app">
      <div className="leftComponent">
        <LeftComponent />
      </div>
      <div className="rightComponent">
        <RightComponent />
      </div>
    </div>
  );
};

export default App;
