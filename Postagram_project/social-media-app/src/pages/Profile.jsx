import Post from "./Post";
import { useParams } from "react-router-dom";
import axiosService from "../helpers/axios";
import { useState } from "react";

function Profile() {
  const { profileId } = useParams();
  const [user, setUser] = useState();
  const [userPosts, setUserPosts] = useState([]);
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

  axiosService
    .get(`/post/?author_public_id=${profileId}/`)
    .then((res) => {
      setUserPosts(res.data);
      // console.log(res)
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <div className="">
      <div className="flex items-center gap-10 border-b-solid border-b-[5px]">
        <div>
          <img
            className="bg-white border-blue-600 m-[50px] rounded-[300px]  border-[2px] w-[200px] h-[200px]"
            src={user?.avatar}
            alt=""
          />
        </div>
        <div>
          <p className="text-[40px]">{user?.username}</p>
          <p className="text-[30px]">{user?.bio}</p>
          <p className="text-[20px]">{user?.posts_count} posts</p>
          <div className="flex w-[70px] items-center justify-center bg-blue-600 h-[35px] rounded-[5px]">
            <a
              href={`/profile/${user?.id}/edit/`}
              className="no-underline  text-white"
            >
              Edit
            </a>
          </div>
        </div>
      </div>
      <div>
        {userPosts &&
          userPosts?.map((post, index) => ( 
            <Post  key={index} post={post} refresh={post.mutate} />
          ))}
      </div>
    </div>
  );
}

export default Profile;
