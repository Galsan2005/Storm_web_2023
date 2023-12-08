import Card from "./Card";

const Body = () => {
    return (
        <>
            <div className=" ml-[65px] mt-[64px] inline-flex flex-col items-start gap-4 ">
                <section className="flex flex-col relative items-start gap-4">
                    <div className="flex w-[982px] items-start gap-[18.204px] ">
                        <div className="flex w-[982px] justify-between items-center shrink-0 ">
                            <div className="flex px-[18.204px] py-10.922px justify-center items-center gap-[9.102px]">
                                <span className="text-[#151411] text-[18px] font-bold leading-[23.4px] uppercase ">lifestyle</span>
                            </div>
                            <div className="flex w-[116.504px] h-[47.33px] px-[13.653px] py-0 justify-end items-center gap-[10.922px] shrink-0 rounded-[10.922px] ">
                                <span className="text-[#546371] text-center text-[16px] font-medium leading-[28.8px]">Бүгд</span>
                                <img src="u_angle-right-b.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex pb-0 justify-end items-center">
                        <div className="flex items-start gap-[22px]">
                            <Card imgSrc={"Rectangle 39.png"} title={"The Impact of Technology on the Workplace"} profileImgSrc={"profile.png"} date={"Aug 20, 2022"} likeCount={23} />
                            <Card imgSrc={"Rectangle 39.png"} title={"The Impact of Technology on the Workplace"} profileImgSrc={"profile.png"} date={"Aug 20, 2022"} likeCount={23} />
                            <Card imgSrc={"Rectangle 39.png"} title={"The Impact of Technology on the Workplace"} profileImgSrc={"profile.png"} date={"Aug 20, 2022"} likeCount={23} />
                            <Card imgSrc={"Rectangle 39.png"} title={"The Impact of Technology on the Workplace"} profileImgSrc={"profile.png"} date={"Aug 20, 2022"} likeCount={23} />
                            <div className="flex w-[53px] h-[53px] justify-end items-center gap-4 absolute right-0 bottom-[100px] ">
                                <div className="flex w-[52px] h-[52px] p-[10px] justify-center items-center gap-[10px] shrink-0 rounded-[50px] bg-[#FFF] shadow-xl">
                                    <img className="flex w-[24px] h-[24px] justify-center items-center shrink-0 " src="right-arrow.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                
                {/* section two or technology */}
                <section className="flex relative flex-col items-start gap-4">
                    <div className="flex w-[982px] items-start gap-[18.204px] ">
                        <div className="flex w-[982px] justify-between items-center shrink-0 ">
                            <div className="flex px-[18.204px] py-10.922px justify-center items-center gap-[9.102px]">
                                <span className="text-[#151411] text-[18px] font-bold leading-[23.4px] uppercase ">Technology</span>
                            </div>
                            <div className="flex w-[116.504px] h-[47.33px] px-[13.653px] py-0 justify-end items-center gap-[10.922px] shrink-0 rounded-[10.922px] ">
                                <span className="text-[#546371] text-center text-[16px] font-medium leading-[28.8px]">Бүгд</span>
                                <img src="u_angle-right-b.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex pb-0 justify-end items-center">
                        <div className="flex items-start gap-[22px]">
                        <Card imgSrc={"Rectangle 39.png"} title={"The Impact of Technology on the Workplace"} profileImgSrc={"profile.png"} date={"Aug 20, 2022"} likeCount={23} />
                        <Card imgSrc={"Rectangle 39.png"} title={"The Impact of Technology on the Workplace"} profileImgSrc={"profile.png"} date={"Aug 20, 2022"} likeCount={23} />
                        <Card imgSrc={"Rectangle 39.png"} title={"The Impact of Technology on the Workplace"} profileImgSrc={"profile.png"} date={"Aug 20, 2022"} likeCount={23} />
                        <Card imgSrc={"Rectangle 39.png"} title={"The Impact of Technology on the Workplace"} profileImgSrc={"profile.png"} date={"Aug 20, 2022"} likeCount={23} />
                            <div className="flex w-[53px] h-[53px] justify-end items-center gap-4 absolute right-0 bottom-[100px] ">
                                <div className="flex w-[52px] h-[52px] p-[10px] justify-center items-center gap-[10px] shrink-0 rounded-[50px] bg-[#FFF] shadow-xl">
                                    <img className="flex w-[24px] h-[24px] justify-center items-center shrink-0 " src="right-arrow.png" alt="" />
                                </div>
                            </div>
                            <div className="flex w-[53px] h-[53px] justify-end items-center gap-4 absolute left-0 bottom-[100px] ">
                                <div className="flex w-[52px] h-[52px] p-[10px] justify-center items-center gap-[10px] shrink-0 rounded-[50px] bg-[#FFF] shadow-xl">
                                    <img className="flex w-[24px] h-[24px] justify-center items-center shrink-0 " src="left-arrow.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* section two or health */}
                <section className="flex relative flex-col items-start gap-4">
                    <div className="flex w-[982px] items-start gap-[18.204px] ">
                        <div className="flex w-[982px] justify-between items-center shrink-0 ">
                            <div className="flex px-[18.204px] py-10.922px justify-center items-center gap-[9.102px]">
                                <span className="text-[#151411] text-[18px] font-bold leading-[23.4px] uppercase ">Healthy</span>
                            </div>
                            <div className="flex w-[116.504px] h-[47.33px] px-[13.653px] py-0 justify-end items-center gap-[10.922px] shrink-0 rounded-[10.922px] ">
                                <span className="text-[#546371] text-center text-[16px] font-medium leading-[28.8px]">Бүгд</span>
                                <img src="u_angle-right-b.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex pb-0 justify-end items-center">
                        <div className="flex items-start gap-[22px]">
                            <Card imgSrc={"Rectangle 39.png"} title={"The Impact of Technology on the Workplace"} profileImgSrc={"profile.png"} date={"Aug 20, 2022"} likeCount={23} />
                            <Card imgSrc={"Rectangle 39.png"} title={"The Impact of Technology on the Workplace"} profileImgSrc={"profile.png"} date={"Aug 20, 2022"} likeCount={23} />
                            <Card imgSrc={"Rectangle 39.png"} title={"The Impact of Technology on the Workplace"} profileImgSrc={"profile.png"} date={"Aug 20, 2022"} likeCount={23} />
                            <Card imgSrc={"Rectangle 39.png"} title={"The Impact of Technology on the Workplace"} profileImgSrc={"profile.png"} date={"Aug 20, 2022"} likeCount={23} />

                            <div className="flex w-[53px] h-[53px] justify-end items-center gap-4 absolute right-0 bottom-[100px] ">
                                <div className="flex w-[52px] h-[52px] p-[10px] justify-center items-center gap-[10px] shrink-0 rounded-[50px] bg-[#FFF] shadow-xl">
                                    <img className="flex w-[24px] h-[24px] justify-center items-center shrink-0 " src="right-arrow.png" alt="" />
                                </div>
                            </div>
                            <div className="flex w-[53px] h-[53px] justify-end items-center gap-4 absolute left-0 bottom-[100px] ">
                                <div className="flex w-[52px] h-[52px] p-[10px] justify-center items-center gap-[10px] shrink-0 rounded-[50px] bg-[#FFF] shadow-xl">
                                    <img className="flex w-[24px] h-[24px] justify-center items-center shrink-0 " src="left-arrow.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="mt-[39.3px] ml-[485px] inline-flex px-5 py-3 justify-center items-center gap-3 rounded-[10px] border-[1px] border-[solid] border-[#99999a] ">
                <span className="text-[#535357] text-[16px] font-normal leading-[24px] ">Цааш үзэх</span>
            </div>
        </>
    );
}

export default Body;