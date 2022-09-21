import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import HomeWrapper from "./pages/HomeWrapper/HomeWrapper";
import More from "./Components/More/More";

function App() {
  
  return (
      <Routes>
        <Route path="/" element={<HomeWrapper />} >
          <Route index element={<Home />} />
          <Route path="home/:id" element={<More />}/>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<h2>Error 404</h2>} />
      </Routes>
  );
}

export default App;
