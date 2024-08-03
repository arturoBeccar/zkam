// import { useState } from "react";
// import { useAppState } from "./data/storage";
import { useAccount, useSignMessage } from "wagmi";
import CameraCapture from "./components/CameraCapture";
import WalletButton from "./components/WalletButton";
import { generateRandomNumbers } from "./helpers/random";

function App() {
  // const [count, setCount] = useState(0);
  // const { name, setName } = useAppState();
  const { address } = useAccount();
  const { signMessage } = useSignMessage();
  // Ejemplo de uso
  const input =
    "0xa563cbb52a3e3d0e040339036d1fe996e72bfd73d42d4ddb4901ce4defe648480c9dd9d39f72f4f0a65055dc680022a28f2e04c5beca986c4c488c11712846ba1b";

  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center bg-neutral-700">
      <div className="flex h-full max-w-[400px] justify-center flex-col items-center w-full bg-slate-200">
        <WalletButton />
        <h1>{address ? address : ""}</h1>
        <button
          onClick={() =>
            signMessage(
              { account: address, message: address },
              {
                onSuccess(data) {
                  console.log(data);
                },
              }
            )
          }
        >
          sign me
        </button>
        <button
          onClick={() =>
            generateRandomNumbers(input)
              .then((data) => console.log(data))
              .catch((err) => console.log(err))
          }
        >
          Generate random numbers
        </button>
        <CameraCapture />
      </div>
    </div>
  );
}

export default App;
