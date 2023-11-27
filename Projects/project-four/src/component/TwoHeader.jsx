const TwoHeader = () => {
    return(
        <div className="flex w-[1440px] h-[99px] px-[48px] py-[39px] justify-between items-center shrink-0 bg-[#fff] ">
            <div className="flex items-center w-[91.617px] h-[46px] shrink-0">
                <img className="w-5 h-[26.7px] shrink-0" src="Group (1).svg" alt="icon" />
                <span className="w-[70px] h-[46px] shrink-0 text-[#F77268] text-[30px] font-normal">i<span className="text-[#FC9419] text-[30px] font-normal">blog</span></span>
            </div>
            <div className="flex items-start justify-center gap-[98px]">
                <div className="flex w-[572px] h-[39px] px-[25px] py-0 justify-between items-center rounded-[20px] border-[1px] border-[solid] border-[#D3D8D4] ">
                    <span className="flex w-[39px] h-[16px] flex-col justify-center shrink-0 text-[#898886] font-normal  ">Хайх</span>
                    <img src="search-normal.svg" alt="icon" />
                </div>
            </div>
            <div className="flex w-[396px] justify-end items-center gap-4 shrink-0  ">
                <img className="w-[28px] h-[28px] shrink-0 " src="u_heart.svg" alt="icon" />
                <div className="flex gap-3 w-[215px] h-[41px] shrink-0]">
                    <div className="inline-flex px-[30px] py-10px justify-center items-center gap-[2px] h-[41px] rounded-[10px] bg-[#E86B02]">
                        <span className="text-[#FFF] text-[15px] font-medium leading-[21px]">Post</span>
                        <img src="u_pen.svg" alt="icon" />
                    </div>
                    <div className="inline-flex p-[10px] justify-between items-center border-b-[1px] border-b-[solid] border-b-[#E86B02] text-[#E86B02] ">
                        <img src="u_user.svg" alt="icon" />
                        <span className="text-[#E86B02] text-[15px] font-medium leading-[21px]">Профайл</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TwoHeader;