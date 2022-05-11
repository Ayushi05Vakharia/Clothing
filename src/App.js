import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase";
import { useEffect, useState } from "react";

import DisplayCollections from "./pages/DisplayCollections";
import Header from "./Components/Header";
import HomePage from "./pages/HomePage/HomePage";
import SignUp from "./pages/SignUp";

function App() {
  const [curentUser, setCurentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = await createUserProfileDocument(user);
        docRef.onSnapshot((snapData) => {
          // console.log("snapData", snapData.data());
          setCurentUser({
            id: snapData.id,
            ...snapData.data()
          });
        });
      }
      setCurentUser(null);
    });

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
