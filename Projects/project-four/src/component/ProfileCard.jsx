const ProfileCard = ({imgSrc, title, profileImgSrc, date, likeCount }) => {
    return (
        <div className="flex w-[317px] p-[10px] flex-col gap-[10px] items-start rounded-[8px] bg-[#fff] shadow-lg">
            <div className="flex w-[297px] flex-col gap-[5px] items-start">
                <img className="w-[297px] h-[169px] rounded-lg " src={imgSrc} alt="zurag" />
                <span className="w-[297px] text-[#181A2A] text-[16px] font-semibold leading-[18px]">{title}</span>
            </div>
            <div className="flex w-[295px] justify-between items-center ">
                <div className="flex h-[20.711px] items-center gap-1 shrink-0">
                    <img className="w-[20.998px] h-[20.998px] shrink-0 rounded-[16.569px]" src={profileImgSrc} alt="pro" />
                    <span className="text-[#97989F] text-[14px] font-medium leading-[14px]">Tracey Wilson</span>
                </div>
                <div className="text-[#97989F] text-[12px] font-normal leading-[10.981px]">{date}</div>
            </div>
            <div className="flex w-[297px] justify-between items-center">
                <div className="flex items-center gap-1">
                    <img src="zurh.svg" alt="" />
                    <span>{likeCount}</span>
                </div>
                <div>
                    <img src="fi_more-vertical.svg" alt="fi" />
                </div>
                <div className="flex p-[5px] gap-1 items-center rounded-[5px] bg-[#2F80ED]">
                    <img className="w-4 h-4" src="face.svg" alt="facebook" />
                    <span className="text-[#F9FCFF] text-[15px] font-medium leading-[19.5px]">Share</span>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;