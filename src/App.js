import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import DisplayCollections from "./pages/DisplayCollections";
import SignUp from "./pages/SignUp";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./Components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/shop" element={<DisplayCollections />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
