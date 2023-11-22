const Sidebar = () => {
    return (
        <div className="w-[348px] inline-block  py-[40px] px[49px] flex-col items-start gap-[10px] shrink-0 border-r-[1px] border-solid border-[#E2E8EE] bg-[#fff] px-[49px] ">
            <div className="flex flex-col items-start gap-[45px]  ">
                <div className="w-[91.617px] h-[46px] flex">
                    <img src="Group (1).svg" alt="zurag" />
                    <div className="w-[70px] h-[46px] shrink-0 ">
                        <span className="text-[#F77268] text-[30px] font-normal">i<span className="text-[#FC9419] text-[30px] font-normal ">blog</span></span>
                    </div>
                </div>
                <div className="flex w-[250px]  flex-col items-start gap-8">
                    <div className="flex flex-col justify-center items-start gap-3">
                        <div className="flex w-[250px] justify-between items-center">
                            <span className="text-[14px] font-semibold">Lifestyle</span>
                            <img src="Frame.svg" alt="icon" />
                        </div>
                        <div className="flex flex-col justify-center items-start gap-2">
                            <div className="flex w-[250px] py-[8px] px-[16px] items-start rounded-[4px] bg-[#fff]  ">
                                <span className="text-[14px] font-normal leading-[21px]">Hobby</span>
                            </div>
                            <div className="flex w-[250px] py-[8px] px-[16px] items-start rounded-[4px] bg-[#fff]  ">
                                <span className="text-[14px] font-normal leading-[21px]">Travel</span>
                            </div>
                            <div className="flex w-[250px] py-[8px] px-[16px] items-start rounded-[4px] bg-[#fff]  ">
                                <span className="text-[14px] font-normal leading-[21px]">Food&Beverage</span>
                            </div>
                            <div className="flex w-[250px] py-[8px] px-[16px] items-start rounded-[4px] bg-[#fff]  ">
                                <span className="text-[14px] font-normal leading-[21px]">Home and decor</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-3">
                        <div className="flex w-[250px] justify-between items-center">
                            <span className="text-[14px] font-semibold">Sport</span>
                            <img src="Frame.svg" alt="icon" />
                        </div>
                        <div className="flex flex-col justify-center items-start gap-2">
                            <div className="flex w-[250px] py-[8px] px-[16px] items-start rounded-[4px] bg-[#fff]  ">
                                <span className="text-[14px] font-normal leading-[21px]">Soccer</span>
                            </div>
                            <div className="flex w-[250px] py-[8px] px-[16px] items-start rounded-[4px] bg-[#fff]  ">
                                <span className="text-[14px] font-normal leading-[21px]">Volleyball</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-start gap-3">
                        <div className="flex w-[250px] justify-between items-center">
                            <span className="text-[14px] font-semibold">Technology</span>
                            <img src="Frame (1).svg" alt="icon" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-3">
                        <div className="flex w-[250px] justify-between items-center">
                            <span className="text-[14px] font-semibold">Entertainment</span>
                            <img src="Frame (1).svg" alt="icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Sidebar;