import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Home from "./pages/home.jsx";
import Login from "./pages/login.jsx";
import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<h1>Login Page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;