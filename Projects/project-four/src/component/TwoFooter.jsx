const TwoFooter = () => {
    return (
        <div className="flex mt-[436px] w-[1440px] h-[190px] py-[25px] px-[65px] flex-col items-center gap-[10px] shrink-0 border-t-[1px] border-t-[solid] border-t-[#E2EBEE] bg-[#FFF] ">
            <div className="flex items-start gap^[15px]">
                <div className="flex w-[216.75px] flex-col items-start gap-[18px]">
                    <div className="w-[83.342px] h-[52px] ">
                        <div className="flex items-center w-[83.342px] h-[52px] shrink-0">
                            <img className=" w-[18.174px] h-[24.257px] shrink-0" src="/Group (1).svg" alt="icon" />
                            <span className="text-[#F77268] text-[27.251px] font-normal ">i<span className="text-[#FC9419] text-[27.251px] font-normal">blog</span></span>
                        </div>
                        <div className="text-[#4D5A66] mt-[-8px] text-[9px] font-normal">Write, Read, Enjoy</div>
                    </div>
                </div>
                <div className="flex w-[371.25px] justify-center items-start gap-[60px] ">
                    <div className="flex flex-col items-start gap-[18px]">
                        <span className="text-[#181A2A] text-[16px] font-semibold leading-[21px] ">Тусламж</span>
                        <div className="flex flex-col items-start gap-[6px]">
                            <span className="text-[#3B3C4A] text-[14px] font-medium leading-[18px] ">Хэрэглэх заавар</span>
                            <span className="text-[#3B3C4A] text-[14px] font-medium leading-[18px] ">Санал хүсэлт</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-[18px]">
                        <span className="text-[#181A2A] text-[16px] font-semibold leading-[21px] ">Бидэнтэй холбогдох</span>
                        <div className="flex flex-col items-start gap-[8px]">
                            <div className="flex items-center gap-[2px]">
                                <img className="w-[15px] h-[15px]" src="/fi_mail (1).svg" alt="" />
                                <span className="text-[#3B3C4A] text-[14px] font-medium leading-[18px]"> info@jstemplate.net</span>
                            </div>
                            <div className="flex items-center gap-[2px]">
                                <img className="w-[15px] h-[15px]" src="/fi_phone (1).svg" alt="" />
                                <span className="text-[#3B3C4A] text-[14px] font-medium leading-[18px]">+976 99112344</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TwoFooter;