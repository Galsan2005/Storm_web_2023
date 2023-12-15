const SignUpHeader = () => {
    return (

        <>

            <div className="flex relative w-[1440px] h-[99px] px-[48px] py-[39px] justify-between items-center shrink-0 bg-[#fff] border-b-[1px] border-b-[solid] border-b-[#D3D8D4]  ">
                <div className="flex items-center w-[91.617px] h-[46px] shrink-0">
                    <img className="w-5 h-[26.7px] shrink-0" src="Group (1).svg" alt="icon" />
                    <span className="w-[70px] h-[46px] shrink-0 text-[#F77268] text-[30px] font-normal">i<span className="text-[#FC9419] text-[30px] font-normal">blog</span></span>
                </div>
                <form className="flex relative items-start justify-center gap-[98px]">
                    <input 
                        className="flex w-[572px] h-[39px] px-[25px] py-0 justify-between items-center rounded-[20px] border-[1px] border-[solid] border-[#D3D8D4] "
                        placeholder="Хайх"
                        type="text"
                    />
                        <img className="absolute top-[10px] right-6" src="search-normal.svg" alt="icon" />
                </form>
                <div className="w-[285px] h-[43px] shrink-0 ">
                    <div className="flex gap-3 w-[215px] h-[41px] shrink-0]">
                        <button  
                            className="flex px-[30px] py-[10px] justify-center items-center gap-[10px] text-center rounded-[10px] border-[1px] border-[solid] border-[#DCE3EA] bg-[#fff]">
                            <a href="/signup" className="text-[#E86B02] text-[15px] font-semibold leading-[21px]">Бүртгүүлэх</a>
                        </button>
                        <button className="flex py-[10px] px-[30px] justify-between items-center rounded-[10px] border-[1px] border-b-[solid]  bg-[#E86B02] ">
                            <a href="/login" className="text-[#fff] text-[15px] font-medium leading-[21px]">Нэвтрэх</a>
                        </button>
                    </div>
                </div>
            </div>
        </>

    );
}

export default SignUpHeader;