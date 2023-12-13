import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpBody = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");

    const handleRegister = (e) => {
        // Do something with email and password
        e.preventDefault();
        navigate('/signup',  { state: { e: email } })
    }

    return (
        <div className="ml-[416px] mt-[90px]  inline-flex px-[65px] py-[45px] flex-col items-center gap-[49px] rounded-[34px] bg-[#fff] ">
            <div className="flex flex-col items-start gap-6">
                <div className="flex w-[477px] gap-[5px] flex-col ">
                    <span className="text-[#E86B02] text-[20px] font-bold">Бүртгүүлэх</span>
                </div>
                <form className="flex flex-col items-center gap-6">
                    <div className="flex flex-col items-end gap-4">
                        <input
                            className="flex w-[478px] h-[50px] py-[0px] px-[24px] items-center gap-[10px] rounded-[10px] bg-[#f5f7f9] "
                            placeholder="И-мэйл эсвэл утасны дугаар"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button onClick={handleRegister} disabled={email.length === 0} className="bg-[#E86B02] flex w-[478px] h-[54px] py-[12px] px-[24px] items-center justify-center gap-[10px] rounded-[10px] ">
                        <span className="text-[#fff] text-[16px] font-medium text-center">Бүртгүүлэх</span>
                    </button>
                    <button className="flex w-[478px] h-[54px] py-[12px] px-[24px] items-center justify-center gap-[10px] rounded-[10px] bg-[#fff] border-[2px] border-[solid] border-[#F9D9BD] ">
                        <img src="/google.png" alt="facebook" />
                        <span className="text-[#1A1E23] text-center text-[16px] font-medium ">Gmail-ээр нэвтрэх</span>
                    </button>
                    <button className="flex w-[478px] h-[54px] py-[12px] px-[24px] items-center justify-center gap-[10px] rounded-[10px] bg-[#fff] border-[1px] border-[solid] border-[#F9D9BD] ">
                        <img src="/fb.png" alt="facebook" />
                        <span className="text-[#1A1E23] text-center text-[16px] font-medium ">Facebook-ээр нэвтрэх</span>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignUpBody;
