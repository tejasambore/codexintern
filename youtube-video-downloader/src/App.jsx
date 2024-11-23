import React, { useState } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [error, setError] = useState("");

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-gray-300">
      <Header />
      <InputForm setError={setError} />
      <ErrorMessage message={error} />
    </div>
  );
}

export default App;
