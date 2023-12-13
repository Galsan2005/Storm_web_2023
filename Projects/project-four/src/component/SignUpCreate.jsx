import { Outlet } from "react-router-dom";
import SignUpHeader from "./SignUpHeader";
import SignUpBody from "./SignUpBody";
import TwoFooter from "./TwoFooter";

const SignUpCreate = () => {
    return (
        <div>
            <SignUpHeader />
            <Outlet />
            <TwoFooter />
        </div>
    );
};

export default SignUpCreate;