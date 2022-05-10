import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import DisplayCollections from "./pages/DisplayCollections";
import Header from "./Components/Header";
import HomePage from "./pages/HomePage/HomePage";
import SignUp from "./pages/SignUp";
import { auth } from "./firebase/firebase";

function App() {
  const [curentUser, setCurentUser] = useState(null);
  console.log("curentUser ==>> ", curentUser);
  useEffect(() => {
    auth.onAuthStateChanged((user) => setCurentUser(user));

    // return function cleanup() {
    //   unsubscribefromauth = null;
    // };
  }, []);

  return (
    <BrowserRouter>
      <Header curentUser={curentUser} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/shop" element={<DisplayCollections />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
