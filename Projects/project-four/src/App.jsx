import { Route, Routes } from "react-router-dom";
import Layout from "./component/Layout";
import MainContent from "./component/MainContent";


import LogInBody from "./component/LogInBody";
import SignUpBody from "./component/SignUpBody";
import SignUpCreate from "./component/SignUpCreate";
import CreatePassBody from "./component/CreatePassBody";


function App() {
  return (
    <div>
      <div className='mx-auto w-[1440px]'>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<MainContent />} />
          </Route>
          <Route path="/login" element={<SignUpCreate />}>
            <Route path="/login" element={<LogInBody />} />
          </Route>
          <Route path="/register" element={<SignUpCreate />}>
            <Route path="/register" element={<SignUpBody />} />
          </Route>
          <Route path="/signup" element={<CreatePassBody />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
