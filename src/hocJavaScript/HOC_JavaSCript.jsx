import React, { useState } from "react";

export const HOC_Component = (WrappedComponent) => {
  const Wrapper = (props) => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
      setCount(count + 1);
    };
    return (
      <WrappedComponent {...props} count={count} handleClick={handleClick} />
    );
  };
  return Wrapper;
};
