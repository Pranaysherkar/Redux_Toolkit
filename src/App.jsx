import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import User from "./components/User";
import Products from "./components/Products";
import Home from "./components/Home";

function App() {
  return (
    <div className="w-full h-screen text-white">
      <nav className="w-1/3 m-auto h-14 bg-gray-500 text-2xl flex items-center justify-center gap-10">
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/products">Products</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<User />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
