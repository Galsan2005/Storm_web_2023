const Footer = () => {
    return (
        <div className="flex mt-[253px] w-[1091px] h-[190px] px-[65px] py-[25px] flex-col items-start gap-[10px] shrink-0 border-t border-t-[solid] border-t-[#E2E8EE] ">
            <div className="flex items-start gap-[15px]">
                <div className="flex w-[216.75px] flex-col items-start gap-[18px] ">
                    <div className="w-[83.342px] ">
                        <div className="flex">
                            <img className="shrink-0" src="Group.svg" alt="icon" />
                            <span className="text-[#F77268] text-[27.251px] font-normal">i<span className="text-[#FC9419] text-[27.251px] font-normal">blog</span></span>
                        </div>
                    </div>
                    <span className="text-[#4D5A66] mt-[-20px] text-[9.973px] font-normal">Write, Read, Enjoy</span>
                </div>
                <div className="flex w-[371.25px] justify-center items-start gap-[60px] ">
                    <div className="flex flex-col items-start gap-[18px]">
                        <span className="text-[#181A2A] text-[16px] font-semibold leading-[21px] ">Тусламж</span>
                        <div className="flex flex-col items-start gap-[6px]">
                            <span className="text-[#3B3C4A] text-[14px] font-medium leading-[18px]">Хэрэглэх заавар</span>
                            <span className="text-[#3B3C4A] text-[14px] font-medium leading-[18px]">Санал хүсэлт</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-[18px]">
                        <span className="text-[#181A2A] text-[16px] font-semibold leading-[21px] ">Бидэнтэй холбогдох</span>
                        <div className="flex flex-col items-start gap-[6px]">
                            <div className="flex items-center gap-[5px]">
                                <img className="w-[15px] h-[15px]" src="fi_mail.svg" alt="" />
                                <span className="text-[#3B3C4A] text-[14px] font-medium leading-[18px]"> info@jstemplate.net</span>
                            </div>
                            <div className="flex items-center gap-[3px]">
                                <img className="w-[15px] h-[15px]" src="fi_phone.svg" alt="" />
                                <span className="text-[#3B3C4A] text-[14px] font-medium leading-[18px]">+976 99112344</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;