import ProfileCard from "./ProfileCard";

const MyPosts = () => {
    return (
        <div className="inline-flex items-start gap-[30px] mx-[56px] mt-[48px]">
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
            <div className="flex w-[971px] flex-col gap-5 shrink-0 items-start  ">
                <div className="flex w-[971px] gap-[35px] items-start border-b-[1px] border-b-[solid] border-b-[#DCE3EA]">
                    <div className="flex w-[400px] h-10 px-[45px] py-[10px] gap-[10px] shrink-0 items-center justify-center border-b-[2px] border-b-[solid] border-b-[#E86B02] ">
                        <span className="text-center text-[#333] text-[18px] font-extrabold leading-normal ">Бүх пост</span>
                    </div>
                </div>
                <div className="w-[971px] h-[1258.844px] shrink-0 ">
                    <div className="inline-flex gap-[10px] items-start mb-5">
                        <ProfileCard imgSrc={"profile-img.png"} title={"The Impact of Technology on the Workplace"} profileImgSrc={"Image.png"} date={"Aug 20, 2022"} likeCount={23} />
                        <ProfileCard imgSrc={"profile-img.png"} title={"The Impact of Technology on the Workplace"} profileImgSrc={"Image.png"} date={"Aug 20, 2022"} likeCount={23} />
                        <ProfileCard imgSrc={"profile-img.png"} title={"The Impact of Technology on the Workplace"} profileImgSrc={"Image.png"} date={"Aug 20, 2022"} likeCount={23} />
                    </div>
                    <div className="inline-flex gap-[10px] items-start mb-5">
                        <ProfileCard imgSrc={"profile-img.png"} title={"The Impact of Technology on the Workplace"} profileImgSrc={"Image.png"} date={"Aug 20, 2022"} likeCount={23} />
                        <ProfileCard imgSrc={"profile-img.png"} title={"The Impact of Technology on the Workplace"} profileImgSrc={"Image.png"} date={"Aug 20, 2022"} likeCount={23} />
                        <ProfileCard imgSrc={"profile-img.png"} title={"The Impact of Technology on the Workplace"} profileImgSrc={"Image.png"} date={"Aug 20, 2022"} likeCount={23} />
                    </div>
                    <div className="inline-flex gap-[10px] items-start mb-5">
                        <ProfileCard imgSrc={"profile-img.png"} title={"The Impact of Technology on the Workplace"} profileImgSrc={"Image.png"} date={"Aug 20, 2022"} likeCount={23} />
                        <ProfileCard imgSrc={"profile-img.png"} title={"The Impact of Technology on the Workplace"} profileImgSrc={"Image.png"} date={"Aug 20, 2022"} likeCount={23} />
                        <ProfileCard imgSrc={"profile-img.png"} title={"The Impact of Technology on the Workplace"} profileImgSrc={"Image.png"} date={"Aug 20, 2022"} likeCount={23} />
                    </div>
                    <div className="inline-flex gap-[10px] items-start">
                        <ProfileCard imgSrc={"profile-img.png"} title={"The Impact of Technology on the Workplace"} profileImgSrc={"Image.png"} date={"Aug 20, 2022"} likeCount={23} />
                        <ProfileCard imgSrc={"profile-img.png"} title={"The Impact of Technology on the Workplace"} profileImgSrc={"Image.png"} date={"Aug 20, 2022"} likeCount={23} />
                        <ProfileCard imgSrc={"profile-img.png"} title={"The Impact of Technology on the Workplace"} profileImgSrc={"Image.png"} date={"Aug 20, 2022"} likeCount={23} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyPosts;