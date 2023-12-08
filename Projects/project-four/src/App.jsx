import { Route, Routes } from "react-router-dom";
import Layout from "./component/Layout";
import Main from "./component/Main";
import Body from "./component/Body";
import MainContent from "./component/MainContent";

function App() {
  return (
    <div>
      <div className='mx-auto w-[1440px] h-[1802px]'>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<MainContent />} />
          </Route>
         
        </Routes>
        
      </div>
    </div>
  );
};

export default App;
