import { Route, Routes } from "react-router-dom";
import Layout from "./component/Layout";
import MainContent from "./component/MainContent";


import LogInBody from "./component/LogInBody";
import SignUpBody from "./component/SignUpBody";
import SignUpCreate from "./component/SignUpCreate";
import CreatePassBody from "./component/CreatePassBody";
import Contact from "./component/Contact";
import ProfileBody from "./component/ProfileBody";
import Category from "./component/Category";
import DetailMain from "./component/DetailMain";
import TwoHeader from "./component/TwoHeader";


function App() {
  return (
    <div>
      <div className='mx-auto w-[1440px]'>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<MainContent />} />
            <Route path="hobby" element={<Category />} />
            <Route path="detail" element={<DetailMain />} />
            <Route path="/login" element={<SignUpCreate />}>
              <Route path="" element={<LogInBody />} />
            </Route>
            <Route path="/contact" element={<Contact />} >
              <Route path="/contact" element={<ProfileBody />}>
              </Route>
            </Route>


            <Route path="/register" element={<SignUpBody />} />
            <Route path="/signup" element={<CreatePassBody />} />
          </Route>
          <Route path="/header" element={<TwoHeader />} />

        </Routes>
      </div>
    </div>
  );
};

export default App;
