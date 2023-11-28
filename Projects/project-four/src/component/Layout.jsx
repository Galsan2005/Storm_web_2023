// import Main from "./Main";
// import Sidebar from "./Sidebar";

import Posts from "./Posts";
import ProfileBody from "./ProfileBody";
import TwoFooter from "./TwoFooter";
import TwoHeader from "./TwoHeader";

const Layout = () => {
    return (
        <>
            <div className="flex w-[1440px]">
                {/* <Sidebar />
                <Main /> */}
            </div>
            <div className="w-[1440px] h-[755px]">
                <TwoHeader />
                <ProfileBody />
                <Posts />
                <TwoFooter />
            </div>
        </>
    );
}
export default Layout;