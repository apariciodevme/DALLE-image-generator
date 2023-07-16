import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home, CreatePost } from "./pages";

import { logo } from "./assets";

const App = () => {
  return (
    <BrowserRouter>
      <header className="flex justify-between w-full px-4 py-4 border-b border-b-gray-300 items-centerbg-white sm:px-8">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="object-contain w-28" />
        </Link>
        <Link
          className="px-4 py-2 font-medium text-white bg-indigo-400 rounded-md font-inter"
          to={"/create-post"}
        >
          Create
        </Link>
      </header>
      <main className="w-full px-4 py-8 bg-gray-100 min-h-[calc(100vh-73px)] sm:p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
