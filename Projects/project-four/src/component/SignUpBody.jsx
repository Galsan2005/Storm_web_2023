const SignUpBody = () => {
    return (
        <div className="ml-[416px] mt-[90px]  inline-flex px-[65px] py-[45px] flex-col items-center gap-[49px] rounded-[34px] bg-[#fff] ">
            <div className="flex flex-col items-start gap-6">
                <div className="flex w-[477px] gap-[5px] flex-col ">
                    <span className="text-[#E86B02] text-[20px] font-bold">Бүртгүүлэх</span>
                </div>
                <div className="flex flex-col items-center gap-6">
                    <div className="flex flex-col items-end gap-4">
                        <div className="flex w-[478px] h-[50px] py-[0px] px-[24px] items-center gap-[10px] rounded-[10px] bg-[#f5f7f9] ">
                            <span className="text-[#546371] text-[16px] font-normal leading-[22px] ">И-мэйл эсвэл утасны дугаар</span>
                        </div>
                    </div>
                    <div className="bg-[#E86B02] flex w-[478px] h-[54px] py-[12px] px-[24px] items-center justify-center gap-[10px] rounded-[10px] ">
                        <span className="text-[#fff] text-[16px] font-medium text-center">Бүртгүүлэх</span>
                    </div>
                    <div className="flex w-[478px] h-[54px] py-[12px] px-[24px] items-center justify-center gap-[10px] rounded-[10px] bg-[#fff] border-[2px] border-[solid] border-[#F9D9BD] ">
                        <img src="google.png" alt="facebook" />
                        <span className="text-[#1A1E23] text-center text-[16px] font-medium ">Gmail-ээр нэвтрэх</span>
                    </div>
                    <div className="flex w-[478px] h-[54px] py-[12px] px-[24px] items-center justify-center gap-[10px] rounded-[10px] bg-[#fff] border-[1px] border-[solid] border-[#F9D9BD] ">
                        <img src="fb.png" alt="facebook" />
                        <span className="text-[#1A1E23] text-center text-[16px] font-medium ">Facebook-ээр нэвтрэх</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpBody;
