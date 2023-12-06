import { Outlet } from "react-router-dom";
import Card from "./Card";

const Category = () => {
    return (
        <>
            <div className=" ml-[65px] mt-[64px] inline-flex flex-col items-start gap-4 ">
                <div className="flex h-10 items-center gap-[5px]">
                    <div className="flex w-[156px] mr-6  h-[39px] px-[16px] py-[10px] items-center gap-[5px] ">
                        <span className="text-[#546371] absolute text-center text-[18px] font-medium ">Нүүр хуудас</span>
                        <img className="w-[24px] h-[24px] ml-[111px]" src="right.sum.svg" alt="icon" />
                    </div>
                    <div className="flex px-16px py-10px mr-10 items-center gap-[5px]">
                        <span className="text-[#1A1E23] absolute text-center text-[18px] font-medium ">Lifestyle</span>
                        <img className="w-[24px] h-[24px] ml-[74px]" src="right.sum.svg" alt="icon" />
                    </div>
                    <div className="flex px-16px py-10px mr-10 items-center gap-[5px]">
                        <span className="text-[#1A1E23] absolute text-center text-[18px] font-medium ">Hobby</span>
                        <img className="w-[24px] h-[24px] ml-[57px]" src="right.sum.svg" alt="icon" />
                    </div>
                </div>
                <div className="flex w-[971px] h-[40px] flex-col items-start gap-5 shrink-0 ">
                    <div className="w-[150px] h-[40px] shrink-0 ">
                        <div className="flex w-[150px] h-[40px] pl-0 pt-[10px] pr-[20px] pb-[10px] justify-center items-center shrink-0 border-b-2 border-b-[solid] border-b-[#E86B02] ">
                            <span className="text-[#333] text-[18px] font-bold ">Hobby</span>
                        </div>
                    </div>
                </div>
                <Outlet />
                <section className="flex flex-col relative items-start gap-4">
                    <div className="flex pb-0 justify-end items-center">
                        <div className="flex items-start gap-[22px]">
                            <Card imgSrc={"Rectangle 39.png"} title={"The Impact of Technology on the Workplace"} profileImgSrc={"profile.png"} date={"Aug 20, 2022"} likeCount={23} />
                            <Card imgSrc={"Rectangle 39.png"} title={"The Impact of Technology on the Workplace"} profileImgSrc={"profile.png"} date={"Aug 20, 2022"} likeCount={23} />
                            <Card imgSrc={"Rectangle 39.png"} title={"The Impact of Technology on the Workplace"} profileImgSrc={"profile.png"} date={"Aug 20, 2022"} likeCount={23} />
                            <Card imgSrc={"Rectangle 39.png"} title={"The Impact of Technology on the Workplace"} profileImgSrc={"profile.png"} date={"Aug 20, 2022"} likeCount={23} />
                        </div>
                    </div>
                </section>
                {/* section two or technology */}
                <section className="flex relative flex-col items-start gap-4">
                    <div className="flex pb-0 justify-end items-center">
                        <div className="flex items-start gap-[22px]">
                            <Card imgSrc={"Rectangle 39.png"} title={"The Impact of Technology on the Workplace"} profileImgSrc={"profile.png"} date={"Aug 20, 2022"} likeCount={23} />
                            <Card imgSrc={"Rectangle 39.png"} title={"The Impact of Technology on the Workplace"} profileImgSrc={"profile.png"} date={"Aug 20, 2022"} likeCount={23} />
                            <Card imgSrc={"Rectangle 39.png"} title={"The Impact of Technology on the Workplace"} profileImgSrc={"profile.png"} date={"Aug 20, 2022"} likeCount={23} />
                            <Card imgSrc={"Rectangle 39.png"} title={"The Impact of Technology on the Workplace"} profileImgSrc={"profile.png"} date={"Aug 20, 2022"} likeCount={23} />
                        </div>
                    </div>
                </section>
                {/* section three or health */}
                <section className="flex relative flex-col items-start gap-4">
                    <div className="flex pb-0 justify-end items-center">
                        <div className="flex items-start gap-[22px]">
                            <Card imgSrc={"Rectangle 39.png"} title={"The Impact of Technology on the Workplace"} profileImgSrc={"profile.png"} date={"Aug 20, 2022"} likeCount={23} />
                            <Card imgSrc={"Rectangle 39.png"} title={"The Impact of Technology on the Workplace"} profileImgSrc={"profile.png"} date={"Aug 20, 2022"} likeCount={23} />
                            <Card imgSrc={"Rectangle 39.png"} title={"The Impact of Technology on the Workplace"} profileImgSrc={"profile.png"} date={"Aug 20, 2022"} likeCount={23} />
                            <Card imgSrc={"Rectangle 39.png"} title={"The Impact of Technology on the Workplace"} profileImgSrc={"profile.png"} date={"Aug 20, 2022"} likeCount={23} />
                        </div>
                    </div>
                </section>
                {/* section four */}
                <section className="flex relative flex-col items-start gap-4">
                    <div className="flex pb-0 justify-end items-center">
                        <div className="flex items-start gap-[22px]">
                            <Card imgSrc={"Rectangle 39.png"} title={"The Impact of Technology on the Workplace"} profileImgSrc={"profile.png"} date={"Aug 20, 2022"} likeCount={23} />
                            <Card imgSrc={"Rectangle 39.png"} title={"The Impact of Technology on the Workplace"} profileImgSrc={"profile.png"} date={"Aug 20, 2022"} likeCount={23} />
                            <Card imgSrc={"Rectangle 39.png"} title={"The Impact of Technology on the Workplace"} profileImgSrc={"profile.png"} date={"Aug 20, 2022"} likeCount={23} />
                            <Card imgSrc={"Rectangle 39.png"} title={"The Impact of Technology on the Workplace"} profileImgSrc={"profile.png"} date={"Aug 20, 2022"} likeCount={23} />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Category;