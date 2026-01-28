import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home.jsx";
import Onthisday from "./Onthisday.jsx";
import Quoteoftheday from "./Quoteoftheday.jsx";
import "./app.css";


const NavigationBar = () => {
    return(
        <nav>
           <link to="/">Home</link>
           <link to="/Onthisday">Onthisday</link>
        </nav>
    )
}

const App = () => {
    return (
        <BrowserRouter>
           <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Onthisday" element={<Onthisday />} />
              <Route path="/Quoteoftheday" element={<Quoteoftheday />} />
           </Routes>
        </BrowserRouter>
    );
};

export default App;  
