import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

import { useState } from "react";
import { useLocation } from "react-router-dom";

import SignUpHeader from "./SignUpHeader";
import TwoFooter from "./TwoFooter";

const CreatePassBody = () => {
    const [showChildren, setShowChildren] = useState(true);
    const { state } = useLocation();
    const { e } = state;
    const [email, setEmail] = useState(e)
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')

    const handleEmailChange = (e) => {
        console.log(e.target.value)
        setEmail(e.target.value);
    }
    



    return (
        <div>
            <SignUpHeader />
            <form
                onSubmit={() => {

                }} className="ml-[416px] mt-[90px] inline-flex px-[65px] py-[45px] flex-col items-center gap-[49px] rounded-[34px] bg-[#fff] ">
                <div className="flex flex-col items-start gap-6">
                    <div className="flex w-[477px] gap-[5px] flex-col ">
                        <span className="text-[#E86B02] text-[20px] font-bold">Бүртгүүлэх</span>
                    </div>
                    <div className="flex relative flex-col items-center gap-6">
                        <div className="flex flex-col items-end gap-4">
                            <input
                                className="flex w-[478px] h-[50px] py-[0px] px-[24px] items-center gap-[10px] rounded-[10px] bg-[#f5f7f9] "
                                placeholder="Example@gmail.com"
                                type="email"
                                defaultValue={email}
                                onChange={handleEmailChange}
                            />
                        </div>
                        <input
                            className="flex w-[478px] py-[14px] px-[24px] items-center justify-between rounded-[10px] bg-[#F5F7F9]"
                            placeholder="Нууц үг зохиох"
                            type="password"
                            defaultValue={password}
                        />
                        <div
                            className="absolute top-[90px] right-[20px]"
                            onClick={() => {
                                setShowChildren(!showChildren);
                            }}
                        >
                            {showChildren ? <img src="hide.png" alt="icon" /> : <img src="view.png" alt="icon" />}
                        </div>
                        <input
                            className="flex w-[478px] py-[14px] px-[24px] items-center justify-between rounded-[10px] bg-[#F5F7F9]"
                            placeholder="Нууц үг давтах"
                            type="password"
                            defaultValue={rePassword}
                        />
                        <div
                            className="absolute top-[170px] right-[20px]"
                            onClick={() => {
                                setShowChildren(!showChildren);
                            }}
                        >
                            {showChildren ? <img src="hide.png" alt="icon" /> : <img src="view.png" alt="icon" />}
                        </div>
                        <div className="bg-[#E86B02] flex w-[478px] h-[54px] py-[12px] px-[24px] items-center justify-center gap-[10px] rounded-[10px] ">
                            <a href="/login" className="text-[#fff] text-[16px] font-medium text-center">Бүртгүүлэх</a>
                        </div>
                    </div>
                </div>
            </form>
            <TwoFooter />
        </div>

    );
}

export default CreatePassBody;
