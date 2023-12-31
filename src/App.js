import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Business from "./pages/Business";
import Health from "./pages/Health";
import Opinion from "./pages/Opinion";
import Politics from "./pages/Politics";
import Sports from "./pages/Sports";
import Travles from "./pages/Travles";
import World from "./pages/World";
import Style from "./pages/Style";
import NewsDetails from "./pages/NewsDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/business" element={<Business />} />
      <Route path="/health" element={<Health />} />
      <Route path="/opinion" element={<Opinion />} />
      <Route path="/politics" element={<Politics />} />
      <Route path="/sports" element={<Sports />} />
      <Route path="/travles" element={<Travles />} />
      <Route path="/world" element={<World />} />
      <Route path="/style" element={<Style />} />
      <Route path="/single/:class/:id" element={<NewsDetails />} />
    </Routes>
  );
}

export default App;
