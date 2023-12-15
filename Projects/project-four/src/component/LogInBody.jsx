import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LogInBody = () => {
    const [showChildren, setShowChildren] = useState(true);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("")
    const navigate = useNavigate();

    const handleLogin = (e) => {
        // Do something with email and password
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user;
            if (user) {
                localStorage.setItem("authenticated", JSON.stringify({email: user.email, uid: user.uid}));
                navigate("/contact");
            }
        }).catch((error) => {
            console.error(error);
        })
    };

    return (
        <div className="ml-[416px] mt-[90px]  inline-flex px-[65px] py-[45px] flex-col items-center gap-[49px] rounded-[34px] bg-[#fff] ">
            <div className="flex flex-col items-start gap-6">
                <div className="flex w-[477px] gap-[5px] flex-col ">
                    <span className="text-[#E86B02] text-[20px] font-bold">Нэвтрэх</span>
                </div>
                <div className="flex relative flex-col items-center gap-6">
                    <form className="flex flex-col items-end gap-4">
                        <input 
                            className="flex w-[478px] h-[50px] py-[0px] px-[24px] items-center gap-[10px] rounded-[10px] bg-[#f5f7f9] "
                            placeholder="И-мэйл эсвэл утасны дугаар"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input 
                            className="flex w-[478px] py-[14px] px-[24px] text-[#546371] justify-between items-center rounded-[10px] bg-[#F5F7F9] "
                            placeholder="Нууц үг"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                            <div 
                                className="absolute top-[85px] right-[20px]" 
                                onClick={() => {
                                    setShowChildren(!showChildren);
                                }}
                            >
                                 {showChildren ? <img src="hide.png"  alt="icon" /> : <img src="view.png" alt="icon" />}
                            </div>

                        <span className="text-[#E86B02] text-[16px] font-normal leading-[20px] underline">Нууц үг мартсан уу?</span>
                    </form>
                    <button onClick={handleLogin} className="bg-[#E86B02] flex w-[478px] h-[54px] py-[12px] px-[24px] items-center justify-center gap-[10px] rounded-[10px] ">
                        <span className="text-[#fff] text-[16px] font-medium text-center">Нэвтрэх</span>
                    </button>
                    <button className="flex w-[478px] h-[54px] py-[12px] px-[24px] items-center justify-center gap-[10px] rounded-[10px] bg-[#fff] border-[2px] border-[solid] border-[#F9D9BD] ">
                        <img src="google.png" alt="facebook" />
                        <span className="text-[#1A1E23] text-center text-[16px] font-medium ">Gmail-ээр нэвтрэх</span>
                    </button>
                    <button className="flex w-[478px] h-[54px] py-[12px] px-[24px] items-center justify-center gap-[10px] rounded-[10px] bg-[#fff] border-[1px] border-[solid] border-[#F9D9BD] ">
                        <img src="fb.png" alt="facebook" />
                        <span className="text-[#1A1E23] text-center text-[16px] font-medium ">Facebook-ээр нэвтрэх</span>
                    </button>
                    <div className="flex w-[478px] justify-center items-center gap-[25px] ">
                        <div className="w-[120px] h-[1px] bg-[#e5e6eb]"></div>
                        <span className="text-[14px] text-[#b3b6b9] font-normal leading-[20px] ">эсвэл</span>
                        <div className="w-[120px] h-[1px] bg-[#e5e6eb]"></div>
                    </div>
                    <button className="flex w-[478px] h-[54px] py-[12px] px-[24px] items-center justify-center gap-[10px] rounded-[10px] bg-[#fff] border-[2px] border-[solid] border-[#E86B02]">
                        <span className="text-[#1A1E23] text-center text-[16px] font-medium  ">Бүртгүүлэх</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LogInBody;
