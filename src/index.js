import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//Import the user auth context provider to provide the userAuth state
import UserAuthProvider from "./context/UserAuthProvider";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <UserAuthProvider>
        <App />
      </UserAuthProvider>
  </React.StrictMode>
);
