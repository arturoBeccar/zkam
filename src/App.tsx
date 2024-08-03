// import { useState } from "react";
// import { useAppState } from "./data/storage";
import CameraCapture from "./components/CameraCapture";

function App() {
  // const [count, setCount] = useState(0);
  // const { name, setName } = useAppState();
  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center bg-neutral-700">
      <div className="flex h-full max-w-[400px] justify-center items-center w-full bg-slate-200">
        <CameraCapture />
      </div>
    </div>
  );
}

export default App;
