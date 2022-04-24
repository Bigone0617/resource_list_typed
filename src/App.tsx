import React, { CSSProperties} from "react";
import "./App.css";

import LeftWrapper from "./components/leftWrapper";


const mainWraperStyle : CSSProperties = {
  display : "flex"
}

function App() {
  return (
    <div className="main_wrapper" style={mainWraperStyle}>
        <LeftWrapper></LeftWrapper>
    </div>
  );
}

export default App;
