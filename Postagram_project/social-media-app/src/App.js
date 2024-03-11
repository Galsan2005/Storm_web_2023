import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Counter from "./components/Counter";
import ProtectedRoute from "./routes/ProtectedRoute";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import UserEdit from "./pages/UserEdit";

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
      <Route path="/profile/:profileId" element={
      // <ProtectedRoute >
        <Profile />
      // {/* </ProtectedRoute> */}
      }/>
      <Route path="/profile/:profileId/edit" element={<UserEdit />} />
    </Routes>
  );
}
export default App;
