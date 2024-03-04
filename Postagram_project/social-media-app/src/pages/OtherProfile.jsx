function OtherProfile() {
  const data = JSON.parse(localStorage.getItem("auth"));
  return (
    <div className="w-[90%] h-[100%] m-[30px] border-1 shadow-xl rounded-[20px]">
      <p className="pt-[25px] text-[20px] text-center">Other people</p>
      <div className="mt-[35px]">
        <ul className="flex flex-col gap-20">
          <li className="flex relative gap-2">
            <img
              className="bg-white rounded-[100px]  border-[2px] w-[50px] border-blue-600 h-[50px]"
              src={data.user.avatar}
              alt=""
            />
            <span className="font-medium">{data.user.username}</span>
            <div className="w-[100px] bg-blue-600 h-[35px] absolute top-8 left-[60px] rounded-[6px]">
              <p className="text-white text-center p-[4px]">View profile</p>
            </div>
          </li>
          <li className="flex relative gap-2">
            <img
              className="bg-white rounded-[100px]  border-[2px] w-[50px] border-blue-600 h-[50px]"
              src={data.user.avatar}
              alt=""
            />
            <span className="font-medium">{data.user.username}</span>
            <div className="w-[100px] bg-blue-600 h-[35px] absolute top-8 left-[60px] rounded-[6px]">
              <p className="text-white text-center p-[4px]">View profile</p>
            </div>
          </li>
          <li className="flex relative gap-2">
            <img
              className="bg-white rounded-[100px]  border-[2px] w-[50px] border-blue-600 h-[50px]"
              src={data.user.avatar}
              alt=""
            />
            <span className="font-medium">{data.user.username}</span>
            <div className="w-[100px] bg-blue-600 h-[35px] absolute top-8 left-[60px] rounded-[6px]">
              <p className="text-white text-center p-[4px]">View profile</p>
            </div>
          </li>
          <li className="flex relative gap-2">
            <img
              className="bg-white rounded-[100px]  border-[2px] w-[50px] border-blue-600 h-[50px]"
              src={data.user.avatar}
              alt=""
            />
            <span className="font-medium">{data.user.username}</span>
            <div className="w-[100px] bg-blue-600 h-[35px] absolute top-8 left-[60px] rounded-[6px]">
              <p className="text-white text-center p-[4px]">View profile</p>
            </div>
          </li>
        </ul>
        <span></span>
        <button></button>
      </div>
    </div>
  );
}

export default OtherProfile;
