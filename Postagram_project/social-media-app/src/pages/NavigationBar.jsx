import { useState } from "react";

const NavigationBar = () => {
  const data = JSON.parse(localStorage.getItem("auth"));
  console.log(data);
  const [show, setShow] = useState(false);

  return (
    <div className="">
      <div className="flex items-center justify-between bg-blue-600 w-full h-[100px] ">
        <p className="text-white ml-10 text-[30px]">Postagram</p>
        <div className="flex items-center relative mr-20">
          <img
            className="bg-white rounded-[100px] border-[2px] w-10 h-10"
            src={data.user.avatar}
            alt=""
          />
          <button onClick={() => setShow(!show)}>
            <img
              className="ml-1 w-[20px] h-[20px]"
              src="down-chevron.png"
              alt=""
            />
          </button>
        </div>
      </div>
      {show ? (
        <div className="absolute top-[80px] right-5">
          <ul className="w-[130px] px-3 py-1 bg-white h-[60px] border-1">
            <li>
              <a href="/" className="text-black no-underline">
                Profile
              </a>
            </li>
            <li>
              <a href="/" className="text-black no-underline">
                Logout
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <div>NO show</div>
      )}
    </div>
  );
};

export default NavigationBar;
