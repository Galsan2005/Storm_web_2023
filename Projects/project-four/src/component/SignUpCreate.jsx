import { Outlet } from "react-router-dom";
import TwoFooter from "./TwoFooter";

const SignUpCreate = () => {
    return (
        <div>
            {/* <SignUpHeader /> */}
            <Outlet />
            <TwoFooter />
        </div>
    );
};

export default SignUpCreate;