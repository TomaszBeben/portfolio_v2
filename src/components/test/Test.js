import React from "react";
import { Rnd } from "react-rnd";

import CVComponent from "../ContentComponents/CVComponent";
import Toolbar from "../test/Toolbar";


const style = {
  display: "flex",
  flexDirection: 'column',
  border: "solid 1px #ddd",
  background: "#f0f0f0",
  zIndex: '5'
};

const Test = () => (
  <Rnd
    style={style}
    default={{
        x: 10,
        y: 0,
        width: 320,
        height: 200,
    }}
    minWidth={300}
    minHeight={300}
    bounds='window'
    dragHandleClassName='toolbar-test'
  >
    <Toolbar/>
    <CVComponent/>
  </Rnd>
);

export default Test;

