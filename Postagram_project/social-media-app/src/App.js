import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Counter from "./components/Counter";
import ProtectedRoute from "./routes/ProtectedRoute";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import NavigationBar from "./pages/NavigationBar";



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
      <Route path="/nav/" element={<NavigationBar />} />
    </Routes>
  );
}
export default App;
