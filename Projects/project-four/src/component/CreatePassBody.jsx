const CreatePassBody = () => {
    return (
        <div className="ml-[416px] mt-[90px] inline-flex px-[65px] py-[45px] flex-col items-center gap-[49px] rounded-[34px] bg-[#fff] ">
            <div className="flex flex-col items-start gap-6">
                <div className="flex w-[477px] gap-[5px] flex-col ">
                    <span className="text-[#E86B02] text-[20px] font-bold">Бүртгүүлэх</span>
                </div>
                <div className="flex flex-col items-center gap-6">
                    <div className="flex flex-col items-end gap-4">
                        <div className="flex w-[478px] h-[50px] py-[0px] px-[24px] items-center gap-[10px] rounded-[10px] bg-[#f5f7f9] ">
                            <span className="text-[#2C3237] text-[16px] font-normal leading-[22px] ">Exmaple@gmail.com</span>
                        </div>
                    </div>
                    <div className="flex w-[478px] py-[14px] px-[24px] items-center justify-between rounded-[10px] bg-[#F5F7F9]">
                        <span className="text-[#546371] text-[16px] font-medium leading-[22px] ">Нууц үг зохиох</span>
                        <img src="eye.svg" alt="nud" />
                    </div>
                    <div className="flex w-[478px] py-[14px] px-[24px] items-center justify-between rounded-[10px] bg-[#F5F7F9]">
                        <span className="text-[#546371] text-[16px] font-medium leading-[22px] ">Нууц үг давтах</span>
                        <img src="eye.svg" alt="nud" />
                    </div>
                    <div className="bg-[#E86B02] flex w-[478px] h-[54px] py-[12px] px-[24px] items-center justify-center gap-[10px] rounded-[10px] ">
                        <span className="text-[#fff] text-[16px] font-medium text-center">Бүртгүүлэх</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreatePassBody;
