import "./App.css";

import { BrowserRouter, Redirect, Route, Routes } from "react-router-dom";
import { Provider, connect } from "react-redux";
import { auth, createUserProfileDocument } from "./firebase/firebase";
import { useEffect, useState } from "react";

import DisplayCollections from "./pages/DisplayCollections";
import Header from "./Components/Header";
import HomePage from "./pages/HomePage/HomePage";
import SignUp from "./pages/SignUp";
import { setCurrentUser } from "./redux/user/user_actions";

function App(props) {
  const { curentUser } = props;

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = await createUserProfileDocument(user);
        docRef.onSnapshot((snapData) => {
          // setCurentUser({
          //   id: snapData.id,
          //   ...snapData.data()
          // });
          props.setCurrentUser({
            id: snapData.id,
            ...snapData.data()
          });
        });
      }
      props.setCurrentUser(null);
    });
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/shop" element={<DisplayCollections />} />
        <Route path="/hats" element={<DisplayCollections />} />
        <Route path="/jackets" element={<DisplayCollections />} />
        <Route path="/womens" element={<DisplayCollections />} />
        <Route path="/mens" element={<DisplayCollections />} />
        <Route path="/sneakers" element={<DisplayCollections />} />
      </Routes>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  curentUser: state.user.current_user
});
const mapDispachToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
});
export default connect(null, mapDispachToProps)(App);
