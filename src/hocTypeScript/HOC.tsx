import React, { useState } from "react";

type ExtraInfoType = {
  extraInfo: number;
  handleClick: any;
};

export function WithExtraInfo<P>(
  WrappedComponent: React.FC<P & ExtraInfoType>
) {
  const ComponentWithExtraInfo = (props: P) => {
    const [extraInfo, setExtraInfo] = useState(0);
    const handleClick = () => {
      setExtraInfo(extraInfo + 1);
    };
    return (
      <WrappedComponent
        handleClick={handleClick}
        {...props}
        extraInfo={extraInfo}
      />
    );
  };
  return ComponentWithExtraInfo;
}
