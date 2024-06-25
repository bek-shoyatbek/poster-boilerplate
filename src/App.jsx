import "./css/main.scss";
import React from "react";
import { createRoot } from "react-dom/client";
import HelloWorldApp from "./components/HelloWorld";

function App() {
  return <HelloWorldApp />;
}

const container = document.getElementById("app-container");
const root = createRoot(container);
root.render(<App />);
