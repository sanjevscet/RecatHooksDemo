import "./styles.css";
import { DropDownForm } from "./hocTypeScript/HOC_ChildComp";
import { ChildComp2 } from "./hocTypeScript/HOC_ChildComp2";
import { ChildComp } from "./hocJavaScript/HOC_ChildComp1";
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <DropDownForm />
      <ChildComp2 />
      <ChildComp />
    </div>
  );
}
