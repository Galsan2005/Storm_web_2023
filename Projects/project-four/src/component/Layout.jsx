import Category from "./Category";
import DetailMain from "./DetailMain";
import Main from "./Main";
import Sidebar from "./Sidebar";
import { Routes, Route } from "react-router-dom";


// import Posts from "./Posts";
// import ProfileBody from "./ProfileBody";
// import ProfileMain from "./ProfileMain";
// import ProfileMainTwo from "./ProfileMainTwo";
// import TwoFooter from "./TwoFooter";
// import TwoHeader from "./TwoHeader";

const Layout = () => {
    return (
        <>
            <div className="flex w-[1440px]">
                <Sidebar />
                <Main />
            </div>
            <div className="w-[1440px]">
                {/* <TwoHeader /> */}
                {/* <ProfileMain /> */}
                {/* <ProfileMainTwo /> */}
                {/* <ProfileBody />
                <Posts /> */}
                {/* <TwoFooter /> */}
            </div>
            <Routes>
                <Route path="/:category" element={<Category />} >
                    <Route path="/:category/:id" element={<DetailMain />} />
                </Route>

            </Routes>
        </>
    );
}
export default Layout;