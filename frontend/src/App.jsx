import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PublicWish from "./pages/PublicWish";
import CreateWish from "./pages/createWish/CreateWish";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/wish" element={<PublicWish />} />

      <Route
        path="/create-wish"
        element={<CreateWish />}
      />
    </Routes>
  );
}

export default App;