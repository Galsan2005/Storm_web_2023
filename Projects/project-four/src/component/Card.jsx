const Card = ({imgSrc, title, profileImgSrc, date, likeCount}) => {
    return (
        <div className="flex p-[10px] flex-col items-start gap-[10px] rounded-lg shadow-md bg-[#fff]">
            <div className="flex flex-col items-start gap-[5px] ">
                <img className="w-[210px] h-[140px] rounded-lg" src={imgSrc} alt="zurag" />
                <span className=" w-[148.825px] text-[#181A2A] text-base font-semibold leading-[18px] ">{title}</span>
            </div>
            <div className="flex flex-col items-start gap-[8px] ">
                <div className="flex w-[210px] justify-between items-center ">
                    <div className="flex relative w-[91.128px] h-[20.711px] items-center gap-1 shrink-0 ">
                        <img className="w-[20.998px] h-[20.998px] shrink-0 rounded-[16.569px] " src={profileImgSrc} alt="zurag" />
                        <div className="left-[25px] text-[#97989F] absolute w-[200px] text-sm leading-[13.999px] ">Tracey Wilson</div>
                    </div>
                    <span className="text-[#97989F] text-[12px] font-normal leading-[10.981px] ">
                       {date}
                    </span>
                </div>
            </div>
            <div className="flex w-[209px] justify-between items-center ">
                <div className="flex items-center gap-1">
                    <img className="w-[20px] h-[20px] " src="zurh.svg" alt="" />
                    <span className="text-[#151411] text-[16px] font-medium leading-[20.8px] tracking-[0.16px] ">{likeCount}</span>
                </div>
                <div className="flex p-[5px] items-center gap-1 rounded-[5px] bg-[#2F80ED] ">
                    <img className="w-[16px] h-[16px]" src="face.svg" alt="facebook" />
                    <span className="text-[#F9FCFF] text-[15px] font-medium leading-[19.5px] tracking-[0.15px] ">Share</span>
                </div>
            </div>
        </div>
    );
}

export default Card;