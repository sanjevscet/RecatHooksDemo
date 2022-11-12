import { WithExtraInfo } from "./HOC";

function Developer(props: any) {
  return (
    <>
      <h1>Developer</h1>
      <p>{props.extraInfo}</p>
      <button onClick={() => props.handleClick()}>increment</button>
    </>
  );
}

const DropDownFormWithListener = WithExtraInfo(Developer);

export { DropDownFormWithListener as DropDownForm };
