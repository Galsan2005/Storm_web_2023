import useSWR from "swr";
import { fetcher } from "../helpers/axios";
import Post from "./Post";

function Profile() {
    const users = useSWR(`/user/?author_public_id=8627e5187a1d42468c13d2205be84991`,fetcher,{
      refreshInterval: 20000,
    });
    const posts = useSWR(`/post/?author_public_id=8627e5187a1d42468c13d2205be84991`, fetcher, {
    refreshInterval: 20000
    });
    const user = users.username
  console.log(user);
  console.log(posts.data);
  return (
    <div className="">
      <div className="flex border-b-solid border-b-[5px]">
        <img
          className="bg-white border-blue-600 m-[50px] rounded-[300px]  border-[2px] w-[300px] h-[300px]"
          src={users}
          alt=""
        />
        <div>
            <p>{posts}</p>
        </div>
      </div>
      <div>
        {posts.data?.map((post, index) => (
          <Post key={index} post={post} refresh={posts.mutate} />
        ))}
      </div>
    </div>
  );
}

export default Profile;
