import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    // 많이 씀
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);
  // useEffect(function () { ------- 별로 안 씀 ----------
  //   console.log("hi :)");
  //   return function () {
  //     console.log("bye :(");
  //   };
  // }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}> {showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
