import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { Web3ModalProvider } from "./components/WagmiProvider.tsx";
import CameraCapture from "./components/CameraCapture.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Web3ModalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<CameraCapture />} />
            <Route path="verify" element={<h1 className="h-full">verify</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Web3ModalProvider>
  </React.StrictMode>
);
