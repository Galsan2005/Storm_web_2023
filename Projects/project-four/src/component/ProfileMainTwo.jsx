const ProfileMainTwo = () => {
    return (
        <div className="inline-flex items-start gap-[155px] mx-[56px] mt-[48px]">
            <div className="flex w-[343px] p-[24px] flex-col items-center rounded-[20px] bg-[#fff] gap-6">
                <div className="flex items-center gap-[10px]">
                    <img className="w-[85px] h-[85px] " src="Image (1).png" alt="icon" />
                    <span className="text-[#333} text-[24px] font-semibold">Tracey Willson</span>
                </div>
                <div className="flex items-start gap-[30px]">
                    <div className="flex h-10 flex-col justify-center items-center gap-2">
                        <span className="flex w-[18px] h-[14px] flex-col justify-center shrink-0 text-[#333] text-[15px] font-semibold">1</span>
                        <span className="text-[#333] text-[15px] font-semibold">Follows</span>
                    </div>
                    <div className="w-[1px] h-[40px] bg-[#E2E8EE]"></div>
                    <div className="flex h-10 flex-col justify-center items-center gap-2">
                        <span className="flex w-[18px] h-[14px] flex-col justify-center shrink-0 text-[#333] text-[15px] font-semibold">0</span>
                        <span className="text-[#333] text-[15px] font-semibold">Followers</span>
                    </div>
                    <div className="w-[1px] h-[40px] bg-[#E2E8EE]"></div>
                    <div className="flex h-10 flex-col justify-center items-center gap-2">
                        <span className="flex w-[18px] h-[14px] flex-col justify-center shrink-0 text-[#333] text-[15px] font-semibold">0</span>
                        <span className="text-[#333] text-[15px] font-semibold">Posts</span>
                    </div>
                </div>
                <div className="flex w-[294px] px-[30px] py-[10px] justify-center items-center gap-[2px] rounded-[10px] border-[1px] border-[solid] border-[#E2E8EE] ">
                    <img className="w-[16px h-[16px] shrink-0" src="uzeg.svg" alt="uzeg" />
                    <span className="text-[#546371] text-[15px] font-medium leading-[21px] ">Профайл засах</span>
                </div>
            </div>
            <div className="flex w-[846px] items-start gap-[1px] shrink-0">
                <div className="flex flex-col items-start gap-[35px]">
                    <div className="flex relative w-[150px] h-[40px] px-[45px] py-[10px] justify-center items-cneter gap-[10px] border-b-[2px] border-b-[solid] border-b-[#E86B02]">
                        <img className="absolute left-2 w-6 h-6 shrink-0" src="u_pen (1).svg" alt="icon" />
                        <span className="text-[#333] right-2 absolute text-center text-[18px] font-bold ">Пост нэмэх</span>
                    </div>
                    <div className="flex flex-col items-start gap-[10px]">
                        <span className="text-[#000] text-[18px] font-bold leading-[22px]">Категори сонгох</span>
                        <div className="flex w-[247px] px-6 py-[14px] justify-between items-center rounded-[10px] bg-[#E86B02] ">
                            <span className="text-[#F9FCFF] text-4 font-medium leading-[22px]">Technology</span>
                            <img src="u_angle-left-b (1).svg" alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-6">
                        <div className="flex flex-col items-start gap-5">
                            <div className="flex flex-col items-start gap-[10px]">
                                <span className="text-[#000] text-[18px] font-bold leading-[22px] ">Cover зураг</span>
                                <div className="flex w-[600px] h-[154px] flex-col justify-center items-center gap-[5px] rounded-[20px]">
                                    <img className="w-[600px] relative h-[154px] rounded-[20px]" src="sky.webp" alt="icon" />
                                    <span className="absolute text-[#fff] text-[14px] font-medium leading-[22px] underline ">picture.01.png</span>
                                    <div className="absolute right-[530px] flex p-[6px] items-start gap-[10px] rounded-[44px] border-[1px] border-[solid] border-[#F9FCFF] ">
                                        <img src="fi_x.svg" alt="icon" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-start gap-[10px]">
                                <span className="text-[#000] text-[18x] font-bold leading-[22px] ">Гарчиг</span>
                                <div className="flex w-[600px] px-6 py-[14px] items-center gap-[10px] rounded-10px bg-[#F5F7F9]">
                                    <span className="text-[#1A1E23] text-[16px] font-normal leading-[22px] ">Технологийн шинэ эрин үед AI</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-start gap-[10px]">
                                <span className="text-[#000] text-[18px] font-bold leading-[22px] ">Үндсэн хэсэг </span>
                                <div className="flex w-[600px] h-[221px] px-6 py-[14px] items-start gap-[10px] rounded-10px bg-[#F5F7F9]">
                                    <img className="w-6 h-6" src="fi_grid.svg" alt="icon" />
                                    <span className="text-[#1A1E23] w-[513px] shrink-0 text-[16px] font-normal leading-[22px] ">
                                        Lorem ipsum dolor sit amet consectetur. Amet interdum maecenas id massa et mattis. 
                                        Ultrices malesuada hendrerit pharetra velit porttitor turpis faucibus vivamus. 
                                        Integer sed netus libero feugiat mi augue sed odio sit.
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-[175px] px-[30px] py-[10px] justify-center items-center gap-[2px] rounded-[10px] bg-[#E86B02]  ">
                            <span className="text-[#fff] text-[15px] font-medium leading-[21px] ">Постлох</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileMainTwo;