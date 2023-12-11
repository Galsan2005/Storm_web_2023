import { Route, Routes } from "react-router-dom";
import Layout from "./component/Layout";
import Main from "./component/Main";
import Body from "./component/Body";
import MainContent from "./component/MainContent";


import SignUpHeader from "./component/SignUpHeader";
import LogInBody from "./component/LogInBody";
import TwoFooter from "./component/TwoFooter";
import SignUpBody from "./component/SignUpBody";
import CreatePassBody from "./component/CreatePassBody";

function App() {
  return (
    <div>
      <div className='mx-auto w-[1440px]'>
        {/* <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<MainContent />} />
          </Route>
         
        </Routes> */}
        <SignUpHeader />
        <LogInBody />
        {/* <SignUpBody /> */}
        {/* <CreatePassBody /> */}
        <TwoFooter />
      </div>
    </div>
  );
};

export default App;
