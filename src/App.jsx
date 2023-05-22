import { useState } from "react";
import NavBar from "./components/shared/NavBar";
import Main from "./components/shared/Main";
import Footer from "./components/shared/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-[#EBEBEB] h-full w-full">
        <Main></Main>
      </div>
    </>
  );
}

export default App;
