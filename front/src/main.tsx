import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.tsx";
import { StudentProvider } from "./context/studentProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <StudentProvider>
        <App />
      </StudentProvider>
    </ChakraProvider>
  </React.StrictMode>
);
