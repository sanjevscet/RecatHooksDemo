import { WithExtraInfo } from "./HOC";

function Compony(props: any) {
  return (
    <>
      <h1>Compony</h1>
      <p>{props.extraInfo}</p>
      <button onClick={() => props.handleClick()}>increment</button>
    </>
  );
}

const ChildComp2 = WithExtraInfo(Compony);

export { ChildComp2 };
