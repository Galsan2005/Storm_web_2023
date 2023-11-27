import Main from "./Main";
import Sidebar from "./Sidebar";

// import ProfileBody from "./ProfileBody";
// import TwoHeader from "./TwoHeader";

const Layout = () => {
    return (
        <div className="flex w-[1440px]">
            <Sidebar />
            <Main />
            {/* <TwoHeader />
            <ProfileBody /> */}
        </div>
    );
}
export default Layout;