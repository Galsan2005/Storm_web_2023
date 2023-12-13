import { useState } from "react";

const LogInBody = () => {
    const [showChildren, setShowChildren] = useState(true);

    return (
        <div className="ml-[416px] mt-[90px]  inline-flex px-[65px] py-[45px] flex-col items-center gap-[49px] rounded-[34px] bg-[#fff] ">
            <div className="flex flex-col items-start gap-6">
                <div className="flex w-[477px] gap-[5px] flex-col ">
                    <span className="text-[#E86B02] text-[20px] font-bold">Нэвтрэх</span>
                </div>
                <from className="flex relative flex-col items-center gap-6">
                    <div className="flex flex-col items-end gap-4">
                        <input 
                            className="flex w-[478px] h-[50px] py-[0px] px-[24px] items-center gap-[10px] rounded-[10px] bg-[#f5f7f9] "
                            placeholder="И-мэйл эсвэл утасны дугаар"
                        />
                        <input 
                            className="flex w-[478px] py-[14px] px-[24px] text-[#546371] justify-between items-center rounded-[10px] bg-[#F5F7F9] "
                            placeholder="Нууц үг"
                            type="password"
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
                    </div>
                    <button className="bg-[#E86B02] flex w-[478px] h-[54px] py-[12px] px-[24px] items-center justify-center gap-[10px] rounded-[10px] ">
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
                </from>
            </div>
        </div>
    );
}

export default LogInBody;
