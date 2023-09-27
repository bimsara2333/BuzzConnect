import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    
    <div className="App">
     <Header/>
     <Routes>
        <Route path="/" element={<Home/>}/>
     </Routes>
     <Footer/>
    </div>

  );
}

export default App;