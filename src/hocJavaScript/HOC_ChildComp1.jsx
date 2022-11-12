import React from "react";
import { HOC_Component } from "./HOC_JavaSCript";

const HOC_ChildComp = (props) => {
  return (
    <>
      <h1>counter</h1>
      <p>{props.count}</p>
      <button onClick={() => props.handleClick()}>counter</button>
    </>
  );
};
const ChildComp = HOC_Component(HOC_ChildComp);
export { ChildComp };
