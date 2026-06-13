import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PublicWish from "./pages/PublicWish";


function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/wish" element={<PublicWish/>} />
      </Routes>
    
  );
}

export default App;
