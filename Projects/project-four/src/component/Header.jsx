import { useEffect, useState } from "react";

const Header = () => {
    const [authenticated, setauthenticated] = useState(false)

    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
            setauthenticated(true);
        } else {
            setauthenticated(false)
        }
    }, [authenticated])
    return (
        <div className="flex w-[1091px] px-[48px] py-[39px] justify-end items-start gap-[110px] border-b-[1px] border-solid border-[#E2E8EE] bg-[#fff]">
            <div className="flex w-[572px] h-[39px]  px-[25px] py-0 justify-between items-center shrink-0 rounded-[20px] border-[1px] border-solid border-[#D2D8D4] ">
                <span className="flex w-[39px] h-[16px] flex-col justify-center shrink-0 text-[#898886] text-[16px] font-normal ">Хайх</span>
                <div className="flex justify-center items-center shrink-0 w-5 h-5">
                    <img src="search-normal.svg" alt="" />
                </div>
            </div>
            <div className="flex justify-end items-start gap-[14px]">
                <div className="flex px-[30px] py-[10px] justify-center items-center gap-[10px] rounded-[10px] border-[1px] border-solid border-[#DCE3EA] bg-[#fff] ">
                    <a href="/register" className="text-[#E86B02] text-[16px] font-semibold leading-[21px] ">{!authenticated ? 'Бүртгүүлэx' : 'Нэвтэрсэн'}</a>
                </div>
                <div className="flex px-[30px] py-[10px] justify-center items-center gap-[10px] rounded-[10px] bg-[#E86B02] ">
                    <a href="/login" className="text-[#fff] text-[15px] font-medium leading-[21px] ">Нэвтрэх</a>
                </div>
            </div>
        </div>
    ); 
}

export default Header;