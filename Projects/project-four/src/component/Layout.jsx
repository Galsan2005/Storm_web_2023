import Main from "./Main";
import Sidebar from "./Sidebar";

const Layout = () => {
    return (
        <div className="flex w-[1440px]">
            <Sidebar />
            <Main />
        </div>
    );
};
export default Layout;
