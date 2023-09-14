import { useState } from "react";
import HomePage from "./pages/HomePage";
import CardsPage from "./pages/CardsPage";
import SignUp from "./pages/SignUp";
import Signin from "./pages/Signin";
import Verify from "./pages/Verify";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cards" element={<CardsPage />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/login" element={<Signin />} />
      </Routes>
      {/* <HomePage /> */}
      {/* <CardsPage /> */}
      {/* <SignUp /> */}
      {/* <Verify /> */}
      {/* <Signin /> */}
    </>
  );
}

export default App;
