import { Outlet } from "react-router-dom";
import Posts from "./Posts";
import TwoFooter from "./TwoFooter";
import TwoHeader from "./TwoHeader";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ProfileBody from "./ProfileBody";
import Header from "./Header";

const Contact = () => {
    const navigate = useNavigate();
    const [authenticated, setauthenticated] = useState(null);
    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");

        console.log(authenticated)
        if (loggedInUser) {
            setauthenticated(JSON.parse(loggedInUser));
        } else {
            console.log('not authenticed');
            navigate('/login');
        }
    }, []);

    if (!authenticated) {
        navigate("/login");
    } else {
        return (
            <div>
                <Outlet />
                <Posts />
                <TwoFooter />
            </div>
        );
    }
};
export default Contact;