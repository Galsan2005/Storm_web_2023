import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Counter from "./components/Counter";
import ProtectedRoute from "./routes/ProtectedRoute";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      } />
      <Route path="/counter" element={<Counter />} />
      <Route path="/register/" element={<Registration />} />
      <Route path="/login/" element={<Login />} />
      <Route path={`/profile/?author_public_id=8627e5187a1d42468c13d2205be84991`} element={<Profile />} />
    </Routes>
  );
}
export default App;
