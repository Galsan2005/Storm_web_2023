import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefualt();
    };

    return (
        <div className="flex flex-col items-center m-auto w-[1000px] h-[1000px]">
            <h1 className="pt-[20px] text-[30px] text-blue-600">Welcome to Postagram!</h1>
            <p className="mt-[30px]">Login now and start enjoying!</p>
            <p>Or if you do not have an account, please <a className="text-green-500 underline" href="/register">register</a>.</p>
            <form className="flex flex-col gap-4 mt-[20px] w-[400px] h-[300px] rounded-[10px] bg-blue-50 shadow-lg">
                <label className="pt-[30px] pl-[30px] ">Email address</label>
                <input 
                    type="email" 
                    placeholder="Enter email"
                    className="w-[300px] pl-[10px] py-[5px] ml-[30px] rounded-[5px] border-[1px] border-solid "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label className="pl-[30px]">Password</label>
                <input 
                    type="password" 
                    placeholder="Password"
                    className="w-[300px] pl-[10px] py-[5px] ml-[30px] rounded-[5px] border-[1px] border-solid"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="w-[100px] bg-blue-600 text-white py-[7px] rounded-[5px] ml-[30px]" onClick={handleLogin}>Login</button>
            </form>
        </div>
    );
}

export default Login;