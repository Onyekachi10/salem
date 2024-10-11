import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./build/home";
import Corey from "./build/corey";
import Clown from "./build/clown";
import Mask from "./build/mask";

function App() {
  return (
 
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/corey" element={<Corey />}>
         </Route>
         <Route path="/clown" element={<Clown />}>
         </Route>
         <Route path="/crime-scene-mask" element={<Mask />}>
         </Route>
    </Routes>
</BrowserRouter>  

  );
}

export default App;
