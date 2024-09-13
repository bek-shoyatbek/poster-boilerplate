import "./css/main.scss";
import React from "react";
import { createRoot } from "react-dom/client";
import { AddQRCode } from "./components/AddQRCode";

function App() {
  console.log("Bek's application is working!");
  return <AddQRCode />;
}

const container = document.getElementById("app-container");
const root = createRoot(container);
root.render(<App />);
