import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [bio, setBio] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
    }
    
    return(
        <div className="flex flex-col items-center m-auto w-[1000px] h-[1000px]">
            <h1 className="pt-[20px] text-[30px] text-blue-600">Welcome to Postagram!</h1>
            <p className="mt-[30px]">This is a new social media site that will allow you to share your thoughts and experiences with your friends.</p>
            <p>Register now and start enjoying!</p>
            <p>Or if you already have an account, please <a className="text-green-500 underline" href="/login">login</a>.</p>
            <form className="flex flex-col gap-4 mt-[20px] w-[400px] rounded-[10px] bg-blue-50 shadow-lg">
                <label className="pt-[30px] pl-[30px] ">First Name</label>
                <input 
                    type="name" 
                    placeholder="Enter first name"
                    className="w-[300px] pl-[10px] py-[5px] ml-[30px] rounded-[5px] border-[1px] border-solid "
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <label className="pl-[30px]">Last Name</label>
                <input 
                    type="name" 
                    placeholder="Enter last name"
                    className="w-[300px] pl-[10px] py-[5px] ml-[30px] rounded-[5px] border-[1px] border-solid"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <label className="pl-[30px]">Username</label>
                <input 
                    type="name" 
                    placeholder="Enter username"
                    className="w-[300px] pl-[10px] py-[5px] ml-[30px] rounded-[5px] border-[1px] border-solid"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label className="pl-[30px] ">Email address</label>
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
                <label className="pl-[30px]">Bio</label>
                <input 
                    type="text" 
                    placeholder="A simple bio ...(Optional)"
                    className="w-[300px] h-[90px] pl-[10px] pb-[50px] ml-[30px] rounded-[5px] border-[1px] border-solid"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                />
                <button className="w-[100px] bg-blue-600 text-white py-[7px] rounded-[5px] ml-[30px] mb-[40px]" onClick={handleRegister}>Register</button>
            </form>
        </div>
    );
}

export default Register;