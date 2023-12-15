import Main from "./Main";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';

const Layout = () => {
    let {pathname } = useLocation();
    useEffect(() => {
        console.log(pathname)
      }, [pathname]);
    return (
        <div className="flex w-[1440px]">
            {pathname == '/' ?  <Sidebar /> : null}
            <div className="flex flex-col">
                <Header />
                <Main />
            </div>

        </div>
    );
};
export default Layout;
