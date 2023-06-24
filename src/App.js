import React from "react";
import Weather from "./Component/components/Weather";
import "./App.css";
// import Image from "./Assets/Image.jpg";
function App() {
  return (
    <React.Fragment >
      <div className="flex">
    <Weather />
    </div>
    </React.Fragment>
  );
}

export default App;
