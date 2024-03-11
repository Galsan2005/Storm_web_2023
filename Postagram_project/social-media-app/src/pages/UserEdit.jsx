import { useParams } from "react-router-dom";
import axiosService from "../helpers/axios";
import { useState } from "react";
function UserEdit() {
  const { profileId } = useParams();
  const [user, setUser] = useState();
  axiosService
    .get(`/user/${profileId}/`)
    .then((res) => {
      // const props = res
      // console.log("user card", data.username);
      console.log(res);
      setUser(res?.data);
      //  console.log(props)
    })
    .catch((error) => {
      console.error(error);
    });
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center">
        <p className="mt-[20px] mb-[-30px]">AVATAR</p>
        <div className="">
          <img
            className="bg-white border-blue-600 m-[50px] rounded-[300px]  border-[2px] w-[200px] h-[200px]"
            src={user?.avatar}
            alt=""
          />
        </div>
        <div>
          <form>
            <label className="border-1 text-center border-solid h-[30px] p-[2px] w-[70px] bg-gray-200 rounded-s-md">
              Browser
            </label>
            <input
              className="border-2 h-[30px] p-[5px] border-solid rounded-e-md "
              placeholder="No file selected."
              type="url"
            />
          </form>
        </div>
        <form className="flex flex-col gap-2 w-full p-5">
          <label>First Name</label>
          <input
            className="border-2 h-[40px] p-[5px] border-solid rounded-md "
            placeholder={user?.first_name}
            type="text"
          />
          <label>Last Name</label>
          <input
            className="border-2 h-[40px] p-[5px] border-solid rounded-md "
            placeholder={user?.last_name}
            type="text"
          />
          <label>Bio</label>
          <input
            className="border-2 h-[100px] p-[5px] border-solid rounded-md "
            placeholder={user?.bio}
            type="text"
          />
          <button className="flex items-center pt-3 justify-center w-[150px] bg-blue-600 h-[35px] rounded-[5px]">
            <p className="text-white">Save changes</p>
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserEdit;
